import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Files,
  ShieldCheck,
} from 'lucide-react';
import { expertise } from '@/data/profile';
import { SectionHeading } from '@/components/SectionHeading';

const icons = {
  shield: ShieldCheck,
  files: Files,
  chart: ChartNoAxesCombined,
  building: Building2,
};

export function Expertise() {
  return (
    <section id="atuacao" className="expertise-section section-pad">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="02"
            label="Áreas de atuação"
            title={
              <>
                Conhecimento que
                <br />
                se transforma em cuidado.
              </>
            }
          />
          <p className="section-aside">
            Competências que se complementam para uma atuação integrada, da
            prevenção à melhoria contínua.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <article className="expertise-card" key={item.title}>
                <div className="expertise-card-top">
                  <Icon size={30} strokeWidth={1.4} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul
                  className="tags"
                  aria-label={`Competências em ${item.title}`}
                >
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="training-note">
          <span>Compartilhar conhecimento também é prevenir.</span>
          <p>
            Experiência no desenvolvimento de materiais de treinamento e no
            apoio às equipes e filiais.
          </p>
          <ArrowUpRight aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
