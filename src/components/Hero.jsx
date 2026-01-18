import site from '../content/site'

export default function Hero() {
  const { hero } = site
  const { hero: heroLayout } = site.layoutUsage

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${hero.imagePath})` }}
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div
        className={`container container--${heroLayout.width} gutter--${heroLayout.gutter}`}
      >
        <div className="hero-content">
          <p className="hero-badge">{hero.badge}</p>
          <h1>{hero.headline}</h1>
          <p className="hero-subtext">{hero.subtext}</p>
          {hero.secondaryAction ? (
            <a href={`#${hero.secondaryAction.target}`} className="hero-link">
              {hero.secondaryAction.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
