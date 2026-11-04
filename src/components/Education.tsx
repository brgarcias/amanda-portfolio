import { SectionHeading } from '@/components/SectionHeading';
import { courses, education } from '@/data/profile';

export function Education() {
  return (
    <section
      id="formacao"
      className="education-section section-pad"
      aria-labelledby="formacao-titulo"
    >
      <div className="container">
        <SectionHeading
          number="05"
          label="Formação & desenvolvimento"
          id="formacao-titulo"
          title={
            <>
              Engenharia na base,
              <br />
              ESG no horizonte.
            </>
          }
          description="Uma base sólida em engenharia civil e segurança do trabalho, com novos caminhos em sustentabilidade e negócios."
        />
        <div className="study">
          <ol className="degree-list" role="list">
            {education.map((item) => (
              <li
                key={item.title}
                className={
                  item.status === 'Em andamento'
                    ? 'degree is-ongoing'
                    : 'degree'
                }
                data-reveal
              >
                <p className="degree-meta">
                  <span>{item.kind}</span>
                  <span>{item.period}</span>
                </p>
                <h3>{item.title}</h3>
                <p className="degree-institution">{item.institution}</p>
                <span className="degree-status">{item.status}</span>
              </li>
            ))}
          </ol>
          <div className="course-block" data-reveal>
            <h3>Cursos & idiomas</h3>
            <ul className="course-list" role="list">
              {courses.map((course) => (
                <li key={course.title}>
                  <div>
                    <strong>{course.title}</strong>
                    <span>{course.institution}</span>
                  </div>
                  <span className="course-year">{course.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
