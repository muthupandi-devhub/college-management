import React, { useState } from 'react';
import {
  FlaskConical,
  Atom,
  Dna,
  Cpu,
  FileText,
  Download,
  Share2,
  ExternalLink,
  DollarSign,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  Building2,
  Lightbulb,
  TrendingUp,
  Globe,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import {
  RESEARCH_INSTITUTES,
  RESEARCH_PUBLICATIONS,
  INSTRUMENTATION_CORES,
  STARTUP_SPINOUTS,
  FUNDING_OPPORTUNITIES,
} from '../data/mockData.ts';
import { ResearchPublication, ResearchInstitute } from '../types.ts';
import { ResearchCleanroomLab } from './VisualFallback.tsx';

interface ResearchViewProps {
  onOpenBibtex: (pub: ResearchPublication) => void;
  onOpenSearchModal: () => void;
}

export const ResearchView: React.FC<ResearchViewProps> = ({
  onOpenBibtex,
  onOpenSearchModal: _onOpenSearchModal,
}) => {
  const [selectedJournal, setSelectedJournal] = useState<string>('all');
  const [selectedInstitute, setSelectedInstitute] = useState<ResearchInstitute>(RESEARCH_INSTITUTES[0]);
  const [searchPubQuery, setSearchPubQuery] = useState<string>('');
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const filteredPublications = RESEARCH_PUBLICATIONS.filter((pub) => {
    const matchesJournal =
      selectedJournal === 'all' || pub.journal.toLowerCase().includes(selectedJournal.toLowerCase());
    const authors = pub.leadAuthor || pub.authors || '';
    const keywords = pub.keywords || ['Discovery', 'Aethelgard Research'];
    const matchesQuery =
      pub.title.toLowerCase().includes(searchPubQuery.toLowerCase()) ||
      authors.toLowerCase().includes(searchPubQuery.toLowerCase()) ||
      keywords.some((k: string) => k.toLowerCase().includes(searchPubQuery.toLowerCase()));
    return matchesJournal && matchesQuery;
  });

  const handleDownloadPdf = (title: string) => {
    setDownloadSuccessToast(`Archival PDF for "${title.slice(0, 40)}..." downloaded.`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  const researchMetrics = [
    { label: 'Annual Sponsored Expenditure', val: '$1.42 Billion', sub: 'NSF, NIH, DARPA, DOE & Philanthropic Grants' },
    { label: 'Active Commercial Patents', val: '142 Patents', sub: 'Administered by Office of Technology Licensing' },
    { label: 'Specialized Research Facilities', val: '38 Facilities', sub: 'Including Class 100 Nanofab & 300kV Cryo-EM' },
    { label: 'Undergrad Research Participation', val: '84%', sub: 'Funded via UROP Fellowships & Endowments' },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#1c1917] selection:bg-[#7d1d28]/20 selection:text-[#7d1d28]">
      {/* Toast Notification */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1917] text-white px-5 py-3 border border-[#e0a96d] shadow-2xl flex items-center gap-3 animate-fade-in text-xs font-serif">
          <ShieldCheck className="w-4 h-4 text-[#e0a96d]" />
          <span>{downloadSuccessToast}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative border-b border-[#e7e3db] bg-gradient-to-b from-[#f8f5ee] to-[#fcfbf9] pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7d1d28]/10 text-[#7d1d28] border border-[#7d1d28]/20 text-xs font-serif uppercase tracking-widest mb-6">
                <FlaskConical className="w-3.5 h-3.5" />
                Office of the Vice Provost for Research & Enterprise
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1c1917] leading-[1.12] tracking-tight mb-6">
                Translating Fundamental Inquiry into Civilizational Impact.
              </h1>
              <p className="text-lg text-[#57534e] font-serif leading-relaxed mb-8 max-w-2xl">
                From room-temperature topological quantum bits and mRNA synthetic immunotherapies to moral frameworks for autonomous artificial intelligence, Aethelgard researchers push the perimeter of human capability.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#publications"
                  className="inline-flex items-center gap-2 bg-[#7d1d28] hover:bg-[#63141f] text-white px-6 py-3.5 text-xs font-serif uppercase tracking-widest font-medium transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#e0a96d]" />
                  Explore Recent Publications
                </a>
                <a
                  href="#institutes"
                  className="inline-flex items-center gap-2 border border-[#a8a29e] hover:border-[#1c1917] text-[#1c1917] bg-white px-6 py-3.5 text-xs font-serif uppercase tracking-widest font-medium transition-colors"
                >
                  <Atom className="w-4 h-4 text-[#7d1d28]" />
                  Interdisciplinary Institutes
                </a>
              </div>

              {/* Research Metrics Quad */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#e7e3db]">
                {researchMetrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-2xl font-bold text-[#1c1917]">{m.val}</div>
                    <div className="text-[11px] uppercase tracking-wider text-[#78716c] font-sans mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Quantum Cleanroom Card */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#d6d0c4] bg-white p-3 shadow-xl">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden border border-[#e7e3db]">
                  <ResearchCleanroomLab className="w-full h-full" />
                  <div className="absolute top-3 left-3 bg-[#1c1917]/85 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-serif uppercase tracking-widest border border-white/20">
                    Vance Nanoscale Facility &bull; ISO Class 100
                  </div>
                </div>
                <div className="p-4 bg-[#fcfbf9] border-t border-[#e7e3db]">
                  <div className="flex items-center justify-between text-xs text-[#78716c] font-serif mb-1">
                    <span className="text-[#7d1d28] font-bold">ANNUAL EXPENDITURE $1.42B</span>
                    <span>Cambridge & Boston Labs</span>
                  </div>
                  <p className="text-xs text-[#57534e] italic">
                    &quot;Our mandate is simple: attack the deepest, most intractable questions facing humanity, and train the next generation of scientific explorers.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Expenditure & Grant Allocation Chart */}
      <section className="py-16 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Fiscal Grant Portfolio</div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917] mb-3">
                Sponsored Research Allocation
              </h2>
              <p className="text-sm text-[#57534e] font-serif leading-relaxed">
                Aethelgard manages over 2,400 concurrent sponsored research grants from federal agencies, sovereign research foundations, and corporate collaborative laboratories.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-serif mb-1.5">
                  <span className="font-bold text-[#1c1917]">National Institutes of Health (NIH) &ndash; Biomedical</span>
                  <span className="text-[#7d1d28] font-bold">$510 Million (36%)</span>
                </div>
                <div className="w-full bg-[#f4efe6] h-3 rounded-none overflow-hidden border border-[#e7e3db]">
                  <div className="bg-[#7d1d28] h-full" style={{ width: '36%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-serif mb-1.5">
                  <span className="font-bold text-[#1c1917]">National Science Foundation (NSF) &ndash; Quantum & Computing</span>
                  <span className="text-[#1c1917] font-bold">$420 Million (30%)</span>
                </div>
                <div className="w-full bg-[#f4efe6] h-3 rounded-none overflow-hidden border border-[#e7e3db]">
                  <div className="bg-[#1c1917] h-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-serif mb-1.5">
                  <span className="font-bold text-[#1c1917]">Endowed University Research Trusts & Philanthropic Chairs</span>
                  <span className="text-[#78716c] font-bold">$280 Million (20%)</span>
                </div>
                <div className="w-full bg-[#f4efe6] h-3 rounded-none overflow-hidden border border-[#e7e3db]">
                  <div className="bg-[#a8a29e] h-full" style={{ width: '20%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-serif mb-1.5">
                  <span className="font-bold text-[#1c1917]">DARPA, DOE & Advanced Energy Initiatives</span>
                  <span className="text-[#b45309] font-bold">$210 Million (14%)</span>
                </div>
                <div className="w-full bg-[#f4efe6] h-3 rounded-none overflow-hidden border border-[#e7e3db]">
                  <div className="bg-[#b45309] h-full" style={{ width: '14%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Research Institutes */}
      <section id="institutes" className="py-20 border-b border-[#e7e3db] bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Interdisciplinary Centers</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">Flagship Research Institutes</h2>
            <p className="text-sm text-[#57534e] font-serif mt-3 leading-relaxed">
              Our university-wide cross-faculty institutes convene mathematicians, ethicists, molecular biologists, and legal scholars to dissolve traditional academic silos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Institute List */}
            <div className="lg:col-span-5 border border-[#e7e3db] divide-y divide-[#e7e3db] bg-white">
              {RESEARCH_INSTITUTES.map((inst) => {
                const isSelected = (selectedInstitute.id || selectedInstitute.number) === (inst.id || inst.number);
                return (
                  <button
                    key={inst.id || inst.number}
                    onClick={() => setSelectedInstitute(inst)}
                    className={`w-full text-left p-5 transition-all ${
                      isSelected
                        ? 'bg-[#fcfbf9] border-l-4 border-l-[#7d1d28]'
                        : 'hover:bg-[#f6f2ea]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#78716c] font-sans mb-1">
                      <span className="uppercase tracking-wider font-semibold text-[#7d1d28]">{inst.categoryTag || inst.focus}</span>
                      <span>Est. {inst.foundedYear || 1994}</span>
                    </div>
                    <div className={`font-serif text-base ${isSelected ? 'text-[#7d1d28] font-bold' : 'text-[#1c1917]'}`}>
                      {inst.title || inst.name}
                    </div>
                    <div className="text-xs text-[#57534e] font-serif mt-1">
                      Lead PI: {inst.director}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Institute Detail Card */}
            <div className="lg:col-span-7 border border-[#d6d0c4] bg-white p-6 lg:p-8">
              <div className="pb-6 border-b border-[#e7e3db]">
                <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-1">
                  DIRECTOR & PI: {selectedInstitute.director}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917]">
                  {selectedInstitute.title || selectedInstitute.name}
                </h3>
                <p className="text-sm text-[#57534e] font-serif leading-relaxed mt-3">
                  {selectedInstitute.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6 border-b border-[#e7e3db]">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Active Faculty & PIs</div>
                  <div className="font-serif text-xl font-bold text-[#1c1917] mt-1">
                    {selectedInstitute.facultyCount || 28} Scholars
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Annual Grant Funding</div>
                  <div className="font-serif text-xl font-bold text-[#7d1d28] mt-1">
                    {selectedInstitute.metric || selectedInstitute.annualFunding || '$120M'}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Specialized Lab Core</div>
                  <div className="font-serif text-xl font-bold text-[#1c1917] mt-1">
                    {selectedInstitute.labLocation || 'Cambridge Science Complex'}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs font-serif uppercase tracking-wider text-[#1c1917] font-bold mb-3">
                  Key Research Frontiers & Active Initiatives
                </div>
                <div className="flex flex-wrap gap-2">
                  {(selectedInstitute.keyInitiatives || [selectedInstitute.keyInitiative || 'Cross-disciplinary research initiatives']).map((init: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fcfbf9] border border-[#e7e3db] text-xs font-serif text-[#44403c]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7d1d28]" />
                      {init}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent High-Impact Publications Section */}
      <section id="publications" className="py-20 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Scholarly Output</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">Recent High-Impact Publications</h2>
              <p className="text-sm text-[#57534e] font-serif mt-2 max-w-2xl">
                Groundbreaking peer-reviewed contributions appearing in Nature, Science, Cell, and leading disciplinary journals. Download formatted BibTeX citations or access pre-print manuscripts.
              </p>
            </div>

            {/* Publication Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#a8a29e] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search author, topic, DOI..."
                value={searchPubQuery}
                onChange={(e) => setSearchPubQuery(e.target.value)}
                className="w-full bg-[#fcfbf9] border border-[#d6d0c4] text-[#1c1917] pl-9 pr-3 py-2 text-xs font-serif placeholder:italic focus:outline-none focus:border-[#7d1d28]"
              />
            </div>
          </div>

          {/* Journal Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[#e7e3db] pb-4">
            {[
              { id: 'all', label: 'All Journals' },
              { id: 'nature', label: 'Nature Portfolio' },
              { id: 'science', label: 'Science / AAAS' },
              { id: 'cell', label: 'Cell Press' },
              { id: 'ieee', label: 'IEEE Publications' },
            ].map((j) => (
              <button
                key={j.id}
                onClick={() => setSelectedJournal(j.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                  selectedJournal === j.id
                    ? 'bg-[#7d1d28] text-white font-serif'
                    : 'bg-[#fcfbf9] text-[#57534e] border border-[#e7e3db] hover:border-[#1c1917]'
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>

          {/* Publications Feed */}
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="border border-[#e7e3db] bg-[#fcfbf9] p-6 sm:p-8 hover:border-[#7d1d28] transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#78716c] font-sans mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-[#7d1d28] uppercase tracking-wider">{pub.journal}</span>
                    <span>&bull;</span>
                    <span>{pub.year || pub.publishedDate.slice(-4) || '2024'}</span>
                    <span>&bull;</span>
                    <span className="font-mono text-[11px] text-[#57534e]">DOI: {pub.doi}</span>
                  </div>
                  <div className="text-[#b45309] font-serif font-bold">
                    {pub.citationMetrics || `${pub.citationsCount || 420} Citations`}
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1c1917] group-hover:text-[#7d1d28] transition-colors mb-2">
                  {pub.title}
                </h3>

                <div className="text-xs text-[#57534e] font-serif mb-4 italic">
                  Lead Author: {pub.leadAuthor || pub.authors}
                </div>

                <p className="text-xs sm:text-sm text-[#44403c] font-serif leading-relaxed mb-6 bg-white p-4 border border-[#e7e3db]">
                  &quot;{pub.abstract}&quot;
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e7e3db]">
                  <div className="flex flex-wrap gap-1.5">
                    {(pub.keywords || ['Peer-Reviewed', 'Aethelgard Core Research', 'Science & Discovery']).map((kw: string, idx: number) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#f4efe6] text-[11px] text-[#57534e] font-sans border border-[#e7e3db]">
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenBibtex(pub)}
                      className="inline-flex items-center gap-1.5 border border-[#d6d0c4] hover:border-[#1c1917] bg-white text-[#1c1917] px-3.5 py-1.5 text-xs font-serif uppercase tracking-wider transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#7d1d28]" />
                      BibTeX Citation
                    </button>
                    <button
                      onClick={() => handleDownloadPdf(pub.title)}
                      className="inline-flex items-center gap-1.5 bg-[#7d1d28] hover:bg-[#63141f] text-white px-3.5 py-1.5 text-xs font-serif uppercase tracking-wider transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredPublications.length === 0 && (
              <div className="p-12 text-center border border-dashed border-[#d6d0c4] bg-[#fcfbf9]">
                <FileText className="w-8 h-8 text-[#a8a29e] mx-auto mb-3" />
                <div className="font-serif text-lg text-[#1c1917]">No publications matched your search criteria.</div>
                <div className="text-xs text-[#78716c] mt-1 font-serif">Clear filters or try searching for keywords like &quot;Quantum&quot;, &quot;CRISPR&quot;, or &quot;Graph&quot;.</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* World-Class Instrumentation Cores */}
      <section className="py-20 border-b border-[#e7e3db] bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Shared User Facilities</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">State-of-the-Art Core Instrumentation</h2>
            <p className="text-sm text-[#57534e] font-serif mt-3 leading-relaxed">
              University researchers enjoy 24/7 access to over $350 million in centralized scientific equipment maintained by staff doctoral research scientists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUMENTATION_CORES.map((core) => (
              <div key={core.id} className="bg-white border border-[#e7e3db] p-6 flex flex-col justify-between hover:border-[#7d1d28] transition-colors">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#7d1d28] mb-1">{core.facility || core.subhead}</div>
                  <h3 className="font-serif text-lg text-[#1c1917] font-bold mb-2">{core.name}</h3>
                  <div className="text-xs text-[#78716c] font-sans mb-3">{core.specifications || core.description}</div>
                  <p className="text-xs text-[#57534e] font-serif leading-relaxed mb-4">{core.description}</p>
                </div>
                <div className="pt-3 border-t border-[#e7e3db] text-[11px] text-[#78716c] flex items-center justify-between">
                  <span>Booking Access:</span>
                  <strong className="text-[#1c1917] font-serif">{core.accessPolicy || core.metric}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Undergraduate Research Opportunities Program (UROP) */}
      <section className="py-20 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-serif uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                UROP Direct Lab Grants
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] mb-4">
                Every Undergraduate Can Publish Before Graduation.
              </h2>
              <p className="text-sm text-[#57534e] font-serif leading-relaxed mb-6">
                Through the endowed Vance Undergraduate Research Fund, scholars are funded to work directly inside PI laboratories as early as their first semester. Over 84% of seniors co-author peer-reviewed papers before walking at commencement.
              </p>

              <div className="space-y-4">
                {FUNDING_OPPORTUNITIES.map((opp) => (
                  <div key={opp.id} className="p-4 bg-[#fcfbf9] border border-[#e7e3db]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-serif font-bold text-[#1c1917]">{opp.title || opp.program}</span>
                      <span className="text-[#7d1d28] font-bold font-serif">{opp.stipend || opp.fundingTier}</span>
                    </div>
                    <p className="text-xs text-[#57534e] font-serif">{opp.description}</p>
                    <div className="mt-2 text-[11px] text-[#78716c]">Eligibility: {opp.eligibility || opp.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Translating Discovery & Venture Spinouts */}
            <div className="lg:col-span-6">
              <div className="border border-[#d6d0c4] bg-[#fcfbf9] p-6 lg:p-8">
                <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Office of Technology Licensing</div>
                <h3 className="font-serif text-2xl text-[#1c1917] mb-2">Commercial Spinouts & Industry Translation</h3>
                <p className="text-xs text-[#57534e] font-serif leading-relaxed mb-6">
                  Aethelgard faculty and student founders have launched over 110 successful spinouts, raising $4.8B in venture capital to commercialize clean fusion, synthetic biology, and photonic semiconductors.
                </p>

                <div className="space-y-4">
                  {STARTUP_SPINOUTS.map((sp) => (
                    <div key={sp.id} className="bg-white border border-[#e7e3db] p-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-serif font-bold text-sm text-[#1c1917]">{sp.companyName || sp.name}</span>
                        <span className="bg-[#f4efe6] px-2 py-0.5 text-[11px] font-sans text-[#7d1d28] border border-[#e7e3db]">
                          {sp.capitalRaised || sp.funding || sp.fundingRound}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#78716c] font-sans mb-1">
                        Sector: {sp.sector || sp.category} &bull; Founded {sp.yearFounded || 2021}
                      </div>
                      <p className="text-xs text-[#57534e] font-serif">{sp.description}</p>
                      <div className="mt-2 text-[11px] text-[#1c1917] italic">Key Founder: {sp.founders || 'Faculty PIs & Postdocs'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
