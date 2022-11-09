<script setup>
  import HeaderComposant from './components/HeaderComposant.vue';
</script>

<script>
  export default {
    name: 'App',
    components: {
      HeaderComposant,
    }
  }
</script>

<template>
  <HeaderComposant/>
  <main></main>
</template>

<style lang="scss">

  #app { 
    
    main {
      margin-top: rem(105);
      padding: 0 rem(8);
    }

    @media all and (min-width: $frontiere) {
      main {
        margin-top: rem(180);
        padding: 0 calc((100% - $frontiere) / 2);
        width: $frontiere;
      }
    }
  }
</style>
