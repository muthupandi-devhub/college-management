import React from 'react';
import { Shield, BookOpen, Globe, Award, Sparkles, Building2 } from 'lucide-react';
import { AethelgardSeal } from './AethelgardSeal.tsx';
import { PageView } from '../types.ts';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenApply: () => void;
  onOpenVisit: () => void;
  onOpenAidCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenApply,
  onOpenVisit,
  onOpenAidCalculator,
}) => {
  return (
    <footer className="w-full bg-[#000d24] text-white border-t border-[#c5a059]/25 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <AethelgardSeal size={42} variant="gold" />
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-tight leading-tight">
                  Aethelgard
                </h4>
                <span className="text-[10px] tracking-wider uppercase text-[#c5a059] font-medium block">
                  University
                </span>
              </div>
            </div>
            <p className="text-xs text-[#c5c6ce] leading-relaxed">
              Devoted to excellence in teaching, learning, and research, and to developing leaders in
              disciplines that make a global difference.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#c5a059]">
              <div className="p-1.5 rounded-xs bg-white/5 border border-white/10 hover:border-[#c5a059] transition-colors cursor-pointer" title="Global Outreach">
                <Globe className="w-4 h-4" />
              </div>
              <div className="p-1.5 rounded-xs bg-white/5 border border-white/10 hover:border-[#c5a059] transition-colors cursor-pointer" title="Academic Archives">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="p-1.5 rounded-xs bg-white/5 border border-white/10 hover:border-[#c5a059] transition-colors cursor-pointer" title="Accredited Foundation">
                <Shield className="w-4 h-4" />
              </div>
              <div className="p-1.5 rounded-xs bg-white/5 border border-white/10 hover:border-[#c5a059] transition-colors cursor-pointer" title="Ivy Alliance Athletics">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Column 2: Colleges & Schools */}
          <div className="space-y-3">
            <h5 className="text-[11px] uppercase font-bold tracking-[0.1em] text-[#fed488]">
              Colleges & Schools
            </h5>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors text-left"
                >
                  Faculty of Arts and Sciences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors text-left"
                >
                  School of Engineering & Applied Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors text-left"
                >
                  The Graduate School of Humanities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors text-left"
                >
                  Aethelgard Law Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors text-left"
                >
                  School of Medicine & Public Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors text-left"
                >
                  Divinity & Theological Seminary
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Tuition */}
          <div className="space-y-3">
            <h5 className="text-[11px] uppercase font-bold tracking-[0.1em] text-[#fed488]">
              Admissions & Tuition
            </h5>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('admissions');
                    onOpenApply();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Undergraduate Admissions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('admissions');
                    onOpenApply();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Graduate Degree Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Endowed Scholarships & Aid
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-white transition-colors text-left"
                >
                  International Scholar Services
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAidCalculator}
                  className="hover:text-white transition-colors text-left text-[#fed488] font-medium"
                >
                  Tuition Calculator & Grants
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVisit}
                  className="hover:text-white transition-colors text-left"
                >
                  Schedule a Campus Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Resources */}
          <div className="space-y-3">
            <h5 className="text-[11px] uppercase font-bold tracking-[0.1em] text-[#fed488]">
              Campus Resources
            </h5>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className="hover:text-white transition-colors text-left"
                >
                  University Libraries System
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="hover:text-white transition-colors text-left"
                >
                  Laboratories & High-Performance Computing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className="hover:text-white transition-colors text-left"
                >
                  Residential Houses & Dining
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className="hover:text-white transition-colors text-left"
                >
                  Student Health & Psychological Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className="hover:text-white transition-colors text-left"
                >
                  Varsity Athletics & Recreation
                </button>
              </li>
              <li>
                <span className="text-white/60">Campus Safety & Emergency</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Governance */}
          <div className="space-y-3">
            <h5 className="text-[11px] uppercase font-bold tracking-[0.1em] text-[#fed488]">
              Legal & Governance
            </h5>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li>
                <span className="text-white/80">Office of the Chancellor</span>
              </li>
              <li>
                <span className="text-white/80">Board of Overseers & Trustees</span>
              </li>
              <li>
                <span className="text-white/80">University Endowment Disclosure</span>
              </li>
              <li>
                <span className="text-white/80">Accreditation & Quality Assurance</span>
              </li>
              <li>
                <span className="text-white/80">Title IX & Equal Opportunity</span>
              </li>
              <li>
                <span className="text-white/80">Privacy, Cookies & Terms of Use</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation and Location Bar */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 text-xs text-[#c5c6ce]">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>New England Commission of Higher Education Accredited</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Association of American Universities (AAU)</span>
            </div>
          </div>
          <div className="text-white/80 font-mono text-[11px]">
            1054 Massachusetts Ave, Cambridge, MA 02138 • +1 (617) 555-0188
          </div>
        </div>

        {/* Copyright & Endowment Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#75777e]">
          <span>
            © 2025 The President and Fellows of Aethelgard College. All rights reserved.
          </span>
          <span className="font-serif italic text-[#c5a059]">
            Endowment value: $14.2B | Chartered 1888 by Commonwealth Decree
          </span>
        </div>
      </div>
    </footer>
  );
};
