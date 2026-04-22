import { useState, useId } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  searchable?: boolean;
}

export default function FAQAccordion({ items, searchable = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const baseId = useId();

  const filteredItems = searchable
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {searchable && (
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-500 dark:text-gray-500"
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
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-light-100 dark:bg-white/5 border border-light-200 dark:border-white/10 rounded-lg text-light-900 dark:text-white placeholder-light-500 dark:placeholder-gray-500 focus-ring transition-colors"
          />
        </div>
      )}

      {filteredItems.length === 0 ? (
        <div className="text-center py-8 text-light-600 dark:text-gray-400">
          No questions found matching your search.
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`${baseId}-panel-${index}`}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-light-100 dark:hover:bg-white/5 transition-colors focus-ring"
              >
                <span className="font-medium text-light-900 dark:text-white pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-electric-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`${baseId}-panel-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-light-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
