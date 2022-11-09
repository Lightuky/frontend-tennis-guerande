import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index"

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faSquareTwitter, faSquareFacebook, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'

library.add(faSquareTwitter, faSquareFacebook, faSquareInstagram)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
