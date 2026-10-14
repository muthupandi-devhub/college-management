import React, { useState } from 'react';
import {
  Search,
  Globe,
  Heart,
  Menu,
  X,
  Compass,
  ArrowRight,
  User,
} from 'lucide-react';
import { PageView } from '../types.ts';
import { AethelgardSeal } from './AethelgardSeal.tsx';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenApply: () => void;
  onOpenVisit: () => void;
  onOpenSearch: () => void;
  onOpenAidCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenApply,
  onOpenVisit,
  onOpenSearch,
  onOpenAidCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'LA' | 'FR' | 'DE'>('EN');

  const navItems: { view: PageView; label: string }[] = [
    { view: 'admissions', label: 'Admissions & Aid' },
    { view: 'academics', label: 'Academics' },
    { view: 'campus-life', label: 'Campus Life' },
    { view: 'research', label: 'Research & Innovation' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000d24] text-white border-b border-[#c5a059]/25 shadow-md">
      {/* Top Utility Ribbon */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 border-b border-white/10 text-[11px] text-[#c5c6ce] bg-[#071324]">
        <div className="flex items-center gap-5 font-medium">
          <button
            onClick={() => onNavigate('admissions')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Institutional Portal
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => onNavigate('campus-life')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Students
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => onNavigate('research')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Faculty & Staff
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => onNavigate('campus-life')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Alumni
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => onNavigate('academics')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Library
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={onOpenSearch}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Directory
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAidCalculator}
            className="flex items-center gap-1.5 hover:text-[#fed488] transition-colors cursor-pointer text-[#c5a059]"
          >
            <Heart className="w-3.5 h-3.5 fill-[#c5a059]/30" />
            <span>Give</span>
          </button>
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <Globe className="w-3.5 h-3.5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-transparent text-[11px] font-semibold text-[#c5c6ce] cursor-pointer focus:outline-hidden"
            >
              <option value="EN" className="bg-[#0f2341] text-white">EN</option>
              <option value="LA" className="bg-[#0f2341] text-white">LA</option>
              <option value="FR" className="bg-[#0f2341] text-white">FR</option>
              <option value="DE" className="bg-[#0f2341] text-white">DE</option>
            </select>
          </div>
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 max-w-7xl mx-auto">
        {/* Brand Zone */}
        <div
          onClick={() => onNavigate('admissions')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <AethelgardSeal size={38} variant="gold" className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#fed488] transition-colors leading-none">
              AETHELGARD
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#c5a059] font-semibold mt-1">
              EST. 1888 • CAMBRIDGE & BOSTON
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => onNavigate('admissions')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentView === 'admissions'
                ? 'text-[#fed488] border-b-2 border-[#c5a059] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Admissions & Aid
          </button>
          <button
            onClick={() => onNavigate('academics')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentView === 'academics'
                ? 'text-[#fed488] border-b-2 border-[#c5a059] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Academics
          </button>
          <button
            onClick={() => onNavigate('campus-life')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentView === 'campus-life'
                ? 'text-[#fed488] border-b-2 border-[#c5a059] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Campus Life
          </button>
          <button
            onClick={() => onNavigate('research')}
            className={`whitespace-nowrap transition-colors py-1 ${
              currentView === 'research'
                ? 'text-[#fed488] border-b-2 border-[#c5a059] font-semibold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Research & Innovation
          </button>
          <button
            onClick={onOpenVisit}
            className="text-white/90 hover:text-[#fed488] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Visit Campus
          </button>
        </nav>

        {/* Primary CTA and User Avatar */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="lg:hidden p-2 text-white/80 hover:text-white rounded-xs"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenApply}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0f2341] bg-[#c5a059] hover:bg-[#d8b56f] rounded-xs transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            APPLY NOW
          </button>

          {/* User profile avatar / portrait icon */}
          <div
            onClick={onOpenApply}
            title="Admissions Candidate Portal"
            className="w-8 h-8 rounded-full border border-[#c5a059]/60 bg-[#0f2341] overflow-hidden flex items-center justify-center cursor-pointer hover:border-white transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Candidate Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                // If external fails, show fallback icon
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <User className="w-4 h-4 text-[#c5a059]" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white rounded-xs"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#071324] px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                onNavigate(item.view);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 text-sm font-medium rounded-xs ${
                currentView === item.view
                  ? 'bg-[#0f2341] text-[#fed488] font-bold'
                  : 'text-white/80 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVisit();
            }}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-white/80 hover:bg-white/5 rounded-xs"
          >
            Visit Campus
          </button>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAidCalculator();
              }}
              className="text-xs text-[#c5a059] font-medium"
            >
              Net Price Calculator
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="text-xs text-white/60 font-medium"
            >
              Search Catalog
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
