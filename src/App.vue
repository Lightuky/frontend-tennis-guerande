<script setup>
  import ArticleGrand from './components/ArticleGrand.vue';
  import ArticleMignature from './components/ArticleMignature.vue';
  import ComposantCitation from './components/ComposantCitation.vue';
  import ComposantFooter from './components/ComposantFooter.vue';
  import ComposantHeader from './components/ComposantHeader.vue';
</script>

<script>
  export default {
    name: 'App',
    components: {
      ArticleGrand,
      ArticleMignature,
      ComposantCitation,
      ComposantFooter,
      ComposantHeader,
    }
  }
</script>

<template>
  <ComposantHeader/>
  <main>
    <!--<ArticleGrand />-->
  </main>
  <ComposantFooter />
</template>

<style lang="scss">

  #app {
    box-sizing: border-box; 
    
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
