<script>
  export default {
    name: 'ComposantFooter',
  }
</script>
  
<template>
  <footer>
    <div class="conteneur">
      <div class="partenaires">
        <img src="../assets/leclerc.png" alt="" />
        <img src="../assets/logo-joueur-du-grenier.png" alt="" />
      </div>
      <div class="reseaux">
        <h4>Nos réseaux</h4>
        <nav>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </nav>
      </div>
    </div>
    <p class="organisation">@Tennis Club de Guérande - 2022</p>
  </footer> 
</template>
  
<style lang="scss">
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    color: $blanc;

    .conteneur {
      background-color: $gris-sombre;
    }

    .organisation {
      width: 100%;
      margin: 0;
      padding: 0 rem(10);
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: rem(16);
      background-color: $gris-tres-sombre;
    }
  }
</style>