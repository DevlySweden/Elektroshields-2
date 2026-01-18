import privateImage from '../assets/areas/private.jpg'
import commercialImage from '../assets/areas/commercial.jpg'
import archipelagoImage from '../assets/areas/archipelago.jpg'

const projects = {
  sectionTitle: 'Verksamhetsområden',
  sectionText:
    'Vi arbetar med elinstallationer i olika miljöer, anpassade efter varje kunds behov och förutsättningar.',
  layout: 'editorial-stack',
  flow: 'vertical',
  widthPattern: ['wide', 'narrow', 'wide'],
  maxItems: 3,
  imageDominance: 'high',
  cardStyle: 'flat',
  rhythm: 'asymmetric',
  items: [
    {
      title: 'Privatbostäder',
      meta: 'Elinstallation • Belysning',
      desc: 'Elinstallationer och belysningslösningar för villor, lägenheter och fritidshus.',
      imagePath: privateImage,
    },
    {
      title: 'Företag & kommersiella lokaler',
      meta: 'Projektering • Styrsystem',
      desc: 'Tekniska el- och styrsystem anpassade för kontor, butiker och verksamhetslokaler.',
      imagePath: commercialImage,
    },
    {
      title: 'Skärgård & specialmiljöer',
      meta: 'Installation • Driftssäkerhet',
      desc: 'Elinstallationer i krävande miljöer med fokus på driftsäkerhet och hållbarhet.',
      imagePath: archipelagoImage,
    },
  ],
}

export default projects
