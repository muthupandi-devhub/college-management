import React, { useState } from 'react';
import { MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

interface CampusMapProps {
  interactive?: boolean;
  activeBuildingId?: string;
  onSelectBuilding?: (id: string) => void;
  className?: string;
}

export const CampusMap: React.FC<CampusMapProps> = ({
  interactive = true,
  activeBuildingId: controlledActiveId,
  onSelectBuilding,
  className = '',
}) => {
  const [internalActiveId, setInternalActiveId] = useState<string>('cathedral');
  const activeId = controlledActiveId || internalActiveId;

  const handleSelect = (id: string) => {
    setInternalActiveId(id);
    if (onSelectBuilding) {
      onSelectBuilding(id);
    }
  };

  const landmarks = [
    {
      id: 'cathedral',
      name: 'Cathedral Hall & Library',
      desc: 'Oldest campus landmark, EST. 1888. Houses 450,000 archival volumes.',
      x: 320,
      y: 190,
      type: 'Academic & Archives',
    },
    {
      id: 'radcliffe',
      name: 'Radcliffe Observatory & Houses',
      desc: 'Scenic hilltop vistas, Beatrice Webb Debating Parlor & astronomy dome.',
      x: 210,
      y: 130,
      type: 'Residential College',
    },
    {
      id: 'weldon',
      name: 'Weldon Athletics Pavilion',
      desc: 'Olympic 50m aquatic center, 12 squash courts & indoor bouldering.',
      x: 440,
      y: 260,
      type: 'Athletics & Recreation',
    },
    {
      id: 'boathouse',
      name: 'Charles River Boathouse',
      desc: 'Championship rowing fleet site along historic Charles River basin.',
      x: 290,
      y: 340,
      type: 'Watersports & Regattas',
    },
    {
      id: 'metro',
      name: 'Harvard Sq Metro (Red Line)',
      desc: 'Direct rapid transit connection to downtown Boston & Logan Airport.',
      x: 140,
      y: 220,
      type: 'Transit Hub',
    },
  ];

  const activeLandmark = landmarks.find((l) => l.id === activeId) || landmarks[0];

  return (
    <div className={`relative w-full rounded-sm overflow-hidden border border-[#ded9d1] bg-[#eef3f1] ${className}`}>
      {/* Map Header pill */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-[#ded9d1] rounded-full text-xs font-semibold text-[#0f2341] shadow-xs">
        <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
        <span>CAMPUS QUADRANGLE MAP</span>
      </div>

      <div className="relative aspect-[16/10] w-full">
        <svg
          viewBox="0 0 600 380"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base cartographic terrain & river styling */}
          <rect width="600" height="380" fill="#e9eee8" />

          {/* Urban Road Grid */}
          <g stroke="#ffffff" strokeWidth="6" opacity="0.9">
            <line x1="0" y1="110" x2="600" y2="110" />
            <line x1="0" y1="210" x2="600" y2="250" />
            <line x1="120" y1="0" x2="160" y2="380" />
            <line x1="280" y1="0" x2="310" y2="380" />
            <line x1="450" y1="0" x2="430" y2="380" />
            <path d="M0 80 Q250 150 600 120" fill="none" strokeWidth="4" />
          </g>

          {/* Secondary streets */}
          <g stroke="#ffffff" strokeWidth="2.5" opacity="0.7">
            <line x1="30" y1="160" x2="570" y2="160" />
            <line x1="20" y1="300" x2="580" y2="310" />
            <line x1="210" y1="20" x2="230" y2="360" />
            <line x1="370" y1="20" x2="380" y2="360" />
            <line x1="520" y1="20" x2="510" y2="360" />
          </g>

          {/* Charles River winding through campus */}
          <path
            d="M0 320 C100 310, 180 345, 270 340 C360 335, 450 370, 600 350 L600 380 L0 380 Z"
            fill="#bad7e9"
          />
          <path
            d="M0 320 C100 310, 180 345, 270 340 C360 335, 450 370, 600 350"
            stroke="#92b8d0"
            strokeWidth="3"
            fill="none"
          />

          {/* Parkland Quads (Harvard & Aethelgard Yard lawns) */}
          <rect x="250" y="140" width="140" height="90" rx="4" fill="#cbe2cb" stroke="#b2d4b2" strokeWidth="1" />
          <text x="320" y="185" fill="#2d5236" fontSize="10" fontWeight="600" textAnchor="middle" letterSpacing="0.08em">
            THE GREAT LAWN
          </text>

          <rect x="170" y="80" width="85" height="65" rx="3" fill="#d8ead8" />
          <rect x="400" y="220" width="100" height="65" rx="3" fill="#d8ead8" />

          {/* Subway / Metro Red Line path */}
          <path
            d="M50 380 L140 220 L230 110 L350 40 L600 0"
            stroke="#dc2626"
            strokeWidth="3.5"
            strokeDasharray="6 3"
            fill="none"
          />

          {/* Landmarks pins */}
          {landmarks.map((landmark) => {
            const isSelected = landmark.id === activeId;
            return (
              <g
                key={landmark.id}
                transform={`translate(${landmark.x}, ${landmark.y})`}
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={() => handleSelect(landmark.id)}
              >
                {isSelected && (
                  <circle cx="0" cy="0" r="16" fill="#c5a059" opacity="0.3" className="animate-ping" />
                )}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? "11" : "8"}
                  fill={isSelected ? "#0f2341" : landmark.id === 'metro' ? '#dc2626' : '#c5a059'}
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  className="shadow-md"
                />
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
                
                {/* Micro Label */}
                <text
                  x="0"
                  y={isSelected ? "-16" : "-12"}
                  fill="#0f2341"
                  fontSize={isSelected ? "10" : "8.5"}
                  fontWeight={isSelected ? "700" : "600"}
                  textAnchor="middle"
                  className="select-none pointer-events-none drop-shadow-sm"
                  style={{
                    paintOrder: 'stroke',
                    stroke: '#ffffff',
                    strokeWidth: '2.5px',
                    strokeLinejoin: 'round',
                  }}
                >
                  {landmark.name.split('&')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Selected Building Details Callout Box (bottom center/right overlay) */}
        {interactive && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-[#0f2341]/95 text-white p-3 rounded-xs border border-[#c5a059]/40 shadow-lg backdrop-blur-xs">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5 mb-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-semibold">
                {activeLandmark.type}
              </span>
              <span className="text-[10px] text-white/60">Aethelgard Campus</span>
            </div>
            <h4 className="text-xs font-serif font-bold text-white mb-0.5">{activeLandmark.name}</h4>
            <p className="text-[11px] text-white/80 leading-relaxed">{activeLandmark.desc}</p>
          </div>
        )}
      </div>

      {/* Transit Footer Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-3.5 py-2.5 bg-[#f8f3ea] border-t border-[#ded9d1] text-xs text-[#44474e]">
        <div className="flex items-center gap-2">
          <Navigation className="w-3.5 h-3.5 text-[#0f2341]" />
          <span className="font-medium text-[#1d1c16]">Cambridge & Boston Transit Accessible</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#c5a059]">
          <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
          <span className="text-[#1d1c16]">HARVARD SQ METRO (RED LINE)</span>
        </div>
      </div>
    </div>
  );
};
