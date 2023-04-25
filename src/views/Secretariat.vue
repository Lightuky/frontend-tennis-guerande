<template>
  <div class="titrePrincipal">LE SECRÉTARIAT</div>
  <div class="cardsContainer d-flex flex-wrap justify-content-center mt-5 mb-1">
    <div class="cardBlock text-center mx-5" v-for="secretary in secretaries" :key="secretary.id">
      <img class="profilePicture" :src="'data:image/jpeg;base64,/' + secretary.image[0].base_64" :alt="secretary.nom + ' ' + secretary.prenom">
      <div class="infosBlock">
        <div class="nameText mt-2 mb-1">{{ secretary.nom + ' ' + secretary.prenom }}</div>
        <div class="jobText mt-1 mb-2">En poste depuis <span>{{ formatDate(secretary.employe[0].dateEmbauche) }}</span></div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-around flex-wrap mb-5">
    <div class="coordsBlock w-50 text-center">
      <div class="titreSecondaire">Coordonnées</div>
      <div class="textBlock d-flex justify-content-between mx-5 my-2">
        <div class="w-50">Adresse Mail :</div><span class="w-50">example.mail@tcg.com</span>
      </div>
      <div class="textBlock d-flex justify-content-between mx-5 my-2">
        <div class="w-50">N° de Téléphone :</div><span class="w-50">0123456789</span>
      </div>
    </div>
    <div class="horairesBlock w-50 text-center">
      <div class="titreSecondaire">Horaires</div>
      <div class="textBlock d-flex justify-content-between mx-5 my-2">
        <div class="w-50">Du Lundi au Vendredi :</div><span class="w-50">8h - 19h30*</span>
      </div>
      <div class="textBlock d-flex justify-content-between mx-5 my-2">
        <div class="w-50">Le Week-End :</div><span class="w-50">8h - 20h45*</span>
      </div>
      <div class="subText mt-3">*  Sauf exceptions (type vacances scolaires), le planning sera mis à jour en conséquence.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .profilePicture {
    width: rem(210);
  }

  .infosBlock {
    border: 2px solid #F07C88;
    border-radius: 0 0 15px 15px;
  }

  .nameText {
    font-family: "Segoe UI Semibold",serif;
    color: #504B4B;
    font-size: rem(18);
  }

  .jobText {
    font-family: "Segoe UI Semibold",serif;
    color: #898585;
    font-size: rem(13);
    span {
      color: #971926;
      font-weight: 600;
    }
  }

  .textBlock {
    font-family: Montserrat,serif;
    font-size: rem(18);
    color: #AD878B;
    div {text-decoration: underline}
    span {color: #971926}
  }

  .subText {
    font-family: Montserrat,serif;
    font-size: rem(13);
    color: #B17B81;
  }

</style>

<script>
import axios from "axios";
import dayjs from 'dayjs';

export default {
  name: "Secretariat",
  data() {
    return {
      secretaries: null,
    };
  },
  methods: {
    getSecretaries: async function () {
      this.secretaries = await axios.get('http://localhost:8081/api/personnes/poste/secretaire' )
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('YYYY');
    }
  },
  created() {
    this.getSecretaries()
  }
}
</script>
