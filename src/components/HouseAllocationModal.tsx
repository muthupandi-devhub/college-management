import React, { useState } from 'react';
import { X, Dna, Sparkles, Building, Landmark, Compass, Award } from 'lucide-react';
import { RESIDENTIAL_HOUSES } from '../data/mockData.ts';
import { ResidentialHouse } from '../types.ts';
import { AethelgardSeal } from './AethelgardSeal.tsx';

interface HouseAllocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HouseAllocationModal: React.FC<HouseAllocationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAllocating, setIsAllocating] = useState(false);
  const [allocatedHouse, setAllocatedHouse] = useState<ResidentialHouse | null>(null);

  if (!isOpen) return null;

  const handleStartAllocation = () => {
    setIsAllocating(true);
    setAllocatedHouse(null);

    // Simulated sorting ceremony cadence
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * RESIDENTIAL_HOUSES.length);
      setAllocatedHouse(RESIDENTIAL_HOUSES[randomIndex]);
      setIsAllocating(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d24]/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f2341] text-white border-b border-[#c5a059]/30">
          <div className="flex items-center gap-2.5">
            <AethelgardSeal size={32} variant="gold" />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block">
                Collegiate Matriculation Rite
              </span>
              <h3 className="font-serif text-lg font-semibold tracking-tight text-white">
                Residential House Allocation
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
        <div className="p-6 overflow-y-auto bg-[#fef9f0] flex-1 text-center space-y-5">
          {!allocatedHouse && !isAllocating && (
            <div className="space-y-4 py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#f2ede4] border border-[#c5a059] flex items-center justify-center text-[#775a19]">
                <Landmark className="w-8 h-8 text-[#0f2341]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0f2341]">
                The Matriculation Assignment
              </h4>
              <p className="text-xs text-[#44474e] leading-relaxed max-w-sm mx-auto">
                Every undergraduate scholar at Aethelgard is randomly allocated into one of our six
                self-governing collegiate houses for all four years. Each house features dedicated
                faculty masters, private dining commons, historic libraries, and fierce house spirit.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleStartAllocation}
                  className="px-6 py-2.5 bg-[#0f2341] text-white text-xs font-semibold rounded-xs hover:bg-[#1a3863] transition-colors shadow-xs"
                >
                  Spin the Matriculation Dial
                </button>
              </div>
            </div>
          )}

          {isAllocating && (
            <div className="py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#c5a059] border-t-transparent animate-spin"></div>
              <h4 className="font-serif text-lg font-bold text-[#0f2341]">
                Consulting the Great Ledger of 1888...
              </h4>
              <p className="text-xs text-[#75777e]">Balancing cohort disciplines and quad capacities</p>
            </div>
          )}

          {allocatedHouse && !isAllocating && (
            <div className="py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="inline-flex p-3 bg-[#f8f3ea] border-2 border-[#c5a059] rounded-full text-[#0f2341]">
                <Sparkles className="w-8 h-8 text-[#c5a059]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#775a19] font-bold block">
                  Matriculating Scholar Assigned To
                </span>
                <h4 className="font-serif text-3xl font-bold text-[#0f2341] mt-1">
                  {allocatedHouse.name}
                </h4>
                <div className="text-xs italic text-[#775a19] mt-0.5 font-serif">
                  "{allocatedHouse.motto}"
                </div>
              </div>

              {/* House card specs */}
              <div className="p-4 bg-white border border-[#ded9d1] rounded-xs text-left space-y-2.5 text-xs text-[#1d1c16] max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#f2ede4] pb-1.5">
                  <span className="text-[#75777e]">Foundation:</span>
                  <span className="font-bold text-[#0f2341]">Chartered {allocatedHouse.charteredYear}</span>
                </div>
                <div className="flex justify-between border-b border-[#f2ede4] pb-1.5">
                  <span className="text-[#75777e]">Scholar Capacity:</span>
                  <span className="font-bold text-[#0f2341]">{allocatedHouse.capacity} Scholars</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#75777e] uppercase block font-semibold mb-0.5">
                    Architectural Setting:
                  </span>
                  <p className="text-[#44474e] leading-relaxed">{allocatedHouse.architectureNote}</p>
                </div>
                <div className="pt-1.5 border-t border-[#f2ede4]">
                  <span className="text-[10px] text-[#775a19] uppercase block font-semibold mb-0.5">
                    Distinguishing Tradition:
                  </span>
                  <p className="text-[#0f2341] font-medium leading-relaxed">
                    {allocatedHouse.distinguishingTradition}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleStartAllocation}
                  className="px-4 py-2 border border-[#ded9d1] text-xs font-medium text-[#44474e] hover:bg-white rounded-xs"
                >
                  Spin Again
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#0f2341] text-white text-xs font-semibold rounded-xs hover:bg-[#1a3863]"
                >
                  Accept Assignment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
