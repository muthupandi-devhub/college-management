import React from 'react';

export const TwilightGothicQuad: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0a1122] select-none ${className}`}>
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#080e1e" />
            <stop offset="45%" stopColor="#122543" />
            <stop offset="75%" stopColor="#303b57" />
            <stop offset="100%" stopColor="#4e3c39" />
          </linearGradient>
          <radialGradient id="clockGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffebad" stopOpacity="1" />
            <stop offset="40%" stopColor="#e5a93c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c57f20" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="windowGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe699" />
            <stop offset="100%" stopColor="#d9822b" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="600" height="450" fill="url(#twilightSky)" />

        {/* Distant stars */}
        <circle cx="90" cy="50" r="1" fill="#fff" opacity="0.6" />
        <circle cx="160" cy="80" r="1.5" fill="#ffeeb8" opacity="0.8" />
        <circle cx="280" cy="40" r="1.2" fill="#fff" opacity="0.5" />
        <circle cx="480" cy="70" r="1" fill="#fff" opacity="0.7" />
        <circle cx="530" cy="110" r="1.2" fill="#ffeeb8" opacity="0.9" />

        {/* Distant silhouettes */}
        <path
          d="M0 320 L40 310 L70 315 L110 300 L140 310 L190 280 L220 290 L260 270 L300 285 L380 260 L420 280 L490 250 L530 270 L600 260 L600 450 L0 450 Z"
          fill="#070c18"
          opacity="0.7"
        />

        {/* Grand Cathedral & Clock Tower Structure */}
        {/* Main Central Tower */}
        <rect x="310" y="70" width="75" height="260" fill="#0b1324" />
        {/* Tower Pinnacle / Spire */}
        <polygon points="347.5,15 310,70 385,70" fill="#080e1c" />
        <polygon points="347.5,15 347.5,70 385,70" fill="#0f1a30" />
        <line x1="347.5" y1="5" x2="347.5" y2="15" stroke="#c5a059" strokeWidth="2" />

        {/* Clock Face with illuminated glow */}
        <circle cx="347.5" cy="115" r="32" fill="url(#clockGlow)" opacity="0.4" />
        <circle cx="347.5" cy="115" r="18" fill="#fff5d0" stroke="#0b1324" strokeWidth="3" />
        <circle cx="347.5" cy="115" r="14" fill="#fffaea" />
        {/* Roman numeral markings & clock hands */}
        <line x1="347.5" y1="115" x2="347.5" y2="105" stroke="#0b1324" strokeWidth="2" strokeLinecap="round" />
        <line x1="347.5" y1="115" x2="355" y2="115" stroke="#0b1324" strokeWidth="1.5" strokeLinecap="round" />

        {/* Gothic Belfry Arches */}
        <path d="M322 155 Q328 145 334 155 V185 H322 Z" fill="#070c18" stroke="#334155" strokeWidth="1" />
        <path d="M341 155 Q347.5 142 354 155 V185 H341 Z" fill="#070c18" stroke="#334155" strokeWidth="1" />
        <path d="M361 155 Q367 145 373 155 V185 H361 Z" fill="#070c18" stroke="#334155" strokeWidth="1" />

        {/* Turrets and Pinnacles */}
        <polygon points="307,70 312,45 317,70" fill="#070c18" />
        <polygon points="378,70 383,45 388,70" fill="#070c18" />

        {/* West Academic Wing */}
        <polygon points="60,200 60,340 310,340 310,180 200,180 180,160 160,180" fill="#0d172a" />
        {/* Roof line details */}
        <polygon points="55,200 180,155 315,180 310,185 180,165 60,205" fill="#1e293b" />
        
        {/* Glowing Gothic arched windows */}
        <g fill="url(#windowGlow)" opacity="0.85">
          <path d="M90 220 Q98 205 106 220 V255 H90 Z" />
          <path d="M125 220 Q133 205 141 220 V255 H125 Z" />
          <path d="M160 220 Q168 205 176 220 V255 H160 Z" />
          <path d="M225 220 Q233 205 241 220 V255 H225 Z" />
          <path d="M260 220 Q268 205 276 220 V255 H260 Z" />
          
          {/* Lower level windows */}
          <path d="M90 275 Q98 265 106 275 V305 H90 Z" />
          <path d="M125 275 Q133 265 141 275 V305 H125 Z" />
          <path d="M160 275 Q168 265 176 275 V305 H160 Z" />
          <path d="M225 275 Q233 265 241 275 V305 H225 Z" />
          <path d="M260 275 Q268 265 276 275 V305 H260 Z" />
        </g>

        {/* East Library Cloister Wing */}
        <polygon points="385,180 540,210 540,350 385,340" fill="#0e182c" />
        <g fill="url(#windowGlow)" opacity="0.75">
          <path d="M410 225 Q418 212 426 225 V260 H410 Z" />
          <path d="M445 230 Q453 218 461 230 V265 H445 Z" />
          <path d="M480 235 Q488 224 496 235 V270 H480 Z" />
          <path d="M410 280 Q418 270 426 280 V310 H410 Z" />
          <path d="M445 285 Q453 275 461 285 V315 H445 Z" />
          <path d="M480 290 Q488 280 496 290 V320 H480 Z" />
        </g>

        {/* Manicured Lawn Quadrangle */}
        <polygon points="0,320 600,320 600,450 0,450" fill="#09121d" />
        <ellipse cx="300" cy="400" rx="280" ry="80" fill="#0d1b28" />

        {/* Classical Stone Pathway */}
        <path d="M300 325 L240 450 H360 L315 325 Z" fill="#1b2536" />
        <path d="M100 450 L270 360 L285 365 L140 450 Z" fill="#172030" />
        <path d="M500 450 L330 360 L315 365 L460 450 Z" fill="#172030" />

        {/* Warm Iron Lantern Posts with ambient pools of light */}
        {/* Lantern 1 */}
        <ellipse cx="230" cy="385" rx="40" ry="18" fill="#e5a93c" opacity="0.25" />
        <line x1="230" y1="385" x2="230" y2="335" stroke="#050810" strokeWidth="2.5" />
        <circle cx="230" cy="333" r="5" fill="#ffe082" />

        {/* Lantern 2 */}
        <ellipse cx="370" cy="385" rx="40" ry="18" fill="#e5a93c" opacity="0.25" />
        <line x1="370" y1="385" x2="370" y2="335" stroke="#050810" strokeWidth="2.5" />
        <circle cx="370" cy="333" r="5" fill="#ffe082" />
      </svg>
    </div>
  );
};

export const CollegiateCourtyard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#162132] select-none ${className}`}>
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="afternoonSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c4263" />
            <stop offset="60%" stopColor="#556e91" />
            <stop offset="100%" stopColor="#8ea5c4" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#afternoonSky)" />

        {/* Red Brick & Limestone Collegiate Quadrangle */}
        <rect x="40" y="100" width="520" height="220" fill="#2d1c1b" />
        <polygon points="30,100 300,50 570,100" fill="#1f2d3d" />

        {/* Stone dormers and chimney stacks */}
        <rect x="120" y="60" width="30" height="40" fill="#2d1c1b" />
        <polygon points="115,60 135,40 155,60" fill="#1f2d3d" />
        <rect x="450" y="60" width="30" height="40" fill="#2d1c1b" />
        <polygon points="445,60 465,40 485,60" fill="#1f2d3d" />

        {/* Ivy-covered arched stone cloister */}
        <g fill="#1a2534">
          <path d="M80 180 Q105 140 130 180 V320 H80 Z" />
          <path d="M160 180 Q185 140 210 180 V320 H160 Z" />
          <path d="M240 180 Q265 140 290 180 V320 H240 Z" />
          <path d="M310 180 Q335 140 360 180 V320 H310 Z" />
          <path d="M390 180 Q415 140 440 180 V320 H390 Z" />
          <path d="M470 180 Q495 140 520 180 V320 H470 Z" />
        </g>

        {/* Lush Lawn Quad */}
        <rect x="0" y="280" width="600" height="120" fill="#1b382b" />
        <polygon points="0,320 600,320 600,400 0,400" fill="#234535" />

        {/* Century-old oak tree framing */}
        <path d="M30 400 C45 310 70 240 60 150 C100 120 160 140 180 190" stroke="#130e0c" strokeWidth="18" fill="none" />
        <circle cx="120" cy="140" r="65" fill="#1f412a" opacity="0.85" />
        <circle cx="70" cy="110" r="50" fill="#2a5236" opacity="0.9" />

        {/* Students studying collaboratively on wooden bench & blanket */}
        {/* Picnic blanket */}
        <polygon points="260,340 370,335 390,370 280,375" fill="#c5a059" opacity="0.85" />
        {/* Scholar figures */}
        <circle cx="295" cy="330" r="10" fill="#f2ede4" />
        <path d="M285 340 C285 335 305 335 305 340 L310 360 H280 Z" fill="#0f2341" />
        <circle cx="335" cy="328" r="9.5" fill="#e0a96d" />
        <path d="M325 338 C325 333 345 333 345 338 L348 358 H322 Z" fill="#78350f" />
        <circle cx="365" cy="332" r="9" fill="#f5ede0" />
        <path d="M356 341 C356 336 374 336 374 341 L377 360 H353 Z" fill="#14532d" />

        {/* Open academic textbooks and laptop */}
        <polygon points="315,350 328,347 335,353 322,356" fill="#ffffff" />
        <rect x="340" y="347" width="14" height="9" rx="1" fill="#cbd5e1" />
      </svg>
    </div>
  );
};

export const GrandDiningHall: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#180e07] select-none ${className}`}>
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="chandelierGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffebad" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#d9822b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#180e07" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Deep rich wood timber ceiling */}
        <rect width="600" height="400" fill="#180f08" />

        {/* Hammerbeam timber arches */}
        <path d="M0 0 L200 120 L300 80 L400 120 L600 0 V60 L420 160 L300 120 L180 160 L0 60 Z" fill="#26170c" />
        <path d="M0 80 L180 180 L300 140 L420 180 L600 80 V120 L400 200 L300 170 L200 200 L0 120 Z" fill="#1e1108" />

        {/* Stained-glass pointed gothic back windows */}
        <path d="M260 140 Q300 90 340 140 V230 H260 Z" fill="#1c304d" stroke="#c5a059" strokeWidth="2" />
        <line x1="300" y1="100" x2="300" y2="230" stroke="#c5a059" strokeWidth="1.5" />
        <circle cx="300" cy="140" r="14" fill="#a855f7" opacity="0.6" />

        {/* Hanging Brass Chandeliers with Candle Flames */}
        {/* Left Chandelier */}
        <circle cx="180" cy="150" r="70" fill="url(#chandelierGlow)" />
        <line x1="180" y1="0" x2="180" y2="135" stroke="#775a19" strokeWidth="2" />
        <ellipse cx="180" cy="138" rx="28" ry="6" fill="#c5a059" stroke="#775a19" strokeWidth="1" />
        <circle cx="160" cy="133" r="2.5" fill="#fff" />
        <circle cx="180" cy="132" r="3" fill="#fff" />
        <circle cx="200" cy="133" r="2.5" fill="#fff" />

        {/* Right Chandelier */}
        <circle cx="420" cy="150" r="70" fill="url(#chandelierGlow)" />
        <line x1="420" y1="0" x2="420" y2="135" stroke="#775a19" strokeWidth="2" />
        <ellipse cx="420" cy="138" rx="28" ry="6" fill="#c5a059" stroke="#775a19" strokeWidth="1" />
        <circle cx="400" cy="133" r="2.5" fill="#fff" />
        <circle cx="420" cy="132" r="3" fill="#fff" />
        <circle cx="440" cy="133" r="2.5" fill="#fff" />

        {/* Long Oak Banquet Tables in perspective */}
        <polygon points="120,240 220,240 160,400 40,400" fill="#361f10" />
        <polygon points="380,240 480,240 560,400 440,400" fill="#361f10" />
        <polygon points="250,235 350,235 370,400 230,400" fill="#442816" />

        {/* Tableware, polished silver goblets, candelabras */}
        <g fill="#fed488" opacity="0.8">
          <circle cx="270" cy="280" r="3" />
          <circle cx="330" cy="280" r="3" />
          <circle cx="260" cy="330" r="4" />
          <circle cx="340" cy="330" r="4" />
          <circle cx="250" cy="370" r="5" />
          <circle cx="350" cy="370" r="5" />
        </g>
      </svg>
    </div>
  );
};

export const ResearchLabCleanroom: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#071324] select-none ${className}`}>
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="laserGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="600" height="400" fill="#081426" />

        {/* Cleanroom ceiling HEPA filter grid */}
        <g stroke="#1e293b" strokeWidth="1">
          <line x1="0" y1="40" x2="600" y2="40" />
          <line x1="0" y1="80" x2="600" y2="80" />
          <line x1="100" y1="0" x2="100" y2="80" />
          <line x1="200" y1="0" x2="200" y2="80" />
          <line x1="300" y1="0" x2="300" y2="80" />
          <line x1="400" y1="0" x2="400" y2="80" />
          <line x1="500" y1="0" x2="500" y2="80" />
        </g>

        {/* Stainless steel optical breadboard table */}
        <polygon points="60,180 540,180 580,380 20,380" fill="#0f1f38" stroke="#334155" strokeWidth="1.5" />
        
        {/* Cryogenic Dilution Refrigerator / Quantum Chandelier */}
        <rect x="250" y="70" width="100" height="30" rx="3" fill="#cbd5e1" />
        <rect x="265" y="100" width="70" height="40" fill="#d97706" />
        <rect x="275" y="140" width="50" height="35" fill="#f59e0b" />
        <circle cx="300" cy="190" r="14" fill="#38bdf8" />
        <circle cx="300" cy="190" r="45" fill="url(#laserGlow)" />

        {/* Laser beam optics path */}
        <line x1="100" y1="240" x2="300" y2="240" stroke="#00f2fe" strokeWidth="2.5" />
        <line x1="300" y1="240" x2="480" y2="210" stroke="#00f2fe" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="300" y1="240" x2="300" y2="190" stroke="#38bdf8" strokeWidth="2" />

        {/* Mirror mounts and optical prisms */}
        <polygon points="95,230 115,240 95,250" fill="#94a3b8" stroke="#f8fafc" strokeWidth="1" />
        <polygon points="290,230 310,240 290,250" fill="#94a3b8" stroke="#f8fafc" strokeWidth="1" />
        <polygon points="475,200 495,210 475,220" fill="#94a3b8" stroke="#f8fafc" strokeWidth="1" />

        {/* Silicon Wafer Carousel */}
        <ellipse cx="180" cy="310" rx="50" ry="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
        <ellipse cx="180" cy="310" rx="36" ry="17" fill="#0f172a" />
        <circle cx="180" cy="310" r="4" fill="#38bdf8" />

        {/* Status diagnostic screens */}
        <rect x="420" y="270" width="110" height="70" rx="4" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M430 310 Q450 285 470 310 T510 300" fill="none" stroke="#22c55e" strokeWidth="2" />
        <circle cx="430" cy="285" r="3" fill="#38bdf8" />
        <line x1="440" y1="285" x2="480" y2="285" stroke="#94a3b8" strokeWidth="2" />
      </svg>
    </div>
  );
};

export const CollegiateDiningHall = GrandDiningHall;
export const ResearchCleanroomLab = ResearchLabCleanroom;
