export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{children && <div className="section-copy">{children}</div>}</div>;
}
