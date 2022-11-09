import {createRouter, createWebHistory} from 'vue-router'
import Accueil from '../views/Accueil.vue'
import ArticlesListe from "../views/ArticlesListe.vue";
import ArticleDetails from "../views/ArticleDetails.vue";

const routes = [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/liste-articles', name: 'ArticlesListe', component: ArticlesListe},
    {path: '/article/:articleId', name: 'ArticleDetails', component: ArticleDetails},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router