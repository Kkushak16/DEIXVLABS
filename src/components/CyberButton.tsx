import React from 'react';
import { site } from '../config/site.config';

interface CyberButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  className?: string;
  newTab?: boolean;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  newTab = false,
}) => {
  const isPrimary = variant === 'primary';
  const sizeClasses = size === 'lg' ? 'px-7 py-3 text-sm' : 'px-5 py-2.5 text-xs';
  
  // Custom chamfer polygon clip path
  const chamferClip = {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
  };

  const content = (
    <div
      className={`group relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-200 select-none overflow-hidden ${sizeClasses} ${className}`}
      style={chamferClip}
    >
      {/* Background layer */}
      <div
        className={`absolute inset-0 transition-all duration-200 ${
          isPrimary
            ? 'bg-primary group-hover:bg-primary-hover shadow-[0_0_16px_rgba(56,189,248,0.6)]'
            : 'bg-bg-elevated border border-secondary/60 group-hover:border-secondary group-hover:bg-secondary/10'
        }`}
      />

      {/* Cyber corner highlight */}
      <span
        className="absolute bottom-0 right-0 w-3 h-3 bg-secondary transition-transform duration-200 group-hover:scale-125"
        style={{
          clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
        }}
        aria-hidden="true"
      />

      {/* Label with Glitch effect on hover */}
      <span className="relative z-10 flex items-center gap-2 text-text-primary whitespace-nowrap">
        <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">
          {label}
        </span>
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>

      {/* Glitch overlay on hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center text-secondary font-display font-bold uppercase tracking-wider"
        style={{
          clipPath: 'polygon(0 15%, 100% 15%, 100% 45%, 0 45%)',
          transform: 'translate(-2px, 1px)',
        }}
        aria-hidden="true"
      >
        <span className="flex items-center gap-2">
          {label}
          <span className="w-3.5 h-3.5" />
        </span>
      </div>

      {newTab && <span className="sr-only">(opens in new tab)</span>}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block text-left">
      {content}
    </button>
  );
};

export const CyberRegisterButton: React.FC<{ size?: 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  return (
    <CyberButton
      label="Register Now"
      href={site.registrationUrl}
      newTab={true}
      variant="primary"
      size={size}
      className={className}
    />
  );
};
