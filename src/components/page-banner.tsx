type PageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="hero-surface relative overflow-hidden">
      <div className="blueprint-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <p className="eyebrow text-primary-foreground/80">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-balance text-primary-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm text-primary-foreground/85 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
