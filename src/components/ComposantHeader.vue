<script>
  export default {
    name: 'ComposantHeader',
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
    <button @click="afficherNavigation()" :class="{actif: estActif}">
      <span></span>
    </button>
    <img src="../assets/logo-tennis-club-guerande.png" alt="">
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
  $bouton-hauteur: rem(24);

  header {
    z-index: 3;
    height: $header-hauteur;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $rouge;
    color: $blanc;
    font-size: rem(14);
    font-weight: 600;

    button {
      position: absolute;
      top: calc(50% - $bouton-hauteur / 2);
      left: rem(16);
      width: rem(30);
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
        height: rem(4);
        border-radius: 10px;
        background-color: $blanc;
        &::before,
        &::after {
          transition: 0.5s;
          content: '';
          position: absolute;
          width: 100%;
          height: rem(4);
          border-radius: 10px;
          background-color: $blanc;
        }

        &::before {
          transform: translateX(-50%) translateY(rem(-10));
        }

        &::after {
          transform: translateX(-50%) translateY(rem(10));
        }
      }
    }

    img {
      width: rem(50);
      height: rem(50);
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
    header {
      height: rem(120);
      background-color: $rouge-clair;

      button {
        display: none;
      }

      img {
        width: rem(100);
        height: rem(100);
        position: absolute;
        left: rem(40);
      }

      nav {
        width: auto;
        padding-top: 0;
        background-color: transparent;
        top: rem(10);
        right: rem(5);
        left: auto;
        ul {
          display: flex;
          flex-flow: row nowrap;
          gap: rem(32);

          li {
            a {

            }
          }
        }
      }      
    }
  }
</style>