import type { ReactNode } from 'react';

type SectionHeadingProps = {
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> {label}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
