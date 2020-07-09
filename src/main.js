// Components
import TextBanner from './components/blocks/text-banner/TextBanner'
import SimpleFooter from './components/footers/simple-footer/SimpleFooter'
import SimpleHeader from './components/headers/simple-header/SimpleHeader'
import SimpleHero from './components/heroes/simple-hero/SimpleHero'
import SimpleNavItem from './components/navigation/simple-navigation/SimpleNavItem'
import AnchorLink from './components/utils/anchor-link/AnchorLink'

// Structures
import NoColumn from './structures/columns/no-column/NoColumn'
import SingleColumn from './structures/columns/single-column/SingleColumn'
import SlimColumn from './structures/columns/slim-column/SlimColumn'
import TripletColumns from './structures/columns/triplet-columns/TripletColumn'
import TwinColumns from './structures/columns/twin-columns/TwinColumns'
import BasePage from './structures/pages/base-page/BasePage'

const components = {
  TextBanner,
  SimpleFooter,
  SimpleHeader,
  SimpleHero,
  SimpleNavItem,
  AnchorLink,
  NoColumn,
  SingleColumn,
  SlimColumn,
  TripletColumns,
  TwinColumns,
  BasePage
}

export default {
  install(Vue, options) {
    for (const name in components) {
      Vue.component(name, components[name])
    }
  }
}
