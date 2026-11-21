import { site } from '../config/site.config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'utility';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost' | 'utility';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const baseStyles = 'inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-wider rounded transition-all duration-150 whitespace-nowrap';

const variants = {
  primary: 'bg-primary hover:bg-primary-hover text-text-primary shadow-[0_0_12px_rgba(56,189,248,0.6)] active:shadow-[0_0_12px_rgba(56,189,248,0.6),inset_0_0_12px_rgba(59,130,246,0.15)]',
  ghost: 'bg-transparent border border-secondary text-secondary hover:bg-secondary/10',
  utility: 'bg-bg-recessed text-text-secondary border border-border-strong hover:bg-bg-elevated',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-sm',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({ variant = 'primary', size = 'md', children, className = '', ...props }: LinkButtonProps) {
  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function RegisterButton({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <LinkButton
      href={site.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="primary"
      size={size}
      className={className}
    >
      Register Now
      <span className="sr-only">(opens in new tab)</span>
    </LinkButton>
  );
}
