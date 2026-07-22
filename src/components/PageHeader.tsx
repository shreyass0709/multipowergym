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
    <div className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-32 pb-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C6FF00]/10 via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#101010] px-3.5 py-1 text-xs font-bold text-[#C6FF00] tracking-wider uppercase">
            <span className="h-2 w-2 rounded-full bg-[#C6FF00] animate-pulse" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-[#A0A0A0] text-sm sm:text-base leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
