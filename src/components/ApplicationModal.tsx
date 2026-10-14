import React, { useState } from 'react';
import { X, Send, CheckCircle2, FileText, Sparkles, BookOpen, Clock } from 'lucide-react';
import { AethelgardSeal } from './AethelgardSeal.tsx';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTrack = 'Early Decision I',
}) => {
  const [level, setLevel] = useState<'undergraduate' | 'graduate'>('undergraduate');
  const [selectedTrack, setSelectedTrack] = useState<string>(initialTrack);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [intendedDiscipline, setIntendedDiscipline] = useState<string>('Classical Philosophy & Applied Ethics');
  const [monographTitle, setMonographTitle] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d24]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f2341] text-white border-b border-[#c5a059]/30">
          <div className="flex items-center gap-3">
            <AethelgardSeal size={36} variant="gold" />
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold block">
                Office of Admissions Dossier Portal
              </span>
              <h3 className="font-serif text-lg font-semibold tracking-tight text-white">
                Begin Candidate Dossier
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto bg-[#fef9f0] flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-3 bg-emerald-100 rounded-full text-emerald-800">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0f2341]">
                Candidate Dossier Initiated
              </h4>
              <p className="text-sm text-[#44474e] max-w-md mx-auto leading-relaxed">
                Welcome, <strong>{fullName || 'Scholar'}</strong>. Your candidate record has been
                provisioned under dossier code{' '}
                <span className="font-mono font-bold text-[#0f2341]">
                  AETH-2026-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                . An official portal access link and credential confirmation have been dispatched to{' '}
                <strong>{email || 'your registered email'}</strong>.
              </p>
              <div className="p-4 bg-white rounded-xs border border-[#ded9d1] text-left text-xs text-[#1d1c16] space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#75777e]">Selected Decision Track:</span>
                  <span className="font-semibold text-[#0f2341]">{selectedTrack}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#75777e]">Academic College:</span>
                  <span className="font-semibold text-[#0f2341]">{intendedDiscipline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#75777e]">Need-Blind Aid Eligibility:</span>
                  <span className="font-semibold text-emerald-700">100% Guaranteed</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0f2341] text-white text-xs font-semibold rounded-xs hover:bg-[#1a3863] transition-colors"
                >
                  Return to Admissions Overview
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Level Segment */}
              <div className="flex p-1 bg-[#ded9d1]/50 rounded-xs">
                <button
                  type="button"
                  onClick={() => setLevel('undergraduate')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-xs transition-colors ${
                    level === 'undergraduate'
                      ? 'bg-[#0f2341] text-white shadow-xs'
                      : 'text-[#44474e] hover:text-[#0f2341]'
                  }`}
                >
                  Undergraduate Admissions (A.B. / S.B.)
                </button>
                <button
                  type="button"
                  onClick={() => setLevel('graduate')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-xs transition-colors ${
                    level === 'graduate'
                      ? 'bg-[#0f2341] text-white shadow-xs'
                      : 'text-[#44474e] hover:text-[#0f2341]'
                  }`}
                >
                  Graduate & Doctoral Studies (Ph.D. / M.D. / J.D.)
                </button>
              </div>

              {/* Decision Track */}
              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  Application Track & Deadline
                </label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="Early Decision I (Nov 1)">Early Decision I (Nov 1) — Binding Plan</option>
                  <option value="Early Decision II (Jan 5)">Early Decision II (Jan 5) — Binding Plan</option>
                  <option value="Regular Decision (Jan 15)">Regular Decision (Jan 15) — Non-Binding</option>
                  <option value="Transfer Students (Mar 1)">Transfer Lateral Candidate (Mar 1)</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                    Candidate Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                    Direct Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="scholar@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Major / Discipline */}
              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  Intended Primary Concentration
                </label>
                <select
                  value={intendedDiscipline}
                  onChange={(e) => setIntendedDiscipline(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="Classical Philosophy & Applied Ethics">Classical Philosophy & Applied Ethics</option>
                  <option value="Quantum Computing & Applied Mathematics">Quantum Computing & Applied Mathematics</option>
                  <option value="Molecular Neuroscience & Neural Pathology">Molecular Neuroscience & Neural Pathology</option>
                  <option value="International Human Rights & Trade Law">International Human Rights & Trade Law</option>
                  <option value="Architectural Heritage & Urban Design">Architectural Heritage & Urban Design</option>
                  <option value="Economics & Quantitative Public Policy">Economics & Quantitative Public Policy</option>
                  <option value="Undeclared Curricular Exploration">Undeclared First-Year Core Inquiry</option>
                </select>
              </div>

              {/* Monograph Working Title */}
              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  Intellectual Curiosity Monograph Working Title (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. On the Epistemology of Proof in Distributed Networks"
                  value={monographTitle}
                  onChange={(e) => setMonographTitle(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                />
                <span className="text-[10px] text-[#75777e] mt-1 block">
                  The Aethelgard Monograph asks scholars to explore a singular unresolved question across any discipline.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-[#ded9d1]">
                <span className="text-[11px] text-[#75777e]">
                  No fee required for waiver requests
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0f2341] text-white text-xs font-semibold rounded-xs hover:bg-[#1a3863] transition-colors shadow-xs"
                >
                  <span>Submit Initial Dossier</span>
                  <Send className="w-3.5 h-3.5 text-[#c5a059]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
