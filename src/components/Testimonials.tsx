import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import { testimonials } from '@/data/profile';
import { SectionHeading } from '@/components/SectionHeading';

const stars = [1, 2, 3, 4, 5] as const;

export function Testimonials({ number }: { number: string }) {
  return (
    <section id="depoimentos" className="testimonials-section section-pad">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number={number}
            label="Depoimentos"
            title={
              <>
                Palavras de quem
                <br />
                trabalhou comigo.
              </>
            }
          />
          <div className="section-aside">
            <p>Avaliações de clientes, publicadas com autorização.</p>
            <Link className="text-link" href="/avaliar">
              Deixe sua avaliação <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
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
                      className={value <= item.rating ? 'is-filled' : undefined}
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
      </div>
    </section>
  );
}
