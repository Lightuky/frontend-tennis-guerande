<template>
  <div class="titrePrincipal">LE SECRÉTARIAT</div>
  <div class="titreSecondaire">LE BUREAU</div>
  <div class="d-flex flex-wrap justify-content-center mt-5 mb-1">
    <div class="text-center mx-5" v-for="club_director in directors[0]" :key="club_director.id">
      <img class="profilePicture" :src="'data:image/jpeg;base64,' + club_director.picture[0].base_64"
           :alt="club_director.profile[0].nom + ' ' + club_director.profile[0].prenom">
      <div class="infosBlock" :style="{'border-color': getColor(club_director.poste)}">
        <div class="nameText mt-1 mb-2">{{ club_director.profile[0].nom + ' ' + club_director.profile[0].prenom }}</div>
        <div class="jobBadge mt-0 mb-2 py-1 px-3 text-capitalize text-white mx-auto" :style="{'background-color': getColor(club_director.poste)}">
          {{ club_director.poste }}
        </div>
      </div>
    </div>
  </div>
  <div class="titreSecondaire pt-3">LE CONSEIL D'ADMINISTRATION</div>
  <div class="d-flex flex-wrap justify-content-center my-5">
    <div class="text-center mx-5" v-for="board_director in directors[1]" :key="board_director.id">
      <img class="profilePicture" :src="'data:image/jpeg;base64,' + board_director.picture[0].base_64"
           :alt="board_director.profile[0].nom + ' ' + board_director.profile[0].prenom">
      <div class="infosBlock">
        <div class="nameText mt-1 mb-2">{{ board_director.profile[0].nom + ' ' + board_director.profile[0].prenom }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .titreSecondaire {
    color: #DC994D;
  }

  .profilePicture {
    width: rem(185);
  }

  .infosBlock {
    border: 2px solid #F07C88;
    border-radius: 0 0 15px 15px;
    cursor: default;
  }

  .nameText {
    font-family: "Segoe UI Semibold",serif;
    color: #504B4B;
    font-size: rem(17);
  }

  .jobBadge {
    font-family: "Segoe UI Semibold",serif;
    font-size: rem(14);
    width: fit-content;
    border-radius: 15px;
  }
</style>

<script>
import axios from "axios";

export default {
  name: "Dirigeants",
  data() {
    return {
      directors: null,
      jobsColors: [
        {name: 'secrétaire', color: '#BF0A1D'},
        {name: 'président', color: '#F0951D'},
        {name: 'présidente', color: '#F0951D'},
        {name: 'comptable', color: '#F0621D'},
      ]
    };
  },
  methods: {
    getDirectors: async function () {
      this.directors = await axios.get('http://localhost:8081/api/employes/dirigeants')
          .then(function (response) {
            console.log(response.data)
            return response.data
          })
    },
    getColor(poste) {
      const match = this.jobsColors.find(j => j.name === poste)
      return match ? match.color : '#e6ae31'
    }
  },
  created() {
    this.getDirectors()
  }
}
</script>
