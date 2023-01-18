<script>
export default {
  name: 'ArticleAccueil',
  data() {
    return {
      descEstOuverte: false,
    }
  },
  methods: {
    toggleDescription() {
      this.descEstOuverte = !this.descEstOuverte;
      this.$emit('update-desc', this.descEstOuverte ? 1 : -1)
    }
  },
  props: {
    article: Object,
  }
}
</script>

<template>
  <div class="blocArticle">
    <img :src="article.image" class="articleIllustration" :class="{ illustAllongee: descEstOuverte }" alt="Image Article">
    <!-- TODO: div 0 hauteur > transition anim -->
    <div class="articleDescription" @click="toggleDescription()" :class="{ descOpen: descEstOuverte }">
      <div class="articleTitre" :class="descEstOuverte ? 'descOpen' : 'descClose'" :title="article.titre">{{ article.titre }}</div>
      <div class="articleInfos" :class="{ descOpen: descEstOuverte }">
        <div class="articleDescContenu">{{ article.contenu }}</div>
        <div class="articleDescLien">
          <router-link :to="{ name: 'ArticleDetails', params: {articleId: article.id}}">En savoir plus</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .blocArticle {
    width: 100%;
  }

  .articleIllustration {
    height: rem(260);
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    margin: rem(30) rem(30) 0;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 7px 7px 0 0;
    -webkit-box-shadow: 0 1px 5px 0 rgba(229,39,34,0.5);
    box-shadow: 0 1px 5px 0 rgba(229,39,34,0.5);

    &.illustAllongee {
      height: rem(304.8);
      border-radius: 7px;
    }
  }

  .articleTitre {
    font-weight: 600;

    &.descClose {
      padding: rem(10) 0;
      font-size: rem(18);
      color: $gris-tres-sombre;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      border-radius: 0 0 7px 7px;
      -webkit-box-shadow: 0 1px 5px 0 $gris-tres-sombre;
      box-shadow: 0 1px 5px 0 $gris-tres-sombre;
    }

    &.descOpen {
      margin: 0 rem(15);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .articleDescription {
    position: relative;
    margin: 0 rem(30);
    border-radius: 0 0 7px 7px;
    background-color: rgba(255,255,255,0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    bottom: 0;

    &.descOpen {
      bottom: 30%;
      height: 30%;
      transition: bottom 0.25s;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .articleInfos {
    transform: scaleY(0);
    transform-origin: top;
    position: absolute;
    overflow: hidden;
    transition: all 0s ease-in-out;

    &.descOpen {
      position: initial;
      height: auto;
      transform: scaleY(1);
      transition: all 0.35s ease-in-out;
    }
  }

  .articleDescContenu {
    margin: 0 rem(15);
    @include line-clamp(3, 2.25em);
  }

  .articleDescLien {
    display: flex;
    justify-content: end;
    padding-right: rem(15);
    text-decoration: underline;

    &:hover {
      color: #756e6e;
    }
  }

  @media all and (min-width: $frontiere) {
    .blocArticle {
      width: 33%;
    }
  }
</style>
