import React, { useState, useEffect, useRef, useCallback } from "react";
import MiniSearch from "minisearch";

interface SearchResult {
  id: string;
  type: "blog" | "case";
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  client?: string;
  industry?: string;
  services?: string[];
  url: string;
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isIndexLoaded, setIsIndexLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const miniSearchRef = useRef<MiniSearch | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const onClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    setSelectedIndex(0);
    document.dispatchEvent(new CustomEvent("search-modal-closed"));
  }, []);

  // Initialize MiniSearch and load index
  const initSearch = useCallback(async () => {
    if (isIndexLoaded || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch("/search-index.json");
      const data = await response.json();

      miniSearchRef.current = new MiniSearch({
        fields: ["title", "description", "category", "tags", "client", "industry", "services"],
        storeFields: [
          "id",
          "type",
          "title",
          "description",
          "category",
          "tags",
          "client",
          "industry",
          "services",
          "url",
        ],
        searchOptions: {
          prefix: true,
          fuzzy: true,
          boost: {
            title: 3,
            description: 2,
            category: 1.5,
            tags: 1.5,
            client: 1.5,
            industry: 1.5,
            services: 1.5,
          },
        },
      });

      miniSearchRef.current.addAll(data);
      setIsIndexLoaded(true);
    } catch (error) {
      console.error("Error loading search index:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isIndexLoaded, isLoading]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      initSearch();
    }
  }, [isOpen, initSearch]);

  // Listen for custom events to open/close modal
  useEffect(() => {
    const handleOpenSearch = () => setIsOpen(true);
    const handleCloseSearch = () => setIsOpen(false);

    document.addEventListener("open-search", handleOpenSearch);
    document.addEventListener("close-search", handleCloseSearch);

    return () => {
      document.removeEventListener("open-search", handleOpenSearch);
      document.removeEventListener("close-search", handleCloseSearch);
    };
  }, []);

  // Search when query changes
  useEffect(() => {
    if (!miniSearchRef.current || query.trim().length < 2) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchResults = miniSearchRef.current.search(query) as unknown as SearchResult[];
    setResults(searchResults);
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            window.location.href = results[selectedIndex].url;
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl glass-card rounded-xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <svg
            className="w-5 h-5 text-light-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog posts and case studies..."
            className="flex-1 bg-transparent text-white placeholder-light-600 dark:placeholder-gray-400 outline-none focus-ring"
            id="search-title"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-light-600 dark:text-gray-300 bg-white/5 rounded">
            <span className="text-xs">ESC</span>
          </kbd>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="max-h-96 overflow-y-auto">
          {isLoading && (
            <div className="p-8 text-center text-light-600 dark:text-gray-300">Loading search index...</div>
          )}

          {!isLoading && query.length < 2 && (
            <div className="p-8 text-center text-light-600 dark:text-gray-300">
              <p className="text-sm">Type at least 2 characters to search</p>
              <p className="text-xs mt-2 text-gray-500">
                Press <kbd className="px-1 py-0.5 bg-white/5 rounded">↑</kbd>{" "}
                <kbd className="px-1 py-0.5 bg-white/5 rounded">↓</kbd> to navigate,{" "}
                <kbd className="px-1 py-0.5 bg-white/5 rounded">Enter</kbd> to select
              </p>
            </div>
          )}

          {!isLoading && query.length >= 2 && results.length === 0 && (
            <div className="p-8 text-center text-light-600 dark:text-gray-300">
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs mt-2 text-gray-500">
                Try different keywords or check your spelling
              </p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="py-2">
              {results.map((result, index) => (
                <a
                  key={result.id}
                  href={result.url}
                  className={`block px-4 py-3 transition-colors ${
                    index === selectedIndex
                      ? "bg-electric-500/20 text-electric-400"
                      : "hover:bg-white/5 text-gray-300 hover:text-white"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-electric-500/20 text-electric-400">
                          {result.type === "blog" ? "Blog" : "Case Study"}
                        </span>
                        {result.category && (
                          <span className="text-xs text-gray-500">{result.category}</span>
                        )}
                        {result.industry && (
                          <span className="text-xs text-gray-500">{result.industry}</span>
                        )}
                      </div>
                      <h3 className="font-medium text-white truncate">{result.title}</h3>
                      {result.description && (
                        <p className="text-sm text-light-600 dark:text-gray-300 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                      )}
                      {result.client && (
                        <p className="text-sm text-light-600 dark:text-gray-300 mt-1">Client: {result.client}</p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-white/10 text-xs text-gray-500 flex items-center justify-between">
          <span>
            {results.length} {results.length === 1 ? "result" : "results"}
          </span>
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 bg-white/5 rounded">↑↓</kbd>
            <span>to navigate</span>
            <kbd className="px-1.5 py-0.5 bg-white/5 rounded">↵</kbd>
            <span>to select</span>
            <kbd className="px-1.5 py-0.5 bg-white/5 rounded">esc</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
