import {createRouter, createWebHistory} from 'vue-router'
import Accueil from '../views/Accueil.vue'
import ArticlesListe from "../views/ArticlesListe.vue";
import ArticleDetails from "../views/ArticleDetails.vue";
import Dirigeants from "../views/Dirigeants.vue";
import Partenaires from "../views/Partenaires.vue";
import Photos from "../views/Photos.vue";
import Secretariat from "../views/Secretariat.vue";
import Contact from "../views/Contact.vue";
import MentionsLegales from "../views/MentionsLegales.vue";
import PolitiqueConfidentialite from "../views/PolitiqueConfidentialite.vue";

const routes = [
    // Pages principales
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/nos-actualités', name: 'ArticlesListe', component: ArticlesListe},
    {path: '/nos-actualités/article/:articleId', name: 'ArticleDetails', component: ArticleDetails},
    // Pages secondaires
    {path: '/dirigeants', name: 'Dirigeants', component: Dirigeants},
    {path: '/nos-partenaires', name: 'Partenaires', component: Partenaires},
    {path: '/nos-photos', name: 'Photos', component: Photos},
    {path: '/le-secretariat', name: 'Secretariat', component: Secretariat},
    {path: '/nous-contacter', name: 'Contact', component: Contact},
    {path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegales},
    {path: '/politique-de-confidentialite', name: 'PolitiqueConfidentialite', component: PolitiqueConfidentialite},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
