<template>
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
  .titrePrincipal, .titreLien {
    text-align: center;
    color: $rouge-sombre;
    font-weight: 600;
    margin: rem(35) 0 rem(45) 0;
  }

  .titrePrincipal {
    font-size: rem(17);
  }

  .titreLien {
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


  @media all and (min-width: $frontiere) {
    .titrePrincipal {
      font-size: rem(28);
      margin: rem(35) 0 rem(45) 0;
    }

    .titreLien {
      font-size: rem(25);
    }
  }
</style>
