import { Flow } from '@/components/Flow';
import { SectionHeading } from '@/components/SectionHeading';
import { practice } from '@/data/profile';

// The day-to-day fronts at Brink’s, each drawn as the steps it goes through.
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
          description="Como as responsabilidades do dia a dia se organizam na Brink’s, da origem da demanda à entrega, em frentes que evoluíram do estágio à posição de especialista."
        />
        <ol className="practice-list" role="list">
          {practice.map((front, index) => (
            <li className="practice-item" key={front.title} data-reveal>
              <div className="practice-copy">
                <span className="practice-index">0{index + 1}</span>
                <h3>{front.title}</h3>
                <p>{front.summary}</p>
                <p className="practice-tools">{front.tools.join(' · ')}</p>
              </div>
              <Flow steps={front.steps} label={`Etapas: ${front.title}`} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
