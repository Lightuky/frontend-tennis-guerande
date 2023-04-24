<template>
  <img class="photo-club" src="https://www.longuenee-en-anjou.fr/medias/2018/05/la-meignanne-terrain-tennis-c-nathalie-pommier.jpg" alt="hero">
  <ul class="infos">
    <li>
      <span class="valeur">300</span>
      <span class="nom">Adhérents</span>
    </li>
    <li>
      <span class="valeur">5</span>
      <span class="nom">Moniteurs</span>
    </li>
    <li>
      <span class="valeur">4</span>
      <span class="nom">Terrains</span>
    </li>
  </ul>
  <div class="titrePrincipal">DERNIÈRES ACTUALITÉS</div>
  <div class="conteneurArticles">
    <ArticleAccueil v-for="article in articles" :key="article.id" :article="article" @update-desc="updateTitreLien"></ArticleAccueil>
  </div>
  <div class="titreLien" :class="{ descOpen: articleDescOpen }">
    <router-link :to="{ name: 'ArticlesListe'}">Voir toutes les actualités</router-link>
  </div>
</template>

<script>
import ArticleAccueil from "../blocks/ArticleAccueil.vue";
import axios from 'axios'

export default {
  name: "ArticlesListe",
  components: {ArticleAccueil},
  data() {
    return {
      articles: null,
      articleDescOpen: 0
    };
  },
  methods: {
    getArticlesLimit: async function () {
      this.articles = await axios.get('http://localhost:8081/api/articles/limit' )
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    updateTitreLien(desc) {
      this.articleDescOpen += desc;
    }
  },
  created() {
    this.getArticlesLimit()
  }
}
</script>

<style lang="scss" scoped>
  .titreLien {
    text-align: center;
    color: $rouge-sombre;
    font-weight: 600;
    margin: rem(35) 0 rem(45) 0;
    font-size: rem(14);
    text-decoration: underline;

    &.descOpen {
      margin-top: -71.5px;
    }
  }

  .conteneurArticles {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .photo-club {
    object-fit: cover;
    width: 100%;
    height: rem(250);
  }

  .infos {
    padding: rem(10) 0 rem(10);
    width: 100%;
    background-color: $rouge-sombre;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 24px;
    font-weight: bold;

    li {
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media all and (min-width: $frontiere) {
    .titreLien {
      font-size: rem(25);
    }
  }
</style>
