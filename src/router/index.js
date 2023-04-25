import {createRouter, createWebHistory} from 'vue-router'
import Accueil from '../views/Accueil.vue'
import ArticlesListe from "../views/ArticlesListe.vue";
import ArticleDetails from "../views/ArticleDetails.vue";
import Dirigeants from "../views/Dirigeants.vue";
import Partenaires from "../views/Partners.vue";
import Photos from "../views/Photos.vue";
import Secretariat from "../views/Secretariat.vue";
import Contact from "../views/Contact.vue";
import MentionsLegales from "../views/MentionsLegales.vue";
import PolitiqueConfidentialite from "../views/PolitiqueConfidentialite.vue";
import LeClub from "../views/LeClub.vue";

const routes = [
    // Home
    {path: '/', name: 'Accueil', component: Accueil},
    // Pages Club
    {path: '/le-club', name: 'LeClub', component: LeClub},
    {path: '/le-club/nos-actualités', name: 'ArticlesListe', component: ArticlesListe},
    {path: '/le-club/nos-actualités/article/:articleId', name: 'ArticleDetails', component: ArticleDetails},
    {path: '/le-club/dirigeants', name: 'Dirigeants', component: Dirigeants},
    {path: '/le-club/nos-partenaires', name: 'Partenaires', component: Partenaires},
    {path: '/le-club/nos-photos', name: 'Photos', component: Photos},
    {path: '/le-club/le-secretariat', name: 'Secretariat', component: Secretariat},
    // Pages secondaires
    {path: '/nous-contacter', name: 'Contact', component: Contact},
    {path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegales},
    {path: '/politique-de-confidentialite', name: 'PolitiqueConfidentialite', component: PolitiqueConfidentialite},

    // Page Header
    {path: '/compétition', name: 'Competition'},
    {path: '/devenir-licencié', name: 'DevenirLicencie'},
    {path: '/réservation', name: 'Reservation'},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
