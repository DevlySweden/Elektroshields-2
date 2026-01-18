import site from '../content/site'
import useScrollPosition from '../hooks/useScrollPosition'

export default function Header() {
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 40
  const { header } = site.layoutUsage

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div
        className={`container container--${header.width} gutter--${header.gutter}`}
      >
        <div className="header-inner">
          <a href="#top" className="brand">
            <img src={site.branding.logoPath} alt={site.company.name} />
          </a>
          <nav className="header-nav">
            <a href="#contact" className="header-cta">
              {site.hero.secondaryAction.label}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
