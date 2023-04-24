<template>
  <header>
    <nav class="navbar navbar-expand-lg w-100 navbar-light bg-light">
      <div class="container-fluid">
        <router-link :to="{name: 'Accueil'}" class="navbar-brand">
          <img class="logo" src="../assets/logo-tennis-club-guerande.png" alt="Logo" title="Logo du Tennis Club de Guérande">
        </router-link>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-lg-5">
            <router-link :to="{name: 'LeClub'}" class="nav-item nav-link mx-lg-3">Le Club</router-link>
            <router-link :to="{name: 'ArticlesListe'}" class="nav-item nav-link mx-lg-3">Actualités</router-link>
            <router-link :to="{name: 'Competition'}" class="nav-item nav-link mx-lg-3">Compétition</router-link>
            <router-link :to="{name: 'DevenirLicencie'}" class="nav-item nav-link mx-lg-3">Devenir licencié</router-link>
            <router-link :to="{name: 'Reservation'}" class="nav-item nav-link mx-lg-3">Réservation</router-link>
          </div>
          <div class="navbar-nav ms-auto">
            <form class="d-flex">
              <div class="input-group input-group-sm">
                <input type="text" class="form-control" placeholder="Rechercher">
                <button type="button" class="btn btn-secondary"><i class="bi bi-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComposant',
  data() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
  .logo {width: 45px}

  #navbarCollapse {
    .nav-link {
      color: #BF0A1D;
      font-family: Montserrat, serif;
      font-weight: bold;
      font-size: rem(15);

      &:hover {color: #746466}
    }
  }

  @media all and (min-width: $frontiere) {
  }
</style>
