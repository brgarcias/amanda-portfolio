import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import { testimonials } from '@/data/profile';
import { SectionHeading } from '@/components/SectionHeading';

const stars = [1, 2, 3, 4, 5] as const;

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="avaliacoes" className="testimonials-section section-pad">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="05"
            label="Avaliações"
            title={
              hasTestimonials ? (
                <>
                  Palavras de quem
                  <br />
                  trabalhou comigo.
                </>
              ) : (
                <>
                  Já trabalhou
                  <br />
                  comigo?
                </>
              )
            }
          />
          <p className="section-aside">
            {hasTestimonials
              ? 'Avaliações de clientes, publicadas com autorização.'
              : 'Sua avaliação ajuda outras empresas a conhecer meu trabalho e me ajuda a evoluir.'}
          </p>
        </div>
        {hasTestimonials && (
          <ul className="testimonials-grid">
            {testimonials.map((item) => (
              <li key={`${item.name}-${item.date}`}>
                <figure className="testimonial-card">
                  <p
                    className="testimonial-rating"
                    role="img"
                    aria-label={`Avaliação: ${item.rating} de 5`}
                  >
                    {stars.map((value) => (
                      <Star
                        key={value}
                        aria-hidden="true"
                        className={
                          value <= item.rating ? 'is-filled' : undefined
                        }
                      />
                    ))}
                  </p>
                  <blockquote>
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    {item.role && <span>{item.role}</span>}
                  </figcaption>
                  <div className="testimonial-meta">
                    <p className="divided-list">
                      <span>{item.service}</span>
                      <span>{item.date}</span>
                    </p>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        )}
        <div className="review-invite">
          <div>
            <p className="review-invite-stars" aria-hidden="true">
              {stars.map((value) => (
                <Star key={value} />
              ))}
            </p>
            <h3>
              {hasTestimonials
                ? 'Também trabalhou comigo?'
                : 'Conte como foi a experiência.'}
            </h3>
            <p>
              Leva poucos minutos, e seu depoimento só é publicado com a sua
              autorização.
            </p>
          </div>
          <Link className="button button-accent" href="/avaliar">
            Avaliar meu trabalho <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
