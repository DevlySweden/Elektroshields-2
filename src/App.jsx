import { useEffect } from 'react'
import site from './content/site'
import useReducedMotion from './hooks/useReducedMotion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = site.company.name
  }, [])

  return (
    <div
      id="top"
      className={`app ${reduceMotion ? 'reduce-motion' : 'motion-enabled'}`}
      style={{
        '--accent-color': site.branding.accentColor,
        '--header-height': `${site.layout.headerHeightPx}px`,
        '--radius': `${site.layout.borderRadiusPx}px`,
        '--container-max': `${site.layout.containerMaxWidthPx}px`,
        '--wide-container-max': `${site.layout.wideContainerMaxWidthPx}px`,
        '--narrow-container-max': `${site.layout.narrowContainerMaxWidthPx}px`,
        '--container-fluid': `${site.layout.containerFluidVw}vw`,
        '--wide-container-fluid': `${site.layout.wideContainerFluidVw}vw`,
        '--narrow-container-fluid': `${site.layout.narrowContainerFluidVw}vw`,
        '--section-padding-mobile': `${site.layout.sectionPaddingYMobilePx}px`,
        '--section-padding-desktop': `${site.layout.sectionPaddingYDesktopPx}px`,
        '--gutter-tight': site.layout.gutterTight,
        '--gutter-standard': site.layout.gutterStandard,
        '--gutter-wide': site.layout.gutterWide,
      }}
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
