import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  FileText,
  UserCheck,
  Users,
  Lock,
  GraduationCap,
  Calculator,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Search,
  Mail,
  MapPin,
  Calendar,
  Landmark,
  Cpu,
  Palette,
  Globe,
  Sparkles,
  PhoneCall,
  Info,
} from 'lucide-react';
import { TwilightGothicQuad } from './VisualFallback.tsx';
import { CampusMap } from './CampusMap.tsx';
import {
  DECISION_TRACKS,
  APPLICATION_STAGES,
  ENDOWED_FELLOWSHIPS,
  REGIONAL_DEANS,
  FAQ_ITEMS,
} from '../data/mockData.ts';
import { DecisionTrackKey } from '../types.ts';

interface AdmissionsViewProps {
  onOpenApply: (track?: string) => void;
  onOpenAidCalculator: () => void;
  onOpenVisit: () => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({
  onOpenApply,
  onOpenAidCalculator,
  onOpenVisit,
}) => {
  const [activeTrackKey, setActiveTrackKey] = useState<DecisionTrackKey>('ed1');
  const [activeApplicantCategory, setActiveApplicantCategory] = useState<
    'first-year' | 'transfer' | 'international' | 'veteran'
  >('first-year');
  const [deanSearch, setDeanSearch] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [visitFormat, setVisitFormat] = useState('In-Person Historic Quad Walking Tour');
  const [visitDate, setVisitDate] = useState('Thursday, October 24 — 10:00 AM EST (14 spots)');
  const [visitName, setVisitName] = useState('');
  const [visitEmail, setVisitEmail] = useState('');
  const [visitDiscipline, setVisitDiscipline] = useState('Humanities & Classics');
  const [visitConfirmed, setVisitConfirmed] = useState(false);
  const [directDeanMessage, setDirectDeanMessage] = useState<string | null>(null);

  const activeTrack =
    DECISION_TRACKS.find((t) => t.key === activeTrackKey) || DECISION_TRACKS[0];

  const filteredDeans = REGIONAL_DEANS.filter((dean) => {
    if (!deanSearch.trim()) return true;
    const q = deanSearch.toLowerCase();
    return (
      dean.name.toLowerCase().includes(q) ||
      dean.territory.toLowerCase().includes(q) ||
      dean.statesCovered.some((s) => s.toLowerCase().includes(q))
    );
  });

  const getStageIcon = (type: string) => {
    switch (type) {
      case 'check':
        return <Check className="w-3.5 h-3.5 text-[#0f2341]" />;
      case 'file':
        return <FileText className="w-3.5 h-3.5 text-[#0f2341]" />;
      case 'quill':
        return <UserCheck className="w-3.5 h-3.5 text-[#0f2341]" />;
      case 'users':
        return <Users className="w-3.5 h-3.5 text-[#0f2341]" />;
      case 'shield':
        return <Lock className="w-3.5 h-3.5 text-[#0f2341]" />;
      default:
        return <GraduationCap className="w-3.5 h-3.5 text-[#0f2341]" />;
    }
  };

  const getFellowshipIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#775a19]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#775a19]" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-[#775a19]" />;
      default:
        return <Landmark className="w-4 h-4 text-[#775a19]" />;
    }
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitConfirmed(true);
    setTimeout(() => {
      onOpenVisit();
    }, 500);
  };

  return (
    <div className="w-full bg-[#fef9f0] text-[#1d1c16]">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-14 border-b border-[#ded9d1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0f2341] leading-[1.15] tracking-tight">
              An Investment in <span className="italic font-serif">Intellectual Mastery</span> & Lifelong Purpose
            </h1>

            <p className="text-base sm:text-lg text-[#44474e] max-w-2xl leading-relaxed">
              Aethelgard practices 100% need-blind admissions for all domestic and international scholars,
              meeting 100% of demonstrated financial need with no loans required.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenApply(activeTrack.label)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f2341] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#1a3863] transition-colors shadow-xs cursor-pointer"
              >
                <span>START UNDERGRADUATE APPLICATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#fed488]" />
              </button>

              <button
                onClick={() => onOpenApply('Graduate Admissions Portal')}
                className="px-5 py-3 bg-transparent text-[#0f2341] border border-[#ded9d1] hover:border-[#0f2341] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#f2ede4] transition-colors cursor-pointer"
              >
                GRADUATE ADMISSIONS PORTAL
              </button>
            </div>

            <div>
              <button
                onClick={onOpenAidCalculator}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#775a19] hover:text-[#0f2341] transition-colors cursor-pointer group"
              >
                <Calculator className="w-4 h-4 text-[#c5a059] group-hover:scale-110 transition-transform" />
                <span className="underline decoration-[#c5a059] underline-offset-4">
                  NET PRICE CALCULATOR
                </span>
              </button>
            </div>

            {/* 3 Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#ded9d1]">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0f2341] block">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#775a19] font-bold block mt-0.5">
                  Demonstrated Need Met
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0f2341] block">
                  $0
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#775a19] font-bold block mt-0.5">
                  Required Loans
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0f2341] block">
                  6:1
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#775a19] font-bold block mt-0.5">
                  Student to Faculty Ratio
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Twilight Gothic Quad Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xs overflow-hidden border border-[#ded9d1] shadow-lg aspect-[4/3] bg-[#0b1324] group">
              <TwilightGothicQuad className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
              
              {/* Bottom Opportunity Pact Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#ffffff]/95 backdrop-blur-xs border border-[#ded9d1] rounded-xs flex items-center justify-between shadow-md">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#775a19] font-bold block">
                    ENDOWED COMMITMENT
                  </span>
                  <span className="font-serif text-sm font-bold text-[#0f2341] block">
                    The Aethelgard Opportunity Pact
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#f8f3ea] border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ADMISSIONS ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-b border-[#ded9d1]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#775a19] block mb-1">
              ADMISSIONS ROADMAP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0f2341] tracking-tight">
              Application Timelines & Decision Tracks
            </h2>
            <p className="text-xs sm:text-sm text-[#44474e] mt-1 max-w-2xl">
              Select the decision pathway aligned with your scholastic journey. Deadlines apply to all
              credentials including academic portfolios.
            </p>
          </div>

          {/* Segmented Control Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ded9d1]/40 rounded-xs self-start md:self-auto">
            {DECISION_TRACKS.map((track) => {
              const isSelected = track.key === activeTrackKey;
              return (
                <button
                  key={track.key}
                  onClick={() => setActiveTrackKey(track.key)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f2341] text-white shadow-xs'
                      : 'text-[#44474e] hover:text-[#0f2341] hover:bg-white/50'
                  }`}
                >
                  {track.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Track Detail Ribbon */}
        <div className="p-4 bg-[#f8f3ea] border border-[#ded9d1] rounded-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base font-bold text-[#0f2341]">
                  {activeTrack.label.split('(')[0].trim()} Track
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-[#fed488] text-[#775a19] font-bold rounded-xs tracking-wider uppercase">
                  {activeTrack.badge}
                </span>
              </div>
              <p className="text-xs text-[#44474e] mt-0.5 max-w-3xl leading-relaxed">
                {activeTrack.description}
              </p>
            </div>
          </div>
          <div className="text-left md:text-right shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-[#ded9d1]">
            <span className="text-[10px] uppercase text-[#75777e] tracking-wider block font-semibold">
              NOTIFICATION DATE
            </span>
            <span className="font-serif text-sm font-bold text-[#0f2341]">
              {activeTrack.notificationDate}
            </span>
          </div>
        </div>

        {/* 6 Stage Sequential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {APPLICATION_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="p-5 bg-white border border-[#ded9d1] rounded-xs flex flex-col justify-between hover:border-[#c5a059] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-bold text-[#0f2341]">
                    {stage.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#775a19] bg-[#f8f3ea] px-2 py-0.5 rounded-xs">
                    {stage.stageName}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#0f2341] mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#44474e] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-[11px] text-[#75777e]">
                <span className="font-medium">{stage.footerNote}</span>
                {getStageIcon(stage.iconType)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: AFFORDABILITY BY DESIGN & COSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-b border-[#ded9d1]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#775a19] block mb-1">
              AFFORDABILITY BY DESIGN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0f2341] tracking-tight">
              Comprehensive Cost & Aid Transparency
            </h2>
            <p className="text-xs sm:text-sm text-[#44474e] mt-1 max-w-2xl">
              We believe world-class inquiry must never be constrained by socioeconomic background. Over
              68% of enrolled scholars receive grant support.
            </p>
          </div>
          <div className="text-xs font-mono text-[#775a19] self-start md:self-auto font-semibold">
            ACADEMIC YEAR: 2025–2026 Direct Estimates
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Standard Schedule of Costs Table */}
          <div className="lg:col-span-7 bg-white border border-[#ded9d1] rounded-xs p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#ded9d1] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#0f2341]">
                Standard Schedule of Costs
              </h3>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#75777e] bg-[#f8f3ea] px-2 py-0.5 rounded-xs">
                BILLED & INDIRECT
              </span>
            </div>

            <div className="space-y-3.5 divide-y divide-[#f2ede4]">
              <div className="pt-2 flex items-start justify-between gap-4">
                <div className="flex items-start gap-2.5">
                  <Landmark className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f2341]">Tuition & Instructional Fees</h4>
                    <p className="text-[11px] text-[#75777e]">Full academic course load, laboratory privileges, advising</p>
                  </div>
                </div>
                <span className="font-serif text-sm font-bold text-[#0f2341] shrink-0">$64,200</span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <div className="flex items-start gap-2.5">
                  <Landmark className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f2341]">Collegiate Housing & Residential Dining</h4>
                    <p className="text-[11px] text-[#75777e]">Guaranteed 4-year campus residency with all-access meals</p>
                  </div>
                </div>
                <span className="font-serif text-sm font-bold text-[#0f2341] shrink-0">$19,400</span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f2341]">Books, Technology & Research Stipend</h4>
                    <p className="text-[11px] text-[#75777e]">Estimated books, computing resources, research archives</p>
                  </div>
                </div>
                <span className="font-serif text-sm font-bold text-[#0f2341] shrink-0">$2,800</span>
              </div>

              <div className="pt-3 flex items-start justify-between gap-4">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0f2341]">Personal Incidentals & Travel Allowance</h4>
                    <p className="text-[11px] text-[#75777e]">Subsidized regional travel transit card, health center coverage</p>
                  </div>
                </div>
                <span className="font-serif text-sm font-bold text-[#0f2341] shrink-0">$2,100</span>
              </div>
            </div>

            {/* Gross Total Cost Row */}
            <div className="p-3.5 bg-[#f8f3ea] border border-[#ded9d1] rounded-xs flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-[#0f2341]">
                GROSS TOTAL COST OF ATTENDANCE
              </span>
              <span className="font-serif text-lg font-bold text-[#0f2341]">$88,500</span>
            </div>

            {/* Illustrative Out of Pocket Highlight Row */}
            <div className="p-4 bg-[#fef9f0] border-2 border-[#c5a059]/40 rounded-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#775a19]">
                  ILLUSTRATIVE NET OUT-OF-POCKET: FAMILY INCOME &lt; $100K
                </span>
                <span className="font-serif text-xl font-bold text-[#14532d]">$0 / Year</span>
              </div>
              <p className="text-xs text-[#44474e]">
                Families earning under $100,000 pay zero parent contribution toward tuition, room, and board.
              </p>
            </div>
          </div>

          {/* Right Column: The Aethelgard Promise Card */}
          <div className="lg:col-span-5 bg-[#0f2341] text-white p-6 sm:p-7 rounded-xs border border-[#c5a059]/40 shadow-xl space-y-5">
            <div className="flex items-center gap-2 text-[#fed488]">
              <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
              <span className="text-xs uppercase tracking-widest font-bold">
                THE AETHELGARD PROMISE
              </span>
            </div>

            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#fed488] block">
                $58,400
              </span>
              <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold block mt-1">
                AVERAGE ANNUAL FELLOWSHIP PACKAGE
              </span>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Every admitted student receives a bespoke grant package tailored precisely to their household
              finances. We replace federal student loans with institutional scholarship endowments.
            </p>

            {/* Progress bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Tuition Coverage Across Admitted Cohort</span>
                <span className="font-bold text-[#fed488]">84% Met By Grants</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#c5a059] rounded-full w-[84%]" />
              </div>
            </div>

            <button
              onClick={onOpenAidCalculator}
              className="w-full py-3 bg-[#c5a059] text-[#0f2341] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#d8b56f] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>LAUNCH QUICK COST ESTIMATOR</span>
              <ArrowUpRight className="w-4 h-4 text-[#0f2341]" />
            </button>
          </div>
        </div>

        {/* Free CSS assistance banner */}
        <div className="mt-6 p-4 bg-white border border-[#ded9d1] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-[#44474e]">
            <PhoneCall className="w-4 h-4 text-[#c5a059] shrink-0" />
            <span>
              <strong>No obligation CSS assistance session with counselors</strong> — personalized 1-on-1 financial aid dossier filing review.
            </span>
          </div>
          <button
            onClick={onOpenAidCalculator}
            className="text-xs font-bold uppercase tracking-wider text-[#0f2341] hover:text-[#775a19] underline decoration-[#c5a059] underline-offset-4 cursor-pointer whitespace-nowrap"
          >
            BOOK CALL
          </button>
        </div>
      </section>

      {/* SECTION: DISTINGUISHED ENDOWED FELLOWSHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-b border-[#ded9d1]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#0f2341] tracking-tight">
              Distinguished Endowed Fellowships
            </h2>
          </div>
          <span className="text-[10px] uppercase font-bold text-[#775a19] tracking-widest hidden sm:inline">
            MERIT & LEADERSHIP COHORTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENDOWED_FELLOWSHIPS.map((fellowship) => (
            <div
              key={fellowship.id}
              className="p-5 bg-white border border-[#ded9d1] rounded-xs flex flex-col justify-between hover:border-[#c5a059] transition-all hover:shadow-xs"
            >
              <div>
                <div className="w-8 h-8 rounded-xs bg-[#f8f3ea] border border-[#ded9d1] flex items-center justify-center mb-3">
                  {getFellowshipIcon(fellowship.icon)}
                </div>
                <h3 className="font-serif text-sm font-bold text-[#0f2341] mb-2">
                  {fellowship.name}
                </h3>
                <p className="text-xs text-[#44474e] leading-relaxed">
                  {fellowship.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f2ede4] text-[10px] uppercase font-bold tracking-wider text-[#775a19]">
                {fellowship.adjudicationNote}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: ADMISSIONS CRITERIA & REQUIREMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-b border-[#ded9d1]">
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#775a19] block mb-1">
            ADMISSIONS CRITERIA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0f2341] tracking-tight">
            Requirements by Applicant Category
          </h2>
          <p className="text-xs sm:text-sm text-[#44474e] mt-1 max-w-2xl">
            Each scholar profile undergoes holistic evaluation. Review the precise document requirements,
            testing policies, and guidelines below.
          </p>
        </div>

        {/* Applicant Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ded9d1]/40 rounded-xs mb-8">
          {[
            { id: 'first-year', label: 'FIRST-YEAR STUDENTS' },
            { id: 'transfer', label: 'TRANSFER APPLICANTS' },
            { id: 'international', label: 'INTERNATIONAL SCHOLARS' },
            { id: 'veteran', label: 'VETERAN & NON-TRADITIONAL' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveApplicantCategory(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                activeApplicantCategory === tab.id
                  ? 'bg-[#0f2341] text-white shadow-xs'
                  : 'text-[#44474e] hover:text-[#0f2341] hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Requirements Grid + Holistic Scholar Assessment Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#ded9d1]">
              <h3 className="font-serif text-lg font-bold text-[#0f2341]">
                First-Year Applicant Checklist
              </h3>
              <span className="text-[10px] uppercase font-semibold text-[#75777e] bg-[#f8f3ea] px-2 py-0.5 rounded-xs">
                ALL MAJORS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#ded9d1] rounded-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <h4 className="text-xs font-bold text-[#0f2341]">Standardized Testing</h4>
                </div>
                <p className="text-xs text-[#44474e] leading-relaxed">
                  <strong>Test-Optional since 2021:</strong> SAT or ACT scores are entirely optional
                  without disadvantage. Score-free reviews applied automatically.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#ded9d1] rounded-xs space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#c5a059]" />
                  <h4 className="text-xs font-bold text-[#0f2341]">Curricular Rigor</h4>
                </div>
                <p className="text-xs text-[#44474e] leading-relaxed">
                  Four years of English, three years of lab sciences, mathematics through pre-calculus or
                  calculus, and two years of foreign language recommended.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#ded9d1] rounded-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#c5a059]" />
                  <h4 className="text-xs font-bold text-[#0f2341]">Writing Monograph</h4>
                </div>
                <p className="text-xs text-[#44474e] leading-relaxed">
                  One 650-word Common App essay plus two Aethelgard Supplemental reflections on scholarly
                  curiosity and community stewardship.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#ded9d1] rounded-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  <h4 className="text-xs font-bold text-[#0f2341]">Artistic & Technical Portfolios</h4>
                </div>
                <p className="text-xs text-[#44474e] leading-relaxed">
                  Optional SlideRoom upload for fine art, coding repos, architectural drawings, or recorded
                  musical performances.
                </p>
              </div>
            </div>
          </div>

          {/* Right Official Stance Card */}
          <div className="lg:col-span-4 bg-[#f8f3ea] border border-[#ded9d1] rounded-xs p-6 space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#775a19] block">
              OFFICIAL STANCE
            </span>
            <h3 className="font-serif text-xl font-bold text-[#0f2341]">
              Holistic Scholar Assessment
            </h3>
            <p className="text-xs text-[#44474e] leading-relaxed">
              We look beyond numerical benchmarks to evaluate individual context, intellectual vigor,
              creative synthesis, and ethical contribution to human flourishing.
            </p>

            <ul className="space-y-2 text-xs text-[#1d1c16] pt-1">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#14532d]" />
                <span>Self-reported test score acceptance</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#14532d]" />
                <span>No fee for application waiver requests</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#14532d]" />
                <span>Duolingo / TOEFL / IELTS accepted</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#ded9d1] text-xs">
              <span className="text-[10px] uppercase text-[#75777e] block font-semibold">
                ADMISSIONS HELPDESK
              </span>
              <a
                href="mailto:admissions@aethelgard.edu"
                className="font-bold text-[#0f2341] hover:underline"
              >
                admissions@aethelgard.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SCHEDULE A CAMPUS VISIT OR LIVE WEBINAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-b border-[#ded9d1]">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#775a19] block mb-1">
            ENGAGE WITH CAMPUS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0f2341] tracking-tight">
            Schedule a Campus Visit or Live Webinar
          </h2>
          <p className="text-xs sm:text-sm text-[#44474e] mt-1 max-w-2xl">
            Walk the historic quadrangles with current scholars or participate in live digital briefings
            hosted by departmental deans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Visit Form */}
          <div className="lg:col-span-6 bg-white border border-[#ded9d1] rounded-xs p-6 space-y-4">
            <form onSubmit={handleVisitSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  VISIT FORMAT
                </label>
                <select
                  value={visitFormat}
                  onChange={(e) => setVisitFormat(e.target.value)}
                  className="w-full text-xs p-2.5 bg-[#fef9f0] border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="In-Person Historic Quad Walking Tour">
                    In-Person Historic Quad Walking Tour
                  </option>
                  <option value="Live Virtual Admissions & Financial Aid Briefing">
                    Live Virtual Admissions & Financial Aid Briefing
                  </option>
                  <option value="Engineering & Quantum Lab Open House">
                    Engineering & Quantum Lab Open House
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  AVAILABLE DATES (FALL 2025)
                </label>
                <select
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full text-xs p-2.5 bg-[#fef9f0] border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
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
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                    FIRST & LAST NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={visitName}
                    onChange={(e) => setVisitName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-[#fef9f0] border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="scholar@example.com"
                    value={visitEmail}
                    onChange={(e) => setVisitEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-[#fef9f0] border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1c16] mb-1">
                  ACADEMIC DISCIPLINE
                </label>
                <select
                  value={visitDiscipline}
                  onChange={(e) => setVisitDiscipline(e.target.value)}
                  className="w-full text-xs p-2.5 bg-[#fef9f0] border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
                >
                  <option value="Humanities & Classics">Humanities & Classics</option>
                  <option value="Quantum Computing & Applied Math">Quantum Computing & Applied Math</option>
                  <option value="Biomedical & Neural Sciences">Biomedical & Neural Sciences</option>
                  <option value="International Law & Global Diplomacy">International Law & Global Diplomacy</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#ded9d1]">
                <div className="flex items-center gap-1.5 text-xs text-[#44474e]">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>1054 Massachusetts Ave, Cambridge, MA</span>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0f2341] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#1a3863] transition-colors cursor-pointer"
                >
                  CONFIRM RESERVATION
                </button>
              </div>
            </form>
          </div>

          {/* Right Campus Quadrangle Map */}
          <div className="lg:col-span-6">
            <CampusMap interactive={true} />
          </div>
        </div>
      </section>

      {/* SECTION: CONNECT WITH YOUR REGIONAL DEAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 border-b border-[#ded9d1]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#775a19] block mb-1">
              PERSONALIZED GUIDANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0f2341] tracking-tight">
              Connect With Your Regional Dean
            </h2>
            <p className="text-xs sm:text-sm text-[#44474e] mt-1 max-w-2xl">
              Our admissions deans travel worldwide and are your direct advocates throughout the committee
              evaluation process.
            </p>
          </div>

          {/* Search state/territory */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#75777e] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search state, country, or territory..."
              value={deanSearch}
              onChange={(e) => setDeanSearch(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-2 bg-white border border-[#ded9d1] rounded-xs text-[#1d1c16] focus:border-[#c5a059] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDeans.map((dean) => (
            <div
              key={dean.id}
              className="p-5 bg-white border border-[#ded9d1] rounded-xs flex flex-col justify-between hover:border-[#c5a059] transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#0f2341] border border-[#c5a059] flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-white text-sm">
                      {dean.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#0f2341]">
                      {dean.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold text-[#775a19] tracking-wider block">
                      {dean.title}
                    </span>
                    <span className="text-xs text-[#44474e] block">Territory: {dean.territory}</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-[#44474e] pt-2 border-t border-[#f2ede4]">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span>Upcoming Visit: {dean.upcomingVisit}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span className="font-mono text-[#0f2341]">{dean.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f2ede4]">
                <button
                  onClick={() => setDirectDeanMessage(dean.name)}
                  className="w-full py-2 bg-[#f8f3ea] hover:bg-[#ded9d1]/50 text-[#0f2341] text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>INQUIRE DIRECTLY ▷</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {directDeanMessage && (
          <div className="mt-4 p-4 bg-[#f8f3ea] border border-[#c5a059] rounded-xs flex items-center justify-between text-xs">
            <span>
              Direct inquiry channel open for <strong>{directDeanMessage}</strong>. Inquiries typically receive a personal response within 48 hours.
            </span>
            <button
              onClick={() => setDirectDeanMessage(null)}
              className="text-[#775a19] font-bold hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}
      </section>

      {/* SECTION: FREQUENTLY ADDRESSED INQUIRIES (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#775a19] block mb-1">
            TRANSPARENT ANSWERS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0f2341] tracking-tight">
            Frequently Addressed Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#44474e] mt-1">
            Essential protocols on admissions interviews, deferrals, financial re-evaluation, and residential guarantees.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#ded9d1] rounded-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fef9f0] transition-colors"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#0f2341]">
                    {item.question}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#775a19] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#75777e] shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 text-xs text-[#44474e] leading-relaxed border-t border-[#f2ede4] pt-3 bg-[#fffdfa]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
