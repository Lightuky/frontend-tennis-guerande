<template>
  <HeaderComposant/>
  <router-view></router-view>
  <FooterComposant/>
</template>

<script>
import HeaderComposant from "./components/HeaderComposant.vue";
import FooterComposant from "./components/FooterComposant.vue";

export default {
  name: 'App',
  components: {
    HeaderComposant,
    FooterComposant,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

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
