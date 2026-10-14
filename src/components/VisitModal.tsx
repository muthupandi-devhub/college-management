import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Ticket, Compass } from 'lucide-react';
import { AethelgardSeal } from './AethelgardSeal.tsx';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFormat?: string;
}

export const VisitModal: React.FC<VisitModalProps> = ({
  isOpen,
  onClose,
  defaultFormat = 'In-Person Historic Quad Walking Tour',
}) => {
  const [format, setFormat] = useState(defaultFormat);
  const [date, setDate] = useState('Thursday, October 24 — 10:00 AM EST (14 spots)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState('Humanities & Classics');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d24]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f2341] text-white border-b border-[#c5a059]/30">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-[#c5a059]" />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight text-white">
                Schedule a Campus Visit
              </h3>
              <p className="text-xs text-[#c5c6ce]">
                Official Guided Quad Walking Tours & Departmental Briefings
              </p>
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
        <div className="p-6 overflow-y-auto bg-[#fef9f0] flex-1">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex p-3 bg-emerald-100 text-emerald-800 rounded-full">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0f2341]">
                Reservation Confirmed
              </h4>
              <p className="text-xs text-[#44474e] max-w-sm mx-auto leading-relaxed">
                Your credentials and visitor parking badge for <strong>{name || 'Prospective Scholar'}</strong> have
                been generated and emailed to <strong>{email || 'your email'}</strong>.
              </p>

              {/* Printable Visitor Pass */}
              <div className="p-4 bg-white border-2 border-dashed border-[#c5a059] rounded-xs text-left max-w-sm mx-auto shadow-xs">
                <div className="flex justify-between items-start border-b border-[#ded9d1] pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <AethelgardSeal size={28} variant="dark" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#775a19] font-bold block">
                        Aethelgard University
                      </span>
                      <span className="text-xs font-serif font-bold text-[#0f2341]">
                        Official Visitor Pass
                      </span>
                    </div>
                  </div>
                  <Ticket className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div className="space-y-1.5 text-xs text-[#1d1c16]">
                  <div>
                    <span className="text-[10px] text-[#75777e] block">Session Format:</span>
                    <span className="font-semibold text-[#0f2341]">{format}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#75777e] block">Date & Time:</span>
                    <span className="font-semibold text-[#0f2341]">{date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#75777e] block">Check-In Landmark:</span>
                    <span className="font-semibold text-[#0f2341]">Cathedral Hall Welcome Rotunda</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#75777e] block">Address:</span>
                    <span className="font-mono text-[11px] text-[#44474e]">1054 Massachusetts Ave, Cambridge, MA</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#0f2341] rounded-xs hover:bg-[#1a3863] transition-colors"
              >
                Close Pass
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  Visit Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="In-Person Historic Quad Walking Tour">
                    In-Person Historic Quad Walking Tour (90 min)
                  </option>
                  <option value="Live Virtual Admissions & Financial Aid Briefing">
                    Live Virtual Admissions & Financial Aid Briefing
                  </option>
                  <option value="Engineering, Robotics & Nanofabrication Lab Tour">
                    Engineering, Robotics & Nanofabrication Lab Tour
                  </option>
                  <option value="Residential College Dinner & Student Panel">
                    Residential College Dinner & Student Panel
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  Available Dates (Fall 2025 / Spring 2026)
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="Thursday, October 24 — 10:00 AM EST (14 spots)">
                    Thursday, October 24 — 10:00 AM EST (14 spots)
                  </option>
                  <option value="Friday, October 25 — 02:00 PM EST (8 spots)">
                    Friday, October 25 — 02:00 PM EST (8 spots)
                  </option>
                  <option value="Monday, November 4 — 10:00 AM EST (20 spots)">
                    Monday, November 4 — 10:00 AM EST (20 spots)
                  </option>
                  <option value="Saturday, November 16 — 11:00 AM EST (Admitted Preview)">
                    Saturday, November 16 — 11:00 AM EST (Admitted Preview)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                    First & Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                    Email Address
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

              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  Academic Discipline of Interest
                </label>
                <select
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="Humanities & Classics">Humanities & Classics</option>
                  <option value="Quantum Computing & Applied Math">Quantum Computing & Applied Math</option>
                  <option value="Biomedical Sciences & Neurobiology">Biomedical Sciences & Neurobiology</option>
                  <option value="Jurisprudence, Law & Diplomacy">Jurisprudence, Law & Diplomacy</option>
                  <option value="Architecture & Sustainable Urbanism">Architecture & Sustainable Urbanism</option>
                </select>
              </div>

              <div className="p-3 bg-white rounded-xs border border-[#ded9d1] text-xs text-[#44474e] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Departing from Cathedral Hall Welcome Center (1054 Mass Ave)</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#0f2341] text-white text-xs font-semibold rounded-xs hover:bg-[#1a3863] transition-colors"
              >
                Confirm Reservation & Generate Pass
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
