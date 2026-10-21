import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { experience, profile } from '@/data/profile';
import { SectionHeading } from '@/components/SectionHeading';

export function Experience() {
  return (
    <section id="experiencia" className="experience-section section-pad">
      <div className="container experience-layout">
        <div className="experience-intro">
          <SectionHeading
            number="03"
            label="Trajetória profissional"
            title={
              <>
                Experiência que
                <br />
                constrói o próximo passo.
              </>
            }
            description="Uma trajetória de evolução contínua, conectando a realidade das operações à gestão de segurança."
          />
          <a className="text-link" href={profile.resume} download>
            Currículo completo <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <ArrowDownRight
            className="trajectory-arrow"
            size={110}
            strokeWidth={0.7}
            aria-hidden="true"
          />
        </div>
        <ol className="timeline">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.start}`}
              className={
                item.current ? 'timeline-item is-current' : 'timeline-item'
              }
            >
              <div className="timeline-meta">
                <span>{item.period}</span>
                {item.current && (
                  <span className="current-badge">
                    <span className="status-dot" /> Atual
                  </span>
                )}
              </div>
              <h3>{item.role}</h3>
              <p className="timeline-company" title={item.companyFull}>
                {item.company}
                <span>Presencial</span>
              </p>
              <details open={item.current}>
                <summary>
                  <span>Principais atividades</span>
                  <span className="details-symbol" aria-hidden="true" />
                </summary>
                <ul>
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
