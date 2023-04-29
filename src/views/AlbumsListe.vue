<template>
  <div class="titrePrincipal">NOS ALBUMS</div>
  <div class="titreSecondaire mt-0 mb-4">Trier les albums</div>
  <div class="mb-5">
    <select class="mx-auto form-select pe-5 text-capitalize" v-model="selectedCategory" @change="updateAlbums">
      <option disabled value="">Sélectionner une categorie</option>
      <option value="">Tous</option>
      <option class="text-capitalize" v-for="category in categories" :value="category">{{ category }}</option>
    </select>
  </div>
  <div class="mx-5">
    <div class="containerTitle ms-3 mb-5">Liste des albums photos</div>
    <div class="albumsContainer d-flex flex-wrap p-3 mb-5">
      <router-link class="albumBlock text-center my-4 py-2" v-for="album in albums" :key="album.id" :to="{ name: 'AlbumDetails', params: {albumName: album.nom}}">
        <div class="iconContainer position-relative mx-auto">
          <img class="albumIcon" src="../assets/album-icon.png" :alt="album.nom" :title="album.nom">
          <span class="badge d-flex align-items-center text-white position-absolute top-0 end-0" :title="`Contient ${album.images} images`">
            <span style="font-size: larger">{{ album.images }}</span><i class="bi bi-image ms-1"></i>
          </span>
        </div>
        <div class="albumTitle w-75 mx-auto">{{ album.nom }}</div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .titreSecondaire {
    color: #AD878B;
  }

  .form-select {
    width: max-content;
    cursor: pointer;
    &:focus {border-color: #ae292940}
  }

  .containerTitle {
    font-family: Montserrat,serif;
    color: #BF0A1D;
  }

  .albumIcon {
    width: 100px;
  }

  .albumTitle {
    font-family: "Segoe UI Semibold",serif;
    color: #504B4B;
  }

  .albumBlock {
    width: calc(100%/6);
  }

  .iconContainer {
    width: fit-content;
    .badge {background-color: #ff492e}
  }

  .albumsContainer {
    background: conic-gradient(from 90deg at top 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 180deg at top 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 0deg at bottom 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 100% / 35px 35px border-box no-repeat,
    conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 100% / 35px 35px border-box no-repeat;
  }
</style>

<script>
import axios from "axios";

export default {
  name: "AlbumsListe",
  data() {
    return {
      categories: [],
      selectedCategory: '',
      albums: [],
    }
  },
  created() {
    this.getCategories();
    this.getAlbums();
  },
  methods: {
    getCategories: async function () {
      this.categories = await axios.get('http://localhost:8081/api/albums/categories')
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    getAlbums: async function () {
      let apiUrl = 'http://localhost:8081/api/albums';
      if (this.selectedCategory) {
        apiUrl += `?category=${this.selectedCategory}`;
      }
      this.albums = await axios.get(apiUrl)
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    updateAlbums() {
      this.getAlbums();
    },
  }
}
</script>
