import React, { useState } from 'react';
import { X, ShieldCheck, DollarSign, Calculator, Check, ArrowRight } from 'lucide-react';

interface NetPriceCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetPriceCalculatorModal: React.FC<NetPriceCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [householdIncome, setHouseholdIncome] = useState<number>(85000);
  const [familyMembers, setFamilyMembers] = useState<number>(4);
  const [siblingsInCollege, setSiblingsInCollege] = useState<number>(1);
  const [assets, setAssets] = useState<number>(35000);

  if (!isOpen) return null;

  // Total gross cost of attendance
  const tuition = 64200;
  const roomAndBoard = 19400;
  const booksAndTech = 2800;
  const incidentals = 2100;
  const grossCost = tuition + roomAndBoard + booksAndTech + incidentals; // $88,500

  // The Aethelgard Promise: Families under $100k pay $0 net tuition, room, & board!
  let estimatedFamilyContribution = 0;
  if (householdIncome <= 100000) {
    estimatedFamilyContribution = 0;
  } else if (householdIncome <= 150000) {
    // Gradual taper from 0% to 10% of gross
    const excess = householdIncome - 100000;
    estimatedFamilyContribution = Math.round(excess * 0.18);
  } else if (householdIncome <= 200000) {
    estimatedFamilyContribution = Math.round(9000 + (householdIncome - 150000) * 0.28);
  } else {
    estimatedFamilyContribution = Math.min(
      grossCost,
      Math.round(23000 + (householdIncome - 200000) * 0.38)
    );
  }

  // Adjust for siblings in college
  if (siblingsInCollege > 1) {
    estimatedFamilyContribution = Math.round(
      estimatedFamilyContribution * (1 / siblingsInCollege * 1.25)
    );
  }

  const estimatedGrant = Math.max(0, grossCost - estimatedFamilyContribution);
  const grantPercentage = Math.round((estimatedGrant / grossCost) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d24]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#ffffff] border border-[#ded9d1] rounded-xs shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f2341] text-white border-b border-[#c5a059]/30">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-[#c5a059]" />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight text-white">
                The Aethelgard Net Price Calculator
              </h3>
              <p className="text-xs text-[#c5c6ce]">
                Official 2025–2026 Need-Based Cost & Endowed Grant Estimator
              </p>
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

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-[#fef9f0]">
          {/* Key Pledge Callout */}
          <div className="p-3.5 bg-[#f8f3ea] border border-[#c5a059]/40 rounded-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div className="text-xs text-[#1d1c16] leading-relaxed">
              <span className="font-bold text-[#0f2341]">The Aethelgard Opportunity Pact:</span>{' '}
              Families earning under <strong className="text-[#0f2341]">$100,000</strong> pay{' '}
              <strong className="text-[#14532d]">$0 / year</strong> for tuition, housing, and dining.
              100% of demonstrated financial need is met with zero loans required.
            </div>
          </div>

          {/* Interactive Sliders & Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-5 rounded-xs border border-[#ded9d1]">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[#1d1c16]">
                  Annual Household Income
                </label>
                <span className="text-sm font-bold font-serif text-[#0f2341]">
                  ${householdIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="250000"
                step="5000"
                value={householdIncome}
                onChange={(e) => setHouseholdIncome(Number(e.target.value))}
                className="w-full accent-[#0f2341] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#75777e] mt-1">
                <span>$30k</span>
                <span className="text-[#c5a059] font-semibold">$100k (Full Zero Cost)</span>
                <span>$250k+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[#1d1c16]">
                  Family Household Size
                </label>
                <span className="text-sm font-bold font-serif text-[#0f2341]">
                  {familyMembers} People
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="1"
                value={familyMembers}
                onChange={(e) => setFamilyMembers(Number(e.target.value))}
                className="w-full accent-[#0f2341] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#75777e] mt-1">
                <span>2 persons</span>
                <span>8+ persons</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[#1d1c16]">
                  Siblings Concurrently in College
                </label>
                <span className="text-sm font-bold font-serif text-[#0f2341]">
                  {siblingsInCollege}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={siblingsInCollege}
                onChange={(e) => setSiblingsInCollege(Number(e.target.value))}
                className="w-full accent-[#0f2341] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[#1d1c16]">
                  Household Non-Retirement Assets
                </label>
                <span className="text-sm font-bold font-serif text-[#0f2341]">
                  ${assets.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={assets}
                onChange={(e) => setAssets(Number(e.target.value))}
                className="w-full accent-[#0f2341] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="bg-[#0f2341] text-white p-5 rounded-xs border border-[#c5a059]/40 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold">
                  ESTIMATED SCHOLARSHIP ALLOCATION
                </span>
                <h4 className="text-xl font-serif font-bold text-white mt-0.5">
                  Your Personalized Aid Estimate
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-white/70 block">Grant Coverage</span>
                <span className="text-lg font-bold text-[#c5a059]">{grantPercentage}% Met</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white/5 rounded-xs border border-white/10">
                <span className="text-[10px] uppercase text-white/60 block">Total Gross Cost</span>
                <span className="text-lg font-serif font-bold text-white">
                  ${grossCost.toLocaleString()}
                </span>
                <span className="text-[10px] text-white/50 block mt-0.5">Direct & Indirect</span>
              </div>

              <div className="p-3 bg-[#c5a059]/15 rounded-xs border border-[#c5a059]/40">
                <span className="text-[10px] uppercase text-[#fed488] block font-semibold">
                  Aethelgard Endowed Grant
                </span>
                <span className="text-lg font-serif font-bold text-[#fed488]">
                  -${estimatedGrant.toLocaleString()}
                </span>
                <span className="text-[10px] text-white/70 block mt-0.5">100% Gift Aid • No Loans</span>
              </div>

              <div className="p-3 bg-white/10 rounded-xs border border-white/20">
                <span className="text-[10px] uppercase text-white/60 block font-semibold">
                  Net Family Contribution
                </span>
                <span className="text-xl font-serif font-bold text-white">
                  ${estimatedFamilyContribution.toLocaleString()}{' '}
                  <span className="text-xs font-normal text-white/70">/ year</span>
                </span>
                <span className="text-[10px] text-white/60 block mt-0.5">
                  {estimatedFamilyContribution === 0
                    ? '100% Free Tuition, Room & Board'
                    : 'Flexible 10-Month Payment Plan'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-white/80">
              <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>
                Zero student loans required or packaged. All grants are non-repayable institutional endowments.
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#f2ede4] border-t border-[#ded9d1]">
          <span className="text-xs text-[#75777e]">
            Official FAFSA Code: <strong>002144</strong> · CSS Profile Code: <strong>3012</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0f2341] rounded-xs hover:bg-[#1a3863] transition-colors"
          >
            Apply With This Estimate
          </button>
        </div>
      </div>
    </div>
  );
};
