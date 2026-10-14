import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Download } from 'lucide-react';
import { ResearchPublication } from '../types.ts';

interface BibtexModalProps {
  publication: ResearchPublication | null;
  onClose: () => void;
}

export const BibtexModal: React.FC<BibtexModalProps> = ({
  publication,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(publication.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d24]/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f2341] text-white border-b border-[#c5a059]/30">
          <div className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[#c5a059]" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-bold block">
                Academic Citation Export
              </span>
              <h3 className="font-serif text-base font-semibold tracking-tight text-white">
                BibTeX Entry
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 bg-[#fef9f0] flex-1">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#75777e] font-semibold block">
              Paper Title
            </span>
            <h4 className="text-sm font-serif font-bold text-[#0f2341] mt-0.5">
              {publication.title}
            </h4>
            <div className="text-xs text-[#75777e] mt-1">
              {publication.journal} · {publication.volumeIssue} · {publication.publishedDate}
            </div>
          </div>

          <div className="relative">
            <pre className="p-4 bg-[#07101e] text-[#b4c7ed] text-xs font-mono rounded-xs overflow-x-auto leading-relaxed border border-[#334155]">
              {publication.bibtex}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2.5 right-2.5 px-3 py-1.5 bg-[#0f2341] text-white text-[11px] font-semibold rounded-xs border border-[#c5a059]/50 hover:bg-[#1a3863] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3 bg-white border border-[#ded9d1] rounded-xs text-xs text-[#44474e]">
            <span className="font-semibold text-[#0f2341]">Permanent Digital Object Identifier:</span>{' '}
            <span className="font-mono text-[#775a19]">{publication.doi}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#f2ede4] border-t border-[#ded9d1]">
          <span className="text-xs text-[#75777e]">
            Peer-reviewed open access repository
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#0f2341] hover:bg-[#ded9d1]/50 rounded-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
