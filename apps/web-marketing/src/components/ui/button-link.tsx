import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center rounded-xl font-semibold transition min-h-[48px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const variants = {
  primary: `${base} bg-primary px-8 py-3.5 text-white shadow-lg shadow-primary/20 hover:bg-primary-dark`,
  secondary: `${base} border border-border bg-card px-8 py-3.5 hover:border-primary/40`,
  ghost: `${base} px-6 py-3 text-muted hover:text-foreground hover:bg-background`,
  white: `${base} bg-white px-8 py-3.5 text-primary hover:bg-white/90`,
  outlineWhite: `${base} border border-white/40 px-8 py-3.5 text-white hover:bg-white/10`,
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children,
  external,
}: ButtonLinkProps) {
  const cls = `${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
