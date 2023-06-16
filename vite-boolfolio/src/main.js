import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import { router } from './router.js'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinSquintTears } from "@fortawesome/free-solid-svg-icons";










library.add(faFacebookF);
library.add(faTwitter);
library.add(faInstagram);
library.add(faGithub);
library.add(faLinkedinIn);
library.add(faUser);
library.add(faSprayCan);
library.add(faCode);
library.add(faChalkboard);
library.add(faFaceGrinSquintTears);






import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
