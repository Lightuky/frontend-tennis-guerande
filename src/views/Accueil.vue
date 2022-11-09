<script>
import articlesData from "../api/article-accueil.json";

export default {
  name: "ArticlesListe",

  data() {
    return {
      articles: articlesData,
      descEstOuverte: [false, false, false]
    };
  },
  methods: {
    toggleDescription(index) {
      this.descEstOuverte[index] = !this.descEstOuverte[index];
    }
  }
}
</script>

<template>
  <div class="titrePrincipal">DERNIÈRES ACTUALITÉS</div>
  <div class="conteneurArticles">
    <div class="blocArticle" v-for="(article, index) in articles" :key="article.id">
      <div class="articleIllustration" :class="{ illustAllongee: descEstOuverte[index] }" :style="{backgroundImage:'url(' + article.image + ')'}"></div>
      <div class="articleTitre" @click="toggleDescription(index)" :class="{ invisible: descEstOuverte[index] }" :title="article.titre">{{ article.titre }}</div>
      <div class="articleDescription" @click="toggleDescription(index)" :class="{ invisible: !descEstOuverte[index] }">
        <div class="articleDescTitre">{{ article.titre }}</div>
        <div class="articleDescContenu">{{ article.contenu }}</div>
        <div class="articleDescLien">
          <router-link :to="{ name: 'ArticleDetails', params: {articleId: article.id}}">En savoir plus</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="titreLien">
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
  }

  .conteneurArticles {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .blocArticle {
    width: 100%;
  }

  .articleIllustration {
    height: rem(260);
    margin: rem(30) rem(30) 0;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 7px 7px 0 0;
    -webkit-box-shadow: 0 1px 5px 0 rgba(229,39,34,0.5);
    box-shadow: 0 1px 5px 0 rgba(229,39,34,0.5);

    &.illustAllongee {
      height: rem(304.8);
      border-radius: 7px;
    }
  }

  .articleTitre {
    margin: 0 rem(30);
    padding: rem(10) 0;
    font-weight: 600;
    font-size: rem(18);
    color: $gris-tres-sombre;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    border-radius: 0 0 7px 7px;
    -webkit-box-shadow: 0 1px 5px 0 $gris-tres-sombre;
    box-shadow: 0 1px 5px 0 $gris-tres-sombre;

    &.invisible {
      position: absolute;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .articleDescription {
    position: relative;
    bottom: 30%;
    height: 30%;
    margin: 0 rem(30);
    border-radius: 0 0 7px 7px;
    background-color: rgba(255,255,255,0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover {
      cursor: pointer;
    }
  }

  .invisible {
    visibility: hidden;
  }

  .articleDescTitre {
    font-weight: 600;
    margin: 0 rem(15);
  }

  .articleDescContenu {
    margin: 0 rem(15);
    @include line-clamp(3, 2.25em);
  }

  .articleDescLien {
    display: flex;
    justify-content: end;
    padding-right: rem(15);
    text-decoration: underline;

    &:hover {
      color: #756e6e;
    }
  }


  @media all and (min-width: $frontiere) {
    .titrePrincipal {
      font-size: rem(28);
      margin: rem(35) 0 rem(45) 0;
    }

    .titreLien {
      font-size: rem(25);
    }

    .blocArticle {
      width: 33%;
    }
  }
</style>