import projects from '../content/projects'
import site from '../content/site'

export default function Projects() {
  const { projects: projectsLayout } = site.layoutUsage
  const items = projects.items.slice(0, projects.maxItems)

  return (
    <section className="section projects-section" id="projects">
      <div
        className={`container container--${projectsLayout.width} gutter--${projectsLayout.gutter}`}
      >
        <div className="section-heading">
          <h2>{projects.sectionTitle}</h2>
          <p className="section-intro">{projects.sectionText}</p>
        </div>
        <div className="projects-stack">
          {items.map((item, index) => {
            const width =
              projects.widthPattern[index % projects.widthPattern.length]
            const isReverse = index % 2 === 1
            return (
              <article
                key={item.title}
                className={`project-item project-item--${width} ${
                  isReverse ? 'is-reverse' : ''
                }`}
              >
                <div className="project-image">
                  <img src={item.imagePath} alt={item.title} />
                </div>
                <div className="project-text">
                  <p className="project-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
