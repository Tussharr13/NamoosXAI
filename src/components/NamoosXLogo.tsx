interface NamoosXLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'icon' | 'full' | 'text';
  className?: string;
}

export default function NamoosXLogo({ size = 'md', variant = 'full', className = '' }: NamoosXLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10', 
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const LogoIcon = () => (
    <svg 
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 100 100" 
      fill="none"
    >
      {/* NamoosX N-shaped logo with gradient */}
      <defs>
        <linearGradient id="namoosx-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      
      {/* Main N shape - interconnected flowing design */}
      <path 
        d="M15 85 L15 15 L25 15 L25 35 L75 35 L75 15 L85 15 L85 85 L75 85 L75 45 L25 45 L25 85 Z"
        fill="url(#namoosx-gradient)"
        stroke="url(#namoosx-gradient)"
        strokeWidth="2"
      />
      
      {/* Additional styling elements */}
      <circle cx="50" cy="50" r="3" fill="url(#namoosx-gradient)" opacity="0.3" />
    </svg>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  if (variant === 'text') {
    return (
      <span className={`font-bold ${textSizes[size]} bg-gradient-to-r from-sky-600 via-blue-600 to-sky-800 bg-clip-text text-transparent ${className}`}>
        NamoosX
      </span>
    );
  }

  // Full logo (icon + text)
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <LogoIcon />
      <span className={`font-bold ${textSizes[size]} bg-gradient-to-r from-sky-600 via-blue-600 to-sky-800 bg-clip-text text-transparent`}>
        NamoosX
      </span>
    </div>
  );
}
