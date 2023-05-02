<template>
  <div class="titrePrincipal">NOS PARTENAIRES</div>
  <div class="d-flex flex-wrap justify-content-center my-3">
    <template v-if="isLoading">
      <div class="text-center">
        <i class="spinner bi bi-arrow-clockwise"></i>
        <div>Données en cours de récupération</div>
      </div>
    </template>
    <template v-else>
      <div class="text-center mx-5" v-for="partner in partners" :key="partner.id">
        <div class="logoContainer mx-auto">
          <img class="partnerLogo" :src="'data:image/jpeg;base64,' + partner.logo[0].base_64" :alt="partner.nom">
        </div>
        <div class="infosBlock">
          <div class="partnerName w-75 mx-auto mt-2 mb-1">{{ partner.nom }}</div>
          <div class="partnerDate mt-1 mb-2">Depuis {{ formatDate(partner.createdAt) }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .logoContainer {
    height: 250px;
    width: 225px;
  }

  .partnerLogo {
    width: 225px;
    height: 250px;
    object-fit: contain;
  }

  .partnerName {
    font-family: "Segoe UI Semibold",serif;
    font-size: rem(20);
    color: #504B4B;
  }

  .partnerDate {
    font-family: "Segoe UI Semibold",serif;
    font-size: rem(15);
    font-style: italic;
    color: #BF0A1D;
  }

</style>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "Partenaires",
  data() {
    return {
      isLoading: true,
      partners: null,
    };
  },
  methods: {
    getPartners: async function () {
      await axios.get('http://localhost:8081/api/partenaires')
          .then(response => {
            console.log(response.data)
            this.partners = response.data
            this.isLoading = false;
          })
    },
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('YYYY');
    }
  },
  created() {
    this.getPartners()
  }
}
</script>
