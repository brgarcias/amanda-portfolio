import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/data/profile';
import { formatDuration, formatMonth } from '@/lib/dates';

type Role = (typeof experience)[number];
type Group = { company: string; companyShort: string; roles: Role[] };

// Consecutive roles at the same company share one block, so the progression
// inside Brink’s reads as one story.
const groups = experience.reduce<Group[]>((list, role) => {
  const last = list.at(-1);
  if (last && last.company === role.company) {
    last.roles.push(role);
  } else {
    list.push({
      company: role.company,
      companyShort: role.companyShort,
      roles: [role],
    });
  }
  return list;
}, []);

function groupSpan(group: Group) {
  const first = group.roles.at(-1)!;
  const last = group.roles[0];
  const end = last.end ? formatMonth(last.end).toLowerCase() : 'atual';
  return `${formatMonth(first.start)} — ${end}`;
}

export function Experience({ today }: { today: string }) {
  return (
    <section
      id="experiencia"
      className="experience-section section-pad"
      aria-labelledby="experiencia-titulo"
    >
      <div className="container">
        <SectionHeading
          number="04"
          label="Trajetória profissional"
          id="experiencia-titulo"
          title={
            <>
              De estagiária
              <br />a especialista.
            </>
          }
          description="Cinco funções em três empresas, da construção civil à gestão de segurança do trabalho."
        />
        <div className="timeline-wrap">
          <span className="timeline-rail" aria-hidden="true">
            <span className="timeline-rail-fill" />
          </span>
          <ol className="timeline" role="list">
            {groups.map((group) => (
              <li className="timeline-group" key={group.company}>
                <div className="timeline-group-head" data-reveal>
                  <h3>{group.companyShort}</h3>
                  <p className="timeline-group-meta">
                    <span>{group.company}</span>
                    <span>
                      {groupSpan(group)}
                      {group.roles.length > 1 &&
                        ` · ${group.roles.length} funções`}
                    </span>
                  </p>
                </div>
                <ol className="timeline-roles" role="list">
                  {group.roles.map((role) => (
                    <li
                      key={`${role.company}-${role.start}`}
                      className={
                        role.current
                          ? 'timeline-item is-current'
                          : 'timeline-item'
                      }
                    >
                      <span className="timeline-node" aria-hidden="true" />
                      <div className="timeline-meta" data-reveal>
                        <p className="timeline-period">{role.period}</p>
                        <p className="timeline-duration">
                          {formatDuration(role.start, role.end ?? today)}
                        </p>
                        {role.current && (
                          <span className="current-badge">
                            <span className="status-dot" aria-hidden="true" />
                            Atual
                          </span>
                        )}
                      </div>
                      <div className="timeline-card" data-reveal>
                        <h4>{role.role}</h4>
                        <p className="timeline-mode">Presencial</p>
                        <details open>
                          <summary>
                            <span>Principais atividades</span>
                            <span
                              className="details-symbol"
                              aria-hidden="true"
                            />
                          </summary>
                          <ul>
                            {role.responsibilities.map((responsibility) => (
                              <li key={responsibility}>{responsibility}</li>
                            ))}
                          </ul>
                        </details>
                      </div>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
