import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { facts } from '@/data/profile';

export function About() {
  return (
    <section
      id="sobre"
      className="about-section section-pad"
      aria-labelledby="sobre-titulo"
    >
      <div className="container">
        <SectionHeading
          number="01"
          label="Sobre mim"
          id="sobre-titulo"
          title={
            <>
              Técnica na prática,
              <br />
              cuidado em cada decisão.
            </>
          }
        />
        <div className="about-layout">
          <div className="about-copy" data-reveal>
            <p className="lead">
              Acredito que a boa engenharia começa com um compromisso: proteger
              as pessoas e o ambiente em que elas trabalham.
            </p>
            <p>
              Minha trajetória conecta a engenharia civil à saúde, segurança do
              trabalho e meio ambiente (SSMA). Da vivência em campo à gestão de
              indicadores, atuo com atenção aos detalhes, organização e
              responsabilidade.
            </p>
            <p>
              Na Brink’s, construí um percurso que começou no estágio e evoluiu
              até a posição de especialista de segurança do trabalho. Hoje,
              amplio esse olhar com o MBA em ESG e Negócios Sustentáveis na
              USP/Esalq.
            </p>
            <a className="text-link" href="#atuacao">
              Como isso se traduz na prática{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <dl className="fact-sheet" data-reveal>
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
