import { SectionHeading } from '@/components/SectionHeading';
import { expertise } from '@/data/profile';

// A line per area, not cards: the area, what Amanda does in it, the tools and
// methods in passing and, on the side, where she has done it.
export function Expertise() {
  return (
    <section
      id="atuacao"
      className="expertise-section section-pad"
      aria-labelledby="atuacao-titulo"
    >
      <div className="container">
        <SectionHeading
          number="02"
          label="Áreas de atuação"
          id="atuacao-titulo"
          title={
            <>
              Conhecimento que
              <br />
              se transforma em cuidado.
            </>
          }
          description="O que faço, por área, com as ferramentas e os métodos de cada frente e onde já fiz."
        />
        <ul className="ledger" role="list">
          {expertise.map((area, index) => (
            <li className="ledger-row" key={area.title} data-reveal>
              <div className="ledger-head">
                <span className="ledger-index">0{index + 1}</span>
                <h3>{area.title}</h3>
              </div>
              <div className="ledger-body">
                <p>{area.summary}</p>
                <p className="ledger-tools">{area.tools.join(' · ')}</p>
              </div>
              <div className="ledger-side">
                <span className="ledger-side-label">Onde</span>
                <p>{area.where.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
