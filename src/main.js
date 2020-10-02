// Components
import TextBanner from './components/blocks/text-banner/TextBanner'
import Grid from './components/blocks/grid/Grid'
import SimpleFooter from './components/footers/simple-footer/SimpleFooter'
import SimpleHeader from './components/headers/simple-header/SimpleHeader'
import SimpleHero from './components/heroes/simple-hero/SimpleHero'
import AnchorLink from './components/utils/anchor-link/AnchorLink'
import SimpleTable from './components/tables/simple-table/SimpleTable'
import SimpleForm from './components/forms/simple-form/SimpleForm'

// Structures
import NoColumn from './structures/columns/no-column/NoColumn'
import SingleColumn from './structures/columns/single-column/SingleColumn'
import SlimColumn from './structures/columns/slim-column/SlimColumn'
import TripletColumns from './structures/columns/triplet-columns/TripletColumns'
import TwinColumns from './structures/columns/twin-columns/TwinColumns'
import BasePage from './structures/pages/base-page/BasePage'
import SimpleLayout from './structures/layouts/simple-layout/SimpleLayout'

const components = {
  TextBanner,
  SimpleFooter,
  SimpleHeader,
  SimpleHero,
  AnchorLink,
  Grid,
  SimpleTable,
  SimpleForm,
  NoColumn,
  SingleColumn,
  SlimColumn,
  TripletColumns,
  TwinColumns,
  BasePage,
  SimpleLayout,
}

function setDefaultTheme() {
  const theme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
  if (!theme) return
  const [body] = document.getElementsByTagName('body')
  if (!body) return
  body.setAttribute('theme', theme.trim())
}

export default {
  install(Vue, options) {
    for (const name in components) {
      Vue.component(name, components[name])
    }
    setDefaultTheme()
  }
}
