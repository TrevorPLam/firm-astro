import { useState, useMemo } from 'react';

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  results: Array<{ metric: string; value: string; improvement?: string }>;
  image?: string;
  featured?: boolean;
}

interface CaseStudyFilterProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyFilter({ caseStudies }: CaseStudyFilterProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string>('all');

  // Extract unique industries and services
  const industries = useMemo(() => {
    const unique = new Set(caseStudies.map((cs) => cs.industry));
    return ['all', ...Array.from(unique)];
  }, [caseStudies]);

  const services = useMemo(() => {
    const unique = new Set(caseStudies.flatMap((cs) => cs.services));
    return ['all', ...Array.from(unique)];
  }, [caseStudies]);

  // Filter case studies
  const filteredStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry;
      const matchesService = selectedService === 'all' || cs.services.includes(selectedService);
      return matchesIndustry && matchesService;
    });
  }, [caseStudies, selectedIndustry, selectedService]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus-ring transition-colors appearance-none cursor-pointer select-arrow"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry} className="bg-dark-800">
                {industry === 'all' ? 'All Industries' : industry}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus-ring transition-colors appearance-none cursor-pointer select-arrow"
          >
            {services.map((service) => (
              <option key={service} value={service} className="bg-dark-800">
                {service === 'all' ? 'All Services' : service}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-gray-400 text-sm mb-6">
        Showing {filteredStudies.length} of {caseStudies.length} case studies
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study) => (
          <a
            key={study.slug}
            href={`/work/${study.slug}`}
            className="glass-card overflow-hidden card-hover group block focus-ring"
          >
            {study.image && (
              <div className="aspect-video bg-white/5 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-electric-400 font-medium uppercase tracking-wider">
                  {study.industry}
                </span>
                {study.featured && (
                  <span className="px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors">
                {study.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{study.client}</p>

              <div className="grid grid-cols-2 gap-4">
                {study.results.slice(0, 2).map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-display font-bold text-electric-400">
                      {result.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{result.metric}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-sm text-electric-400 font-medium">View Details</span>
                <svg
                  className="w-4 h-4 text-electric-400 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filteredStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No case studies match your selected filters.</p>
          <button
            onClick={() => {
              setSelectedIndustry('all');
              setSelectedService('all');
            }}
            className="mt-4 text-electric-400 hover:text-electric-300 transition-colors focus-ring"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
