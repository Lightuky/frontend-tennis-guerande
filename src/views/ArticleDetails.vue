<template>
  <template v-if="isLoading">
    <div class="text-center">
      <i class="spinner bi bi-arrow-clockwise"></i>
      <div>Données en cours de récupération</div>
    </div>
  </template>
  <template v-else>
    <div class="d-flex justify-content-center flex-wrap my-4">
      <div class="infosBadge cat text-white px-3 py-1 me-3 text-capitalize">{{ article.categorie }}</div>
      <div class="infosBadge season text-white px-3 py-1 ms-3 text-capitalize">{{ article.saisonnier ? 'Saisonnier' : 'Non-Saisonnier' }}</div>
    </div>
    <div class="jumbotron col-11 mx-auto mt-3 mb-4"
         :style="'background:url(' + (article.image.length !== 0 ? 'data:image/jpeg;base64,' + article.image[0].base_64 : '../../src/assets/article-placeholder.jpg') + ')'">
      <div class="container d-flex p-0 mx-auto h-100">
        <div class="jumboTextBox text-center mx-auto my-auto px-5 py-3">
          <div class="articleTitle">{{ article.titre }}</div>
          <div class="articleInfos age my-2">Ajouté le <span>{{ formatDate(article.createdAt) }}</span></div>
          <div class="articleInfos author">Par <span>{{ article.personne.length !== 0 ? article.personne[0].nom + ' ' + article.personne[0].prenom : 'Inconnu' }}</span></div>
        </div>
      </div>
    </div>
    <div class="containerTitle text-center mb-4 mt-2">Contenu de l'article</div>
    <div class="articleContent col-11 mx-auto p-5">{{ article.contenu }}</div>
  </template>
  <router-link class="backBtn btn btn-sm mb-5 mt-2 d-flex mx-auto text-white" :to="{name: 'ArticlesListe'}">Revenir aux articles</router-link>
</template>

<style lang="scss" scoped>
  .infosBadge {
    border-radius: 8px;
    font-family: "Segoe UI Semibold",serif;
    font-size: rem(16);
    &.cat {background-color: #E78264}
    &.season {background-color: #FFCE6B}
  }

  .jumbotron {
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    height: 250px;
    border-radius: 8px;
    opacity: 0.7;
    box-shadow: 0 2px 4px #0000003F;
  }

  .jumboTextBox {
    height: fit-content;
    border-radius: 12px;
    background-color: #ffffffc2;
    box-shadow: 0 2px 4px #0000003F;
  }

  .containerTitle {
    font-family: Montserrat,serif;
    color: #BF0A1D;
    font-size: rem(18);
  }

  .articleTitle {
    font-family: Montserrat,serif;
    font-size: rem(30);
    color: #BF0A1D;
  }

  .articleInfos {
    font-family: "Segoe UI",serif;
    font-size: rem(24);
    color: #544e4c;
    &.age span {
      font-family: "Segoe UI Semibold",serif;
      color: #F97C1B;
    }
    &.author span {
      font-family: "Segoe UI Semibold",serif;
      color: #971926;
    }
  }

  .articleContent {
    font-family: Roboto,serif;
    font-size: rem(18);
    color: #706E6E;
    line-height: rem(30);
    text-align: justify;
    background: conic-gradient(from 90deg at top 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 180deg at top 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 0deg at bottom 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 100% / 35px 35px border-box no-repeat,
    conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 100% / 35px 35px border-box no-repeat;
  }

  .backBtn {
    background-color: #da5b3d;
    width: fit-content;
    &:hover, &:focus-visible, &:active {background-color: #e52722 !important}
  }

</style>

<script>
import axios from "axios";
import dayjs from 'dayjs';

export default {
  name: "ArticleDetails",
  data() {
    return {
      isLoading: true,
      article: [],
      articleTitle: '',
    }
  },
  created() {
    this.articleTitle = this.$route.params.articleTitle;
    console.log(this.articleTitle)
    this.getArticle();
  },
  methods: {
    getArticle: async function () {
      await axios.get('http://localhost:8081/api/articles/details/' + this.articleTitle)
          .then(response => {
            console.log(response.data)
            this.article = response.data[0]
            this.isLoading = false;
          })
    },
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("DD/MM/YYYY");
    }
  }
}
</script>
