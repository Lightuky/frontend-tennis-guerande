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
    }
  },
  props: {
    article: Object,
  }
}
</script>

<template>
  <div class="blocArticle">
<!--    <div class="articleIllustration" :class="{ illustAllongee: descEstOuverte }" :style="{backgroundImage:'url(' + article.image + ')'}"></div>-->
    <img :src="article.image" class="articleIllustration" :class="{ illustAllongee: descEstOuverte }" alt="Image Article">
    <div class="articleTitre" @click="toggleDescription()" :class="{ invisible: descEstOuverte }" :title="article.titre">{{ article.titre }}</div>
    <div class="articleDescription" @click="toggleDescription()" :class="{ invisible: !descEstOuverte }">
      <div class="articleDescTitre">{{ article.titre }}</div>
      <div class="articleDescContenu">{{ article.contenu }}</div>
      <div class="articleDescLien">
        <router-link :to="{ name: 'ArticleDetails', params: {articleId: article.id}}">En savoir plus</router-link>
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
    margin: 0 rem(30);
    padding: rem(10) 0;
    font-weight: 600;
    font-size: rem(18);
    color: $gris-tres-sombre;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    border-radius: 0 0 7px 7px;
    -webkit-box-shadow: 0 1px 5px 0 $gris-tres-sombre;
    box-shadow: 0 1px 5px 0 $gris-tres-sombre;

    &.invisible {
      position: absolute;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .articleDescription {
    position: relative;
    bottom: 30%;
    height: 30%;
    margin: 0 rem(30);
    border-radius: 0 0 7px 7px;
    background-color: rgba(255,255,255,0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover {
      cursor: pointer;
    }
  }

  .invisible {
    visibility: hidden;
  }

  .articleDescTitre {
    font-weight: 600;
    margin: 0 rem(15);
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