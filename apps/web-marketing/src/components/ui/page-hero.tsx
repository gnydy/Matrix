type PageHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  compact?: boolean;
};

export function PageHero({ title, subtitle, badge, compact }: PageHeroProps) {
  return (
    <section className={`gradient-hero border-b border-border ${compact ? 'py-12' : 'py-16 sm:py-20'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <p className="mb-4 inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted">
              {badge}
            </p>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-muted leading-relaxed sm:text-xl">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
