import site from '../content/site'

export default function Services() {
  const { services, motion } = site
  const { services: servicesLayout } = site.layoutUsage

  return (
    <section className="section services-section" id="services">
      <div
        className={`container container--${servicesLayout.width} gutter--${servicesLayout.gutter}`}
      >
        <div className="section-heading">
          <h2>{services.sectionTitle}</h2>
          <p className="section-intro">{services.sectionText}</p>
        </div>
        <div className="services-list motion-group">
          {services.items.map((item, index) => (
            <div
              key={item.title}
              className="service-item motion-item"
              style={{
                '--motion-delay': `${index * motion.staggerMs}ms`,
                '--motion-duration': `${motion.durationMs}ms`,
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
