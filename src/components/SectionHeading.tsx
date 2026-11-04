import type { ReactNode } from 'react';

type SectionHeadingProps = {
  /** The section's position on the page, as "01". */
  number: string;
  label: string;
  title: ReactNode;
  /** The id of the heading, which the section points to with aria-labelledby. */
  id?: string;
  description?: ReactNode;
};

/** The numbered header shared by the sections of the home page. */
export function SectionHeading({
  number,
  label,
  title,
  id,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">
        <span className="eyebrow-index">{number}</span>
        {label}
      </p>
      <div className="section-heading-row">
        <h2 id={id}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}
