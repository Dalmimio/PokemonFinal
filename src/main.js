import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons solid */
import { faHouseChimney, faUser,faNewspaper, faBookmark, faBars,faBriefcase, faIdBadge, faPenRuler, faAt, faKey,faGear,faMagnifyingGlass,faXmark,faHeart, faComment, faCakeCandles, faTrashCan, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'


/* import specific icons regular */
import {faCircleUser,faMessage,faFaceSmile,faPenToSquare} from '@fortawesome/free-regular-svg-icons'


/* import specific icons brands */
import {faInstagram, faFacebook, faWhatsapp, faLinkedinIn, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons'

// fa-arrow-right-from-bracket

/* add icons to the library */
library.add(faHouseChimney, faUser,faNewspaper, faBookmark, faBars,faFaceSmile, faBriefcase, faIdBadge, faPenRuler,faCircleUser, faAt,faMessage, faKey,faGear,faMagnifyingGlass,faPenToSquare,faXmark,faHeart,faComment, faInstagram, faFacebook, faWhatsapp, faCakeCandles, faLinkedinIn, faGithub, faTrashCan, faGoogle, faArrowRightFromBracket)




// <font-awesome-icon icon="fa-solid fa-trash-can" />

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
