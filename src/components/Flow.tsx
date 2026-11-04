import type { CSSProperties } from 'react';

export type FlowStep = { label: string; detail?: string };

type FlowProps = {
  steps: readonly FlowStep[];
  /** The diagram's name, for screen readers. */
  label: string;
};

/**
 * A process, step by step: each step's name and, under it, what happens in
 * it, joined by arrows. An ordered list, so screen readers follow the steps
 * in order; the arrows are only drawn.
 */
export function Flow({ steps, label }: FlowProps) {
  return (
    <ol
      className="flow"
      aria-label={label}
      style={{ '--steps': steps.length } as CSSProperties}
    >
      {steps.map((step, index) => (
        <li
          key={step.label}
          className="flow-step"
          style={{ '--i': index } as CSSProperties}
        >
          {index > 0 && (
            <span className="flow-link" aria-hidden="true">
              <svg className="flow-arrow" viewBox="0 0 24 12" focusable="false">
                <path d="M1 6h20M15.5 1.5 21 6l-5.5 4.5" />
              </svg>
              <span className="flow-pulse" />
            </span>
          )}
          <span className="flow-node">
            <span className="flow-label">{step.label}</span>
            {step.detail && <span className="flow-detail">{step.detail}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
