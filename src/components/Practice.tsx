import { Flow } from '@/components/Flow';
import { SectionHeading } from '@/components/SectionHeading';
import { practice } from '@/data/profile';

// The day-to-day fronts at Brink’s, each as a small experience: the
// situation, her part in it, how she works, what it brings, and the steps
// it goes through.
export function Practice() {
  return (
    <section
      id="pratica"
      className="practice-section section-pad"
      aria-labelledby="pratica-titulo"
    >
      <div className="container">
        <SectionHeading
          number="03"
          label="Na prática"
          id="pratica-titulo"
          title={
            <>
              O trabalho,
              <br />
              passo a passo.
            </>
          }
          description="Cinco frentes do dia a dia na Brink’s, que acompanham a trajetória do estágio à posição de especialista: a situação, a atuação, a abordagem e o que cada uma traz para a operação."
        />
        <ol className="practice-list" role="list">
          {practice.map((front, index) => (
            <li className="practice-item" key={front.title} data-reveal>
              <div className="practice-copy">
                <p className="practice-index">
                  <span>0{index + 1}</span>
                  {front.since}
                </p>
                <h3>{front.title}</h3>
                <p className="practice-context">{front.context}</p>
                <dl className="practice-sheet">
                  <div>
                    <dt>Atuação</dt>
                    <dd>{front.role}</dd>
                  </div>
                  <div>
                    <dt>Abordagem</dt>
                    <dd>
                      {front.approach}
                      <span className="practice-tools">
                        {front.tools.join(' · ')}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>Contribuição</dt>
                    <dd>{front.contribution}</dd>
                  </div>
                </dl>
              </div>
              <Flow steps={front.steps} label={`Etapas: ${front.title}`} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
