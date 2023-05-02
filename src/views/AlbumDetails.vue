<template>
  <div class="linksBlock text-center mb-5">
    <div class="titrePrincipal text-center mb-4">{{ album.nom }}</div>
    <router-link class="backBtn btn btn-sm text-white" :to="{name: 'AlbumsListe'}">Revenir aux albums</router-link>
  </div>
  <div class="albumInfos d-flex flex-wrap text-center justify-content-center">
    <div class="mx-5">
      <div class="catTitle mb-3">Catégorie</div>
      <div class="catInfo text-capitalize"><span>{{ album.categorie }}</span></div>
    </div>
    <div class="mx-5">
      <div class="catTitle mb-3">Année</div>
      <div class="catInfo">Ajouté en <span>{{ album.annee }}</span></div>
    </div>
    <div class="mx-5">
      <div class="catTitle mb-3">Contenu</div>
      <div class="catInfo"><span>{{ album.imagesCount }}</span> images</div>
    </div>
  </div>
  <div class="mx-5">
    <div class="containerTitle ms-3 my-5">Liste des photos de l'album</div>
    <div class="photosContainer d-flex flex-wrap p-3 mb-5">
      <div class="photoBlock text-center my-4 py-2" v-for="(photo, index) in album.images" :key="photo.id" @click="openModal(index)">
        <img class="photoIcon" src="../assets/pictures.png" :alt="photo.nom" :title="photo.nom">
        <div class="photoTitle w-75 mx-auto">{{ photo.nom }}</div>
      </div>
    </div>
  </div>
  <div class="modal" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <img class="w-100" v-if="currentIndex !== null" :src="'data:image/jpeg;base64,' + album.images[currentIndex].base_64" alt="Modal Image">
          <div class="btn btn-sm btn-danger mt-3" style="width: fit-content" @click="$refs.modal.classList.remove('show')">
            <i class="bi bi-x-lg"></i> Fermer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .containerTitle {
    font-family: Montserrat,serif;
    color: #BF0A1D;
  }

  .catTitle {
    font-family: "Montserrat",serif;
    font-size: rem(24);
    color: #ec6f26;
  }

  .catInfo {
    font-family: "Segoe UI Semibold",serif;
    font-size: rem(18);
    color: #848181;
    span {
      font-weight: bolder;
      color: #ef4848;
    }
  }

  .photoIcon {
    width: 100px;
  }

  .photoTitle {
    font-family: "Segoe UI Semibold",serif;
    color: #504B4B;
  }

  .photoBlock {
    width: calc(100%/6);
    cursor: pointer;
  }

  .photosContainer {
    background: conic-gradient(from 90deg at top 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 180deg at top 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 0 / 35px 35px border-box no-repeat,
    conic-gradient(from 0deg at bottom 3px left 3px, #0000 90deg, #FFBCBCFF 0) 0 100% / 35px 35px border-box no-repeat,
    conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #FFBCBCFF 0) 100% 100% / 35px 35px border-box no-repeat;
  }

  .backBtn {
    background-color: #da5b3d;
    &:hover, &:focus-visible, &:active {background-color: #e52722 !important}
  }

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    outline: 0;
  }

  .modal-content {
    background-color: #00000057;
  }

  .modal.show {
    display: block;
    background-color: #090909b8;
  }

  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
  }

  .modal-open {
    overflow: hidden;
  }

  .modal-body {
    text-align: center;
  }
</style>

<script>
import axios from "axios";

export default {
  name: "AlbumDetails",
  data() {
    return {
      album: [],
      albumName: '',
      currentIndex: null
    }
  },
  created() {
    this.albumName = this.$route.params.albumName;
    console.log(this.albumName)
    this.getAlbum();
  },
  methods: {
    getAlbum: async function () {
      this.album = await axios.get('http://localhost:8081/api/albums/details/' + this.albumName)
          .then(function (response) {
            console.log(response.data)
            return response.data[0]
          })
    },
    openModal(index) {
      this.currentIndex = index;
      this.$refs.modal.classList.add("show");
      document.body.classList.add("modal-open");
    }
  }
}
</script>
