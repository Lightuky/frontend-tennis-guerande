<script>
  export default {
    name: 'ArticleMignature',
  }
</script>

<template>
  <article>
    <img class="photo" src="" alt="">
    <div class="main">
      <h3 class="titre">Test</h3>
      <p class="texte"></p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  article {
    width: rem(490);
    height: rem(340);
    border: 1px solid $gris;
    box-shadow: 0px 0px 10px rgba($color: $noir, $alpha: 0.25);

    .photo,
    .main {
      width: 50%;
      height: 100%;
    }

    .photo {
      object-fit: cover;
    }

    .main {

      .titre {

      }

      .texte {
        overflow-y: hidden;
      }
    }
  }
</style>