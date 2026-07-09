import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
};

export function Section({ id, title, subtitle, children, className = '', alt }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${alt ? 'bg-card border-y border-border' : ''} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {title && <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-muted leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
