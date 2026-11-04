import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import type { Testimonial } from '@/lib/reviews';

const stars = [1, 2, 3, 4, 5] as const;

export function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section
      id="avaliacoes"
      className="testimonials-section section-pad"
      aria-labelledby="avaliacoes-titulo"
    >
      <div className="container">
        <SectionHeading
          number="06"
          label="Avaliações"
          id="avaliacoes-titulo"
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
          description={
            hasTestimonials
              ? 'Avaliações de clientes, publicadas com autorização.'
              : 'Sua avaliação ajuda outras empresas a conhecer meu trabalho e me ajuda a evoluir.'
          }
        />
        {hasTestimonials && (
          <ul className="testimonial-list" role="list">
            {testimonials.map((item) => (
              <li key={item.id}>
                <figure className="testimonial-card" data-reveal>
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
                  <p className="testimonial-meta">
                    <span>{item.service}</span>
                    <span>{item.date}</span>
                  </p>
                </figure>
              </li>
            ))}
          </ul>
        )}
        <div className="review-invite" data-reveal>
          <div className="review-invite-copy">
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
              Leva poucos minutos, e o depoimento só é publicado com a sua
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
