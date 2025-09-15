import React from 'react';

interface LogoProps {
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ height = 32, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/DILOGO.png" 
        alt="Dinesh Digital SEO" 
        style={{ height: `${height}px` }}
        className="h-auto"
      />
    </div>
  );
};

export default Logo;