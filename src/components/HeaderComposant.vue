<script>
  export default {
    name: 'HeaderComposant',
    data() {
      return {
        estActif: false,
      }
    },
    methods: {
      afficherNavigation() {
        this.estActif = !this.estActif;
      }
    }
  }
</script>

<template>
  <header>
    <div class="entete">
      <button @click="afficherNavigation()" :class="{actif: estActif}">
        <span></span>
      </button>
      <img class="logo" src="../assets/logo-tennis-club-guerande.png" alt="">
    </div>
    <img class="photo-club" src="../assets/manga.jpg">
    <ul class="infos">
      <li>
        <span class="valeur">300</span>
        <span class="nom">Adhérents</span>
      </li>
      <li>
        <span class="valeur">5</span>
        <span class="nom">Moniteurs</span>
      </li>
      <li>
        <span class="valeur">4</span>
        <span class="nom">Terrains</span>
      </li>
    </ul>
    
    <nav :class="{actif: estActif}">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/le-club">Le Club</a></li>
        <li><a href="/entrainements">Entrainements</a></li>
        <li><a href="/inscription">Inscriptions</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

  $header-hauteur: rem(66);
  $bouton-hauteur: rem(14);
  $bouton-largeur: rem(18);
  $barre-hauteur: rem(1.5);

  header {
    z-index: 3;
    //height: $header-hauteur;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: $blanc;
    font-size: rem(14);
    font-weight: 600;
    display: flex;
    flex-direction: column;

    .entete {
      position: relative;
      padding: rem(15);
      width: 100%;
      background-color: $blanc;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      button {
        width: $bouton-largeur;
        height: $bouton-hauteur;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: initial;
        border: none;
        padding: 0;

        &.actif {
          span {
            background-color: inherit;

            &::before {
              transform: translateX(-50%) translateY(0) rotate(-45deg)
            }

            &::after {
              transform: translateX(-50%) translateY(0) rotate(45deg);
            }
          }
        }

        span {
          transition: 0.5s;
          width: 100%;
          height: $barre-hauteur;
          border-radius: 10px;
          background-color: $noir;
          &::before,
          &::after {
            transition: 0.5s;
            content: '';
            position: absolute;
            width: $bouton-largeur;
            height: $barre-hauteur;
            border-radius: 10px;
            background-color: $noir;
          }

          &::before {
            transform: translateX(-50%) translateY(calc(-1 * ($bouton-hauteur / 2 - $barre-hauteur)));
          }

          &::after {
            transform: translateX(-50%) translateY(calc($bouton-hauteur / 2 - $barre-hauteur));
          }
        }
      }

      .logo {
        width: rem(50);
        height: rem(50);
      }
    }

    .photo-club {
      object-fit: cover;
      width: 100%;
      height: rem(250);
    }

    .infos {
      padding: rem(10) 0 rem(10);
      width: 100%;
      background-color: $rouge-sombre;
      display: flex;
      flex-direction: row;
      li {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }



    nav {
      transition: 0.5s;
      width: 100%;
      padding: rem(4) 0;
      margin: 0;
      position: fixed;
      top: $header-hauteur;
      left: -100%;
      &.actif  {
        left: 0;
      }
      background-color: $rouge;

      ul {
        width: 100%;
        margin: 0;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        gap: rem(8);
        li {
          a {

          }
        }
      }
    }
  }

  @media all and (min-width: $frontiere) {
  }
</style>