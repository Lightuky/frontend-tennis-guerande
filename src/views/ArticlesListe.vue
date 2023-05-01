<template>
  <div class="titrePrincipal">Nos Actualités</div>
  <div class="titreSecondaire">Rechercher des articles spécifiques</div>

  <div class="input-group w-50 mb-5 mx-auto">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="bi bi-search"></i></span>
    </div>
    <input type="text" class="form-control" placeholder="Ex: Tournoi d'été 2023" v-model="searchText"/>
    <div class="input-group-append" v-if="searchText">
      <button class="clearBtn btn btn-outline-secondary" type="button" @click="clearSearch"><i class="bi bi-x-lg"></i></button>
    </div>
  </div>

  <div class="d-flex justify-content-center w-75 mx-auto mb-4">
    <select class="mx-auto form-select form-select-sm pe-5 text-capitalize" v-model="selectedAge" @change="updateArticles">
      <option disabled value="">Ancienneté</option>
      <option value="">Tous</option>
      <option value="week">Dernière semaine</option>
      <option value="month">Dernier mois</option>
      <option value="year">Moins d'un an</option>
    </select>
    <select class="mx-auto form-select form-select-sm pe-5 text-capitalize" v-model="selectedCategory" @change="updateArticles">
      <option disabled value="">Catégorie</option>
      <option value="">Tous</option>
      <option class="text-capitalize" v-for="category in categories" :value="category">{{ category }}</option>
    </select>
    <select class="mx-auto form-select form-select-sm pe-5 text-capitalize" v-model="selectedSeasonal" @change="updateArticles">
      <option disabled value="">Saisonnier</option>
      <option value="">Tous</option>
      <option value="true">Oui</option>
      <option value="false">Non</option>
    </select>
  </div>

  <div class="mx-5 mt-3">
    <div class="containerTitle ms-0 mb-4">Liste des articles</div>
    <div class="articleContainer py-2 mb-4">
      <router-link class="articleBlock nav-link my-4" v-for="article in articles" :key="article.id"
                   :to="{ name: 'ArticleDetails', params: {articleTitle: article.titre}}">
        <div class="row justify-content-center">
          <div class="imgContainer col-2 px-0"
               :style="'background:url(' + (article.image.length !== 0 ? 'data:image/jpeg;base64,' + article.image[0].base_64 : '../src/assets/article-placeholder.jpg') + ')'">
          </div>
          <div class="articleInfosBlock col-9 px-0">
            <div class="d-flex justify-content-between align-items-center py-3 ps-4 pe-3">
              <div class="articleTitle">{{ article.titre }}</div>
              <div class="catBadge px-4 text-white text-capitalize" :style="{'background-color': getColor(article.categorie)}">
                {{ article.categorie }}
              </div>
            </div>
            <div class="articleDesc px-4 mb-4">{{ article.contenu }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .titreSecondaire {
    color: #AD878B;
  }

  .containerTitle {
    font-family: Montserrat,serif;
    color: #BF0A1D;
    font-size: rem(20);
  }

  .input-group-text {
    background-color: transparent;
    border-radius: 8px 0 0 8px;
    color: #707070;
  }

  .clearBtn {
    border-radius: 0 8px 8px 0;
    border-color: #ced4da;
    &:hover, &:focus-visible, &:active {
      background-color: transparent !important;
      border-color: initial !important;
      color: red !important;
      box-shadow: none !important;
    }
  }

  .form-control {
    color: #971926;
    &:focus {border-color: #ced4da}
    &::placeholder {color: #939393}
  }

  .form-select {
    width: max-content;
    cursor: pointer;
    &:focus {border-color: #ae292940}
  }

  .imgContainer {
    background-size: cover !important;
    background-position: center !important;
  }

  .articleInfosBlock {
    border: 1px solid #b9b9b9;
    border-left: 0;
    border-radius: 0 10px 10px 0;
    &:hover {border-color: #ffbfac}
  }

  .articleTitle {
    font-family: "Segoe UI Semibold",serif;
    color: #707070;
    font-size: rem(17);
    &::first-letter {text-transform: capitalize}
  }

  .articleDesc {
    @include line-clamp(2, 2.25em);
    font-family: "Segoe UI",serif;
    font-size: rem(14);
    color: #979797;
  }

  .catBadge {
    border-radius: 20px;
    font-family: 'Segoe UI Semibold',serif;
    font-size: rem(14);
    line-height: 26px;
  }

  .articleContainer {
    background: conic-gradient(from 90deg at top 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 180deg at top 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 0deg at bottom 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 100% / 35px 35px border-box no-repeat,
    conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 100% / 35px 35px border-box no-repeat;
  }

</style>

<script>
import axios from "axios";

export default {
  name: "ArticlesListe",
  data() {
    return {
      categoriesColors: [
        {name: 'tournois', color: '#BF0A1D'},
        {name: 'annonces', color: '#F0951D'},
        {name: 'résultats', color: '#d10f16'},
        {name: 'événements', color: '#F0621D'},
      ],
      categories: [],
      articles: null,
      searchText: '',
      selectedCategory: '',
      selectedAge: '',
      selectedSeasonal: '',
    };
  },
  watch: {
    searchText(typedText) {
      if (typedText.length >= 2) {
        this.updateArticles();
      }
    }
  },
  created() {
    this.getCategories();
    this.getArticles();
  },
  methods: {
    getCategories: async function () {
      this.categories = await axios.get('http://localhost:8081/api/articles/categories')
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    getArticles: async function () {
      let apiUrl = 'http://localhost:8081/api/articles?limit=10';
      this.selectedCategory ? apiUrl += `&category=${this.selectedCategory}` : null;
      this.selectedAge ? apiUrl += `&age=${this.selectedAge}` : null;
      this.selectedSeasonal ? apiUrl += `&seasonal=${this.selectedSeasonal}` : null;
      this.searchText ? apiUrl += `&title=${this.searchText}` : null;
      this.articles = await axios.get(apiUrl)
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    updateArticles() {
      this.getArticles();
    },
    clearSearch() {
      this.searchText = '';
      this.updateArticles();
    },
    getColor(category) {
      const match = this.categoriesColors.find(j => j.name === category)
      return match ? match.color : '#767373'
    }
  },
}
</script>

