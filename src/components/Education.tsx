import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { courses, education } from '@/data/profile';
import { SectionHeading } from '@/components/SectionHeading';

export function Education() {
  return (
    <section id="formacao" className="education-section section-pad">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="04"
            label="Formação & desenvolvimento"
            title={
              <>
                Aprender para
                <br />
                ir além.
              </>
            }
          />
          <p className="section-aside">
            Uma base sólida em engenharia, com novos caminhos em
            sustentabilidade e negócios.
          </p>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.title}>
              <div className="education-card-top">
                <span className="eyebrow">{item.kind}</span>
                <GraduationCap size={23} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <p className="institution">{item.institution}</p>
              <div className="education-card-footer">
                <span>{item.period}</span>
                <span
                  className={
                    item.status === 'Em andamento'
                      ? 'education-status studying'
                      : 'education-status'
                  }
                >
                  {item.status}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="courses-layout">
          <div>
            <p className="eyebrow">Aprendizado contínuo</p>
            <h3>Cursos & idiomas</h3>
            <ArrowUpRight
              className="courses-arrow"
              size={36}
              strokeWidth={1}
              aria-hidden="true"
            />
          </div>
          <ul className="course-list">
            {courses.map((course) => (
              <li key={course.title}>
                <div>
                  <strong>{course.title}</strong>
                  <span>{course.institution}</span>
                </div>
                <span>{course.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
