/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, DegreeProgram, ResearchPublication } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { AdmissionsView } from './components/AdmissionsView.tsx';
import { CampusLifeView } from './components/CampusLifeView.tsx';
import { AcademicsView } from './components/AcademicsView.tsx';
import { ResearchView } from './components/ResearchView.tsx';
import { NetPriceCalculatorModal } from './components/NetPriceCalculatorModal.tsx';
import { ApplicationModal } from './components/ApplicationModal.tsx';
import { VisitModal } from './components/VisitModal.tsx';
import { CurriculumModal } from './components/CurriculumModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { HouseAllocationModal } from './components/HouseAllocationModal.tsx';
import { BibtexModal } from './components/BibtexModal.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('admissions');

  // Modal States
  const [isNetPriceModalOpen, setIsNetPriceModalOpen] = useState<boolean>(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState<boolean>(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState<boolean>(false);
  const [selectedCurriculumProgram, setSelectedCurriculumProgram] = useState<DegreeProgram | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isHouseAllocationModalOpen, setIsHouseAllocationModalOpen] = useState<boolean>(false);
  const [selectedBibtexPub, setSelectedBibtexPub] = useState<ResearchPublication | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#1c1917] font-sans antialiased">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenApply={() => setIsApplicationModalOpen(true)}
        onOpenVisit={() => setIsVisitModalOpen(true)}
        onOpenAidCalculator={() => setIsNetPriceModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'admissions' && (
          <AdmissionsView
            onOpenApply={() => setIsApplicationModalOpen(true)}
            onOpenAidCalculator={() => setIsNetPriceModalOpen(true)}
            onOpenVisit={() => setIsVisitModalOpen(true)}
          />
        )}

        {currentView === 'campus-life' && (
          <CampusLifeView
            onOpenHouseAllocation={() => setIsHouseAllocationModalOpen(true)}
            onOpenVisitModal={() => setIsVisitModalOpen(true)}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
          />
        )}

        {currentView === 'academics' && (
          <AcademicsView
            onSelectProgram={(program) => setSelectedCurriculumProgram(program)}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
            onOpenVisitModal={() => setIsVisitModalOpen(true)}
          />
        )}

        {currentView === 'research' && (
          <ResearchView
            onOpenBibtex={(pub) => setSelectedBibtexPub(pub)}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApply={() => setIsApplicationModalOpen(true)}
        onOpenVisit={() => setIsVisitModalOpen(true)}
        onOpenAidCalculator={() => setIsNetPriceModalOpen(true)}
      />

      {/* Interactive Modals */}
      <NetPriceCalculatorModal
        isOpen={isNetPriceModalOpen}
        onClose={() => setIsNetPriceModalOpen(false)}
      />

      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />

      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <CurriculumModal
        program={selectedCurriculumProgram}
        onClose={() => setSelectedCurriculumProgram(null)}
        onApply={() => {
          setSelectedCurriculumProgram(null);
          setIsApplicationModalOpen(true);
        }}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      <HouseAllocationModal
        isOpen={isHouseAllocationModalOpen}
        onClose={() => setIsHouseAllocationModalOpen(false)}
      />

      <BibtexModal
        publication={selectedBibtexPub}
        onClose={() => setSelectedBibtexPub(null)}
      />
    </div>
  );
}
