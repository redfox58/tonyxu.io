import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons/'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  library.add(faDollarSign, faFacebookF, faLinkedinIn)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}