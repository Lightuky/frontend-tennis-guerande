<script>
export default {
  name: "FooterComposant",
}
</script>

<template>
  <footer>
    <div class="infosClub">
      <div class="adresseClub">
        <div class="texteHighlight">Tennis Club Guérandais</div>
        <div>8 Rue de la Fauvette</div>
        <div>44350 Guérande</div>
      </div>
      <div>
        <div class="texteHighlight">Nous contacter</div>
        <div class="iconesSocial">
          <a href="https://google.fr">
            <font-awesome-icon icon="fa-brands fa-square-twitter"/>
          </a>
          <a href="https://google.fr">
            <font-awesome-icon icon="fa-brands fa-square-facebook"/>
          </a>
          <a href="https://google.fr">
            <font-awesome-icon icon="fa-brands fa-square-instagram"/>
          </a>
        </div>
      </div>
    </div>
    <div class="infosLegales">
      <a href="/mentions-legales">Mentions légales</a> | <a href="/politique-confidentialité">Politique de confidentialité</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    background-color: $rouge-sombre;
    color: $blanc;
    padding: rem(20);
    font-size: rem(12);
  }

  .infosClub {
    display: flex;
    justify-content: space-between;
  }

  .infosLegales {
    text-align: center;
    margin-top: rem(20);

    & a:hover {
      color: $gris;
    }
  }

  .adresseClub {
    text-align: center;
  }

  .texteHighlight {
    text-align: center;
    font-weight: 600;
    padding-bottom: rem(15);
  }

  .iconesSocial {
    display: flex;
    justify-content: space-around;

    svg {
      font-size: rem(25);
      &:hover {
        color: $gris;
      }
    }
  }

  @media all and (min-width: $frontiere) {
    footer {
      font-size: rem(14);
    }

    .infosClub {
      margin: 0 rem(75);
    }

    .iconesSocial {
      a {
        margin: 0 rem(15);
      }

      svg {
        font-size: rem(35);
      }
    }

  }
</style>