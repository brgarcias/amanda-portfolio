import { ArrowUpRight, HardHat, Leaf, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export function About() {
  return (
    <section id="sobre" className="about-section section-pad">
      <div className="container">
        <div className="about-layout">
          <SectionHeading
            number="01"
            label="Sobre mim"
            title={
              <>
                Técnica na prática.
                <br />
                <span className="muted-heading">Cuidado em cada escolha.</span>
              </>
            }
          />
          <div className="about-copy">
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
              até a posição de analista de segurança do trabalho. Hoje, amplio
              esse olhar com o MBA em ESG e Negócios Sustentáveis na USP/Esalq.
            </p>
            <a className="text-link" href="#atuacao">
              Como essa experiência se traduz na prática{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="practice-strip">
          <div>
            <ShieldCheck aria-hidden="true" />
            <span>
              <strong>Segurança do trabalho</strong>
              <span>Prevenção e gestão de riscos</span>
            </span>
          </div>
          <div>
            <HardHat aria-hidden="true" />
            <span>
              <strong>Engenharia civil</strong>
              <span>Do planejamento ao campo</span>
            </span>
          </div>
          <div>
            <Leaf aria-hidden="true" />
            <span>
              <strong>Meio ambiente & ESG</strong>
              <span>Uma perspectiva sustentável</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
