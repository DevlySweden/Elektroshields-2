import site from '../content/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const text = site.footer.textTemplate
    .replace('{YEAR}', year)
    .replace('{COMPANY}', site.company.name)
  const { footer } = site.layoutUsage

  return (
    <footer className="site-footer">
      <div className={`container container--${footer.width} gutter--${footer.gutter}`}>
        <p>{text}</p>
      </div>
    </footer>
  )
}
