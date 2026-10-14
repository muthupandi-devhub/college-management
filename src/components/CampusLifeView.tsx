import React, { useState } from 'react';
import {
  Compass,
  Building,
  UtensilsCrossed,
  Sparkles,
  Trophy,
  Palette,
  Users,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  HeartHandshake,
  Dna,
  Coffee,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { RESIDENTIAL_HOUSES, STUDENT_SOCIETIES } from '../data/mockData.ts';
import { ResidentialHouse } from '../types.ts';
import { CollegiateCourtyard, CollegiateDiningHall } from './VisualFallback.tsx';

interface CampusLifeViewProps {
  onOpenHouseAllocation: () => void;
  onOpenVisitModal: () => void;
  onOpenSearchModal: () => void;
}

export const CampusLifeView: React.FC<CampusLifeViewProps> = ({
  onOpenHouseAllocation,
  onOpenVisitModal,
  onOpenSearchModal: _onOpenSearchModal,
}) => {
  const [selectedHouse, setSelectedHouse] = useState<ResidentialHouse>(RESIDENTIAL_HOUSES[0]);
  const [selectedDiningDay, setSelectedDiningDay] = useState<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'>('monday');
  const [activeSocietyCategory, setActiveSocietyCategory] = useState<string>('all');

  const filteredSocieties = activeSocietyCategory === 'all'
    ? STUDENT_SOCIETIES
    : STUDENT_SOCIETIES.filter((s) => s.category.toLowerCase() === activeSocietyCategory.toLowerCase());

  const diningMenus = {
    monday: {
      dinner: 'Herb-Roasted Prime Rib or Pan-Seared King Oyster Mushrooms with Truffle Polenta, Charred Asparagus, and Red Wine Reduction',
      soup: 'New England Wild Mushroom & Thyme Bisque',
      dessert: 'Classic Spiced Brioche Bread Pudding with Vanilla Bean Creme Anglaise',
    },
    tuesday: {
      dinner: 'Atlantic Blackened Halibut or Cauliflower Steak with Saffron Couscous, Citrus Fennel Slaw, and Charred Lemon Butter',
      soup: 'Velvety Sweet Corn & Lemongrass Veloute',
      dessert: 'Dark Chocolate Torte with Sea Salt Ganache & Raspberries',
    },
    wednesday: {
      dinner: 'Braised Heritage Pork Belly or Roasted Acorn Squash Stuffed with Wild Rice, Cranberries, Pecans, and Spiced Cider Glaze',
      soup: 'Caramelized French Onion with Gruyere Croute',
      dessert: 'Meyer Lemon Meringue Tartlet with Blackberry Coulis',
    },
    thursday: {
      dinner: 'Formal Hall Feast: Dry-Aged Roast Striploin, Duck Fat Hasselback Potatoes, Glazed Baby Carrots, and Truffled Yorkshires',
      soup: 'Chestnut & Roasted Parsnip Soup with Sage Oil',
      dessert: 'Sticky Toffee Pudding with Clotted Cream & Whiskey Caramel',
    },
    friday: {
      dinner: 'Handmade Butternut Squash Agnolotti with Brown Butter Crispy Sage, Amaretti Crumb, and Shaved 24-Month Reggiano',
      soup: 'Smoked Tomato & Fennel Bisque',
      dessert: 'House-Churned Pistachio Gelato with Warm Florentine Crisp',
    },
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#1c1917] selection:bg-[#7d1d28]/20 selection:text-[#7d1d28]">
      {/* Hero Section */}
      <section className="relative border-b border-[#e7e3db] bg-gradient-to-b from-[#f8f5ee] to-[#fcfbf9] pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7d1d28]/10 text-[#7d1d28] border border-[#7d1d28]/20 text-xs font-serif uppercase tracking-widest mb-6">
                <Compass className="w-3.5 h-3.5" />
                Collegiate Community & Traditions
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1c1917] leading-[1.12] tracking-tight mb-6">
                A Residential Fellowship of Scholars, Thinkers, & Leaders.
              </h1>
              <p className="text-lg text-[#57534e] font-serif leading-relaxed mb-8 max-w-2xl">
                For over a century, undergraduate life at Aethelgard has centered on twelve residential houses—micro-communities where Nobel laureates, freshman poets, varsity rowers, and quantum researchers break bread together every evening.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenHouseAllocation}
                  className="inline-flex items-center gap-2 bg-[#7d1d28] hover:bg-[#63141f] text-white px-6 py-3.5 text-xs font-serif uppercase tracking-widest font-medium transition-colors shadow-sm"
                >
                  <Dna className="w-4 h-4 text-[#e0a96d]" />
                  Simulate House Allocation
                </button>
                <button
                  onClick={onOpenVisitModal}
                  className="inline-flex items-center gap-2 border border-[#a8a29e] hover:border-[#1c1917] text-[#1c1917] bg-white px-6 py-3.5 text-xs font-serif uppercase tracking-widest font-medium transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#7d1d28]" />
                  Schedule Campus Experience
                </button>
              </div>

              {/* Quick Stat Pillows */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#e7e3db]">
                <div>
                  <div className="font-serif text-3xl font-bold text-[#1c1917]">100%</div>
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans mt-1">4-Year Housing Guarantee</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-[#7d1d28]">12</div>
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans mt-1">Historic Houses</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-[#1c1917]">350+</div>
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans mt-1">Student Guilds & Teams</div>
                </div>
              </div>
            </div>

            {/* Right Visual Courtyard Card */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#d6d0c4] bg-white p-3 shadow-xl">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden border border-[#e7e3db]">
                  <CollegiateCourtyard className="w-full h-full" />
                  <div className="absolute top-3 left-3 bg-[#1c1917]/85 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-serif uppercase tracking-widest border border-white/20">
                    Eldridge Quadrangle &bull; Cambridge
                  </div>
                </div>
                <div className="p-4 bg-[#fcfbf9] border-t border-[#e7e3db]">
                  <div className="flex items-center justify-between text-xs text-[#78716c] font-serif mb-1">
                    <span className="text-[#7d1d28] font-bold">ESTABLISHED 1894</span>
                    <span>Cambridge Yard Common</span>
                  </div>
                  <p className="text-xs text-[#57534e] italic">
                    &quot;Education at Aethelgard is not merely the transmission of syllabi, but a continuous conversation across dining tables, debate chambers, and cloistered archways.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential College System Section */}
      <section className="py-20 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">The Residential College System</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">Twelve Houses. One Enduring Kinship.</h2>
            <p className="text-sm text-[#57534e] font-serif mt-3 leading-relaxed">
              Every first-year student is sorted at the annual matriculation banquet into one of twelve residential houses. Each house is governed by a distinguished Senior Fellow and Master, with its own dining hall, library, squash courts, junior common room, and unique heraldry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* House Selector Tabs */}
            <div className="lg:col-span-4 border border-[#e7e3db] divide-y divide-[#e7e3db] bg-[#fcfbf9]">
              <div className="p-4 bg-[#f4efe6] border-b border-[#e7e3db]">
                <div className="text-xs font-serif uppercase tracking-widest font-bold text-[#1c1917]">The Twelve Houses</div>
                <div className="text-[11px] text-[#78716c] mt-0.5">Select a house to inspect charter and amenities</div>
              </div>
              <div className="max-h-[500px] overflow-y-auto divide-y divide-[#e7e3db]">
                {RESIDENTIAL_HOUSES.map((house) => {
                  const isSelected = selectedHouse.id === house.id;
                  return (
                    <button
                      key={house.id}
                      onClick={() => setSelectedHouse(house)}
                      className={`w-full text-left p-4 transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-l-4 border-l-[#7d1d28] shadow-sm'
                          : 'hover:bg-[#f6f2ea] text-[#57534e]'
                      }`}
                    >
                      <div>
                        <div className={`font-serif text-base ${isSelected ? 'text-[#7d1d28] font-bold' : 'text-[#1c1917]'}`}>
                          {house.name}
                        </div>
                        <div className="text-[11px] text-[#78716c] font-sans mt-0.5">
                          Est. {house.charteredYear || house.foundedYear || 1891} &bull; {house.motto}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#7d1d28] translate-x-1' : 'text-[#a8a29e]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected House Deep Dive Card */}
            <div className="lg:col-span-8 border border-[#d6d0c4] bg-[#fcfbf9] p-6 lg:p-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e7e3db]">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-1">
                    <Shield className="w-4 h-4" />
                    Residential Charter
                  </div>
                  <h3 className="font-serif text-3xl text-[#1c1917]">{selectedHouse.name}</h3>
                  <div className="text-xs text-[#78716c] font-serif italic mt-1">
                    &quot;{selectedHouse.motto}&quot; &bull; Chartered {selectedHouse.charteredYear || selectedHouse.foundedYear || 1891}
                  </div>
                </div>
                <div className="flex flex-col sm:items-end">
                  <div className="text-xs uppercase tracking-wider text-[#78716c] font-sans">Resident Capacity</div>
                  <div className="font-serif text-2xl font-bold text-[#1c1917]">{selectedHouse.capacity} Scholars</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="text-xs font-serif uppercase tracking-wider text-[#1c1917] font-bold mb-2">History & Traditions</h4>
                  <p className="text-sm text-[#57534e] leading-relaxed font-serif">
                    {selectedHouse.architectureNote || selectedHouse.tradition}
                  </p>
                  <div className="mt-4 p-3 bg-white border border-[#e7e3db] text-xs font-serif">
                    <div className="font-bold text-[#7d1d28] uppercase tracking-wider text-[11px] mb-1">House Signature Tradition</div>
                    <p className="text-[#44403c]">{selectedHouse.distinguishingTradition || selectedHouse.tradition}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-serif uppercase tracking-wider text-[#1c1917] font-bold mb-2">House Leadership & Faculty</h4>
                  <div className="bg-white border border-[#e7e3db] p-4 text-xs space-y-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Faculty Dean & Master</div>
                      <div className="font-serif text-sm font-bold text-[#1c1917]">{selectedHouse.dean || 'Prof. Harrison Thorne, Senior Fellow & Master'}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#78716c]">Notable Alumni Residents</div>
                      <div className="text-[#57534e] mt-1 font-serif">
                        {(selectedHouse.notableAlumni || ['U.S. Supreme Court Justices', 'Pulitzer Laureates', 'Rhodes Scholars']).join(', ')}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xs font-serif uppercase tracking-wider text-[#1c1917] font-bold mt-4 mb-2">Exclusive Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedHouse.amenities || ['Private Dining Hall', 'Squash Courts', 'Junior Common Room', '24/7 Library Vault']).map((item: string, idx: number) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#e7e3db] text-xs text-[#44403c]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7d1d28]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#e7e3db] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#78716c]">
                  Official House Crest Color: <strong className="text-[#1c1917] font-serif">{selectedHouse.color || 'Crimson & Gold'}</strong>
                </span>
                <button
                  onClick={onOpenHouseAllocation}
                  className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#7d1d28] hover:text-[#63141f] font-semibold"
                >
                  Spin House Sorting Wheel
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collegiate Dining & Formal Hall */}
      <section className="py-20 border-b border-[#e7e3db] bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="border border-[#d6d0c4] bg-white p-3 shadow-lg">
                <div className="relative h-72 w-full overflow-hidden border border-[#e7e3db]">
                  <CollegiateDiningHall className="w-full h-full" />
                  <div className="absolute bottom-3 left-3 bg-[#1c1917]/90 text-white px-3 py-1 text-[11px] font-serif uppercase tracking-widest">
                    The Great Hall &bull; Daily Candlelit Dinner
                  </div>
                </div>
                <div className="p-3 bg-[#fcfbf9] text-xs text-[#78716c] flex items-center justify-between border-t border-[#e7e3db]">
                  <span>Seating Capacity: 450</span>
                  <span className="font-serif italic text-[#7d1d28]">Black Tie Formal Hall Thursdays</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/70 text-amber-900 border border-amber-300 text-xs font-serif uppercase tracking-widest mb-4">
                <UtensilsCrossed className="w-3.5 h-3.5 text-amber-700" />
                Gastronomy & Communal Dining
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] mb-4">
                Culinary Excellence Grounded in Local New England Farms.
              </h2>
              <p className="text-sm text-[#57534e] font-serif leading-relaxed mb-6">
                All undergraduates participate in the university dining covenant. With certified executive chefs in each of the 12 houses, menus feature 84% regionally sourced organic ingredients from Vermont, Massachusetts, and Maine dairy collectives.
              </p>

              {/* Day Selector */}
              <div className="flex flex-wrap gap-1 mb-4 border-b border-[#e7e3db] pb-2">
                {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const).map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDiningDay(day)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors ${
                      selectedDiningDay === day
                        ? 'bg-[#7d1d28] text-white font-serif'
                        : 'bg-white text-[#57534e] hover:bg-[#e7e3db]'
                    }`}
                  >
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </button>
                ))}
              </div>

              {/* Interactive Day Menu Display */}
              <div className="bg-white border border-[#e7e3db] p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#e7e3db] text-xs">
                  <span className="font-serif font-bold text-[#1c1917] uppercase tracking-wider">
                    {selectedDiningDay.toUpperCase()} EVENING REPAST
                  </span>
                  <span className="text-[#78716c]">Serving 5:30 PM &ndash; 8:30 PM</span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#7d1d28]">Chef&apos;s Principal Entr&eacute;e</div>
                    <div className="font-serif text-sm text-[#1c1917] mt-0.5">
                      {diningMenus[selectedDiningDay].dinner}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#78716c]">Kettle & Pottage</div>
                    <div className="text-[#44403c]">
                      {diningMenus[selectedDiningDay].soup}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#78716c]">Pastry & Confectionery</div>
                    <div className="text-[#44403c]">
                      {diningMenus[selectedDiningDay].dessert}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 text-xs text-[#57534e]">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#7d1d28]" />
                  <span>Fair-Trade Espresso bars open until 2:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#7d1d28]" />
                  <span>Halal, Kosher, and allergen-pure kitchens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Guilds & Societies */}
      <section className="py-20 border-b border-[#e7e3db] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-serif uppercase tracking-widest text-[#7d1d28] mb-2">Student Organizations</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">Over 350 Guilds, Unions, & Circles</h2>
              <p className="text-sm text-[#57534e] font-serif mt-2 max-w-2xl">
                From the 134-year-old Debating Union that has hosted world prime ministers to quantum computing hacking collectives and competitive collegiate sailing on the Charles River.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Organizations' },
                { id: 'academic & debate', label: 'Debate & Academic' },
                { id: 'journalism & literature', label: 'Journalism' },
                { id: 'technology & engineering', label: 'Engineering' },
                { id: 'arts & performance', label: 'Arts & Music' },
                { id: 'athletics & outdoors', label: 'Athletics' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSocietyCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs tracking-wider transition-colors border ${
                    activeSocietyCategory === cat.id
                      ? 'bg-[#1c1917] text-white border-[#1c1917]'
                      : 'bg-[#fcfbf9] text-[#57534e] border-[#e7e3db] hover:border-[#1c1917]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSocieties.map((soc) => (
              <div
                key={soc.id}
                className="border border-[#e7e3db] bg-[#fcfbf9] p-6 hover:border-[#7d1d28] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#78716c] font-sans mb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#7d1d28]">{soc.category}</span>
                    <span>Est. {soc.founded || soc.foundedYear || 1892}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1c1917] group-hover:text-[#7d1d28] transition-colors mb-2">
                    {soc.name}
                  </h3>
                  <p className="text-xs text-[#57534e] font-serif leading-relaxed mb-4">
                    {soc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e7e3db] flex items-center justify-between text-xs text-[#78716c]">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {soc.membersCount || 85} Active Members
                  </span>
                  <span className="font-serif italic text-[#1c1917]">President: {soc.president || 'Student Guild'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletics, Arts & Tradition Calendar */}
      <section className="py-20 bg-[#f8f5ee] border-b border-[#e7e3db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Athletics Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7d1d28]/10 text-[#7d1d28] border border-[#7d1d28]/20 text-xs font-serif uppercase tracking-widest mb-4">
                <Trophy className="w-3.5 h-3.5" />
                NCAA Division I & Intramural House Cups
              </div>
              <h2 className="font-serif text-3xl text-[#1c1917] mb-4">
                The Fierce Spirit of the Aethelgard Griffins.
              </h2>
              <p className="text-sm text-[#57534e] font-serif leading-relaxed mb-6">
                With 34 varsity NCAA Division I programs and the storied Strafford Cup intramural house tournament, athletic excellence and sportsmanship have defined university camaraderie since 1888.
              </p>

              <div className="bg-white border border-[#e7e3db] p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7e3db] pb-3 text-xs">
                  <span className="font-serif font-bold text-[#1c1917]">VARSITY REGATTA ON THE CHARLES</span>
                  <span className="text-[#7d1d28] font-bold">OCTOBER 24</span>
                </div>
                <p className="text-xs text-[#57534e] font-serif">
                  Aethelgard Heavyweight Men&apos;s & Women&apos;s 8+ crew takes on Oxford, Cambridge, and Harvard at the historic Weld Boathouse bend.
                </p>

                <div className="flex items-center justify-between border-b border-[#e7e3db] pb-3 pt-2 text-xs">
                  <span className="font-serif font-bold text-[#1c1917]">THE CENTURY RIVALRY ICE HOCKEY MATCH</span>
                  <span className="text-[#7d1d28] font-bold">DECEMBER 12</span>
                </div>
                <p className="text-xs text-[#57534e] font-serif">
                  Aethelgard vs. Yale at the historic Bright-Landry Arena. 128th continuous annual matchup.
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#78716c]">Intramural Leaderboard Leader:</span>
                  <strong className="text-[#7d1d28] font-serif">Pembroke Hall (1,480 pts)</strong>
                </div>
              </div>
            </div>

            {/* Arts & Musical Performances */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-serif uppercase tracking-widest mb-4">
                <Palette className="w-3.5 h-3.5 text-indigo-700" />
                The Fine Arts & Dramatic Guilds
              </div>
              <h2 className="font-serif text-3xl text-[#1c1917] mb-4">
                Symphonies, Shakespearian Drama, & Gallery Salons.
              </h2>
              <p className="text-sm text-[#57534e] font-serif leading-relaxed mb-6">
                The university hosts three complete symphony orchestras, the Aethelgard Baroque Ensemble, seven a cappella collectives, and two student-run art galleries featuring contemporary international installations.
              </p>

              <div className="bg-white border border-[#e7e3db] p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7e3db] pb-3 text-xs">
                  <span className="font-serif font-bold text-[#1c1917]">MAHLER SYMPHONY NO. 2 (RESURRECTION)</span>
                  <span className="text-indigo-800 font-bold">NOVEMBER 06</span>
                </div>
                <p className="text-xs text-[#57534e] font-serif">
                  Performed by the Aethelgard University Symphony Orchestra & University Chorus at Symphony Hall, Boston.
                </p>

                <div className="flex items-center justify-between border-b border-[#e7e3db] pb-3 pt-2 text-xs">
                  <span className="font-serif font-bold text-[#1c1917]">BLACKFRIARS GUILD: THE TEMPEST</span>
                  <span className="text-indigo-800 font-bold">NOVEMBER 18&ndash;22</span>
                </div>
                <p className="text-xs text-[#57534e] font-serif">
                  Open-air dramatic performance staged by torchlight within the gothic cloisters of St. Anselm Court.
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#78716c]">Museum of Fine Arts Student Reciprocal Pass:</span>
                  <strong className="text-indigo-900 font-serif">Complimentary Admission with UID</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-14 bg-[#1c1917] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            Experience Collegiate Life Firsthand
          </h2>
          <p className="text-sm text-[#d6d0c4] font-serif max-w-xl mx-auto mb-6">
            Join an undergraduate host for an afternoon lecture, dine in an authentic residential house hall, and walk the historic quadrangle cloisters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenVisitModal}
              className="bg-[#7d1d28] hover:bg-[#63141f] text-white px-6 py-3 text-xs font-serif uppercase tracking-widest font-medium transition-colors"
            >
              Book Campus Tour & Dining Pass
            </button>
            <button
              onClick={onOpenHouseAllocation}
              className="border border-[#78716c] hover:border-white text-white px-6 py-3 text-xs font-serif uppercase tracking-widest font-medium transition-colors"
            >
              Discover Your Residential House Match
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
