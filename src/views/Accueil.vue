<script>
import articlesData from "../api/article-accueil.json";
import ArticleAccueil from "../blocks/ArticleAccueil.vue";

export default {
  name: "ArticlesListe",
  components: {ArticleAccueil},
  data() {
    return {
      articles: articlesData,
      articleDescOpen: 0
    };
  },
  methods: {
    updateTitreLien(desc) {
      this.articleDescOpen += desc;
    }
  }
}
</script>

<template>
  <div class="titrePrincipal">DERNIÈRES ACTUALITÉS</div>
  <div class="conteneurArticles">
    <ArticleAccueil v-for="article in articles" :key="article.id" :article="article" @update-desc="updateTitreLien"></ArticleAccueil>
  </div>
  <div class="titreLien" :class="{ descOpen: articleDescOpen }">
    <router-link :to="{ name: 'ArticlesListe'}">Voir toutes les actualités</router-link>
  </div>
</template>

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
