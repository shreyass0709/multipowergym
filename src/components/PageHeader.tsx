export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-background to-background" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-brand" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
