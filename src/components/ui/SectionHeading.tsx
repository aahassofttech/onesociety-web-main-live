interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-2">
          {tag}
        </span>
      )}
      <h2 className={`section-title ${light ? "text-white" : "text-primary"}`}>{title}</h2>
      {subtitle && (
        <p
          className={`section-subtitle max-w-4xl ${center ? "mx-auto" : ""} ${
            light ? "text-blue-200" : "text-neutral-dark"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
