<template>
  <div class="titrePrincipal">NOS PARTENAIRES</div>

</template>

<style lang="scss" scoped>

</style>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "Partenaires",
  data() {
    return {
      partenaires: null,
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
