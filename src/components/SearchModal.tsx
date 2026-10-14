import React, { useState } from 'react';
import { Search, X, BookOpen, Building, FlaskConical, FileText, ArrowRight } from 'lucide-react';
import { DEGREE_PROGRAMS, RESIDENTIAL_HOUSES, RESEARCH_INSTITUTES, RESEARCH_PUBLICATIONS } from '../data/mockData.ts';
import { PageView } from '../types.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
  onSelectProgram?: (programId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectProgram,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingPrograms = DEGREE_PROGRAMS.filter(
    (p) =>
      !trimmed ||
      p.title.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed) ||
      p.college.toLowerCase().includes(trimmed)
  );

  const matchingHouses = RESIDENTIAL_HOUSES.filter(
    (h) =>
      !trimmed ||
      h.name.toLowerCase().includes(trimmed) ||
      h.architectureNote.toLowerCase().includes(trimmed) ||
      h.distinguishingTradition.toLowerCase().includes(trimmed)
  );

  const matchingInstitutes = RESEARCH_INSTITUTES.filter(
    (i) =>
      !trimmed ||
      i.title.toLowerCase().includes(trimmed) ||
      i.description.toLowerCase().includes(trimmed) ||
      i.categoryTag.toLowerCase().includes(trimmed)
  );

  const matchingPubs = RESEARCH_PUBLICATIONS.filter(
    (pub) =>
      !trimmed ||
      pub.title.toLowerCase().includes(trimmed) ||
      pub.leadAuthor.toLowerCase().includes(trimmed) ||
      pub.abstract.toLowerCase().includes(trimmed)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#000d24]/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#ded9d1] bg-[#f8f3ea]">
          <Search className="w-5 h-5 text-[#c5a059] shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search academic degrees, residential houses, research institutes, publications..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#1d1c16] placeholder-[#75777e] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#75777e] hover:text-[#1d1c16] text-xs px-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 ml-2 text-[#75777e] hover:text-[#0f2341] rounded-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Stream */}
        <div className="p-4 overflow-y-auto space-y-5 bg-[#fef9f0] flex-1">
          {/* Programs */}
          {matchingPrograms.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-[#775a19] mb-2">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Degree Programs ({matchingPrograms.length})</span>
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('academics');
                  }}
                  className="text-[#0f2341] hover:underline"
                >
                  View Academics
                </button>
              </div>
              <div className="space-y-1.5">
                {matchingPrograms.slice(0, 3).map((prog) => (
                  <div
                    key={prog.id}
                    onClick={() => {
                      onClose();
                      onNavigate('academics');
                      if (onSelectProgram) onSelectProgram(prog.id);
                    }}
                    className="p-2.5 bg-white border border-[#ded9d1] rounded-xs hover:border-[#c5a059] hover:bg-[#fffdf9] cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-serif font-bold text-[#0f2341]">
                        {prog.title}
                      </div>
                      <div className="text-[11px] text-[#75777e]">
                        {prog.degreeCode} · {prog.college}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Research Institutes */}
          {matchingInstitutes.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-[#775a19] mb-2">
                <span className="flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Flagship Research Institutes ({matchingInstitutes.length})</span>
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('research');
                  }}
                  className="text-[#0f2341] hover:underline"
                >
                  View Research
                </button>
              </div>
              <div className="space-y-1.5">
                {matchingInstitutes.slice(0, 2).map((inst) => (
                  <div
                    key={inst.number}
                    onClick={() => {
                      onClose();
                      onNavigate('research');
                    }}
                    className="p-2.5 bg-white border border-[#ded9d1] rounded-xs hover:border-[#c5a059] hover:bg-[#fffdf9] cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-serif font-bold text-[#0f2341]">
                        {inst.title}
                      </div>
                      <div className="text-[11px] text-[#75777e]">{inst.categoryTag}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Residential Houses */}
          {matchingHouses.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-[#775a19] mb-2">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>The Six Residential Houses ({matchingHouses.length})</span>
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('campus-life');
                  }}
                  className="text-[#0f2341] hover:underline"
                >
                  View Campus Life
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingHouses.map((house) => (
                  <div
                    key={house.id}
                    onClick={() => {
                      onClose();
                      onNavigate('campus-life');
                    }}
                    className="p-2.5 bg-white border border-[#ded9d1] rounded-xs hover:border-[#c5a059] cursor-pointer"
                  >
                    <div className="text-xs font-serif font-bold text-[#0f2341]">{house.name}</div>
                    <div className="text-[11px] text-[#75777e]">Chartered {house.charteredYear}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications */}
          {matchingPubs.length > 0 && (
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#775a19] mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Recent High-Impact Publications ({matchingPubs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingPubs.slice(0, 2).map((pub) => (
                  <div
                    key={pub.id}
                    onClick={() => {
                      onClose();
                      onNavigate('research');
                    }}
                    className="p-2.5 bg-white border border-[#ded9d1] rounded-xs hover:border-[#c5a059] cursor-pointer"
                  >
                    <div className="text-xs font-serif font-bold text-[#0f2341] line-clamp-1">
                      {pub.title}
                    </div>
                    <div className="text-[10px] text-[#75777e]">
                      {pub.journal} · {pub.publishedDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#f2ede4] border-t border-[#ded9d1] flex items-center justify-between text-[11px] text-[#75777e]">
          <span>Tip: Press ESC to exit search</span>
          <span className="font-mono text-[#0f2341]">Aethelgard Search Index</span>
        </div>
      </div>
    </div>
  );
};
