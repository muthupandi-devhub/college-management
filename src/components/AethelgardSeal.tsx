import React from 'react';

interface AethelgardSealProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'gold';
}

export const AethelgardSeal: React.FC<AethelgardSealProps> = ({
  className = '',
  size = 40,
  variant = 'gold',
}) => {
  const strokeColor =
    variant === 'dark' ? '#0f2341' : variant === 'gold' ? '#c5a059' : '#ffffff';
  const fillColor =
    variant === 'dark' ? '#0f2341' : variant === 'gold' ? '#c5a059' : '#ffffff';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Aethelgard University Crest"
    >
      {/* Outer concentric heraldic rings */}
      <circle cx="50" cy="50" r="47" stroke={strokeColor} strokeWidth="1.75" />
      <circle cx="50" cy="50" r="43" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="1.5 2" />
      <circle cx="50" cy="50" r="38" stroke={strokeColor} strokeWidth="1.25" />

      {/* Medieval Shield outline */}
      <path
        d="M50 17 C62 17 72 20 72 32 C72 53 58 68 50 74 C42 68 28 53 28 32 C28 20 38 17 50 17 Z"
        fill="#0f2341"
        stroke={strokeColor}
        strokeWidth="1.5"
      />

      {/* Open book of knowledge */}
      <path
        d="M38 31 C43 29.5 47 30.5 50 32 C53 30.5 57 29.5 62 31 V43 C57 41.5 53 42.5 50 44 C47 42.5 43 41.5 38 43 Z"
        fill={fillColor}
        fillOpacity="0.2"
        stroke={strokeColor}
        strokeWidth="1.2"
      />
      <path d="M50 32 V44" stroke={strokeColor} strokeWidth="1.2" />
      
      {/* Three Celestial Stars of Wisdom */}
      <polygon points="50,47 51.5,50.5 55,51 52.5,53.5 53,57 50,55 47,57 47.5,53.5 45,51 48.5,50.5" fill={fillColor} />
      <polygon points="41,53 42,55.5 45,56 43,58 43.5,61 41,59.5 38.5,61 39,58 37,56 40,55.5" fill={fillColor} transform="scale(0.85) translate(8, 4)" />
      <polygon points="59,53 60,55.5 63,56 61,58 61.5,61 59,59.5 56.5,61 57,58 55,56 58,55.5" fill={fillColor} transform="scale(0.85) translate(10, 4)" />

      {/* Laurel branches framing base */}
      <path
        d="M26 48 C24 58 29 69 38 77 C43 81 50 83 50 83 C50 83 57 81 62 77 C71 69 76 58 74 48"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
      />

      {/* Ribbon Banner */}
      <path
        d="M30 84 Q50 90 70 84 L68 88 Q50 94 32 88 Z"
        fill={strokeColor}
      />
    </svg>
  );
};
