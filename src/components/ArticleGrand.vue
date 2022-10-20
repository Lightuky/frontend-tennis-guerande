<script setup>
  import ARTICLES from '../api/article-accueil.json';
  //console.log(ARTICLES)
</script>

<script>
    export default {
        name: 'ArticleGrand',
        data: {
            articles : ARTICLES,
        }
    }
</script>

<template>
    <section class="article-grand" v-for="article in articles">
        <h2>{{article.titre}}</h2>
        <div class="texte">
            <p></p>
            <p></p>
        </div>
    </section>
</template>

<style lang="scss">
    .article-grand {
        h2 {
            margin: 0;
            margin-bottom: rem(20);
            color: $rouge-sombre;
        }

        .texte {
            text-align: justify;

            p {
                margin: 0;
                margin-bottom: rem(10);
            }
                
            :last-child {
                margin-bottom: 0;
            }
        }
    }
</style>