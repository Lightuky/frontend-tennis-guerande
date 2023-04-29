<template>
  <div class="titrePrincipal">LE CLUB</div>
  <div class="pagesContainer mx-5 my-5">
    <div v-for="page in pages" class="pageBlock d-flex my-2">
      <div class="d-flex align-items-center">
        <img :src="'public/icons/' + page.icon + '.png'" :alt="page.name" class="linkIcon">
        <div class="pageInfos">
          <div class="linkTitle">{{ page.name }}</div>
          <div class="subTitle my-1">{{ page.subtitle }}</div>
          <router-link :to="{ name: page.route}" class="btn btn-sm text-white mt-2 px-3">{{ page.btnText }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .pagesContainer {
   margin: rem(55) auto;

   & .pageBlock:nth-child(odd) {
     justify-content: start;
     margin-left: rem(85);

     .pageInfos {margin-left: rem(25)}
     .linkTitle {color: #C34A57}
     .btn {
       background-color: #C42E2E;
       &:hover {background-color: #ee7a7a}
     }
   }

   & .pageBlock:nth-child(even) {
     justify-content: end;
     margin-right: rem(85);
     text-align: right;

     .pageInfos {margin-right: rem(25)}
     .linkTitle {color: #E9652C}
     .btn {
       background-color: #E9652C;
       &:hover {background-color: #ffac89}
     }
     div.d-flex {flex-direction: row-reverse}
   }
 }

 .pageInfos {
   width: 55%;
 }

 .linkIcon {
   height: 100px;
 }

  .linkTitle {
    font-weight: bold;
    font-family: Montserrat,serif;
    font-size: rem(26);
  }

  .subTitle {
    color: #98898B;
    font-family: Montserrat,serif;
    font-size: rem(12);
  }

  .pageBlock .btn {
    border-radius: 15px;
    font-weight: bold;
    font-size: rem(12);
  }

  @media all and (min-width: $frontiere) {}
</style>

<script>
export default {
  name: "LeClub",
  data() {
    return {
      pages: [
        {
          name: 'Nos actualités', route: 'ArticlesListe', icon: 'actualites', btnText: 'VOIR NOS ARTICLES',
          subtitle: 'Trouvez ici les derniers articles sortis ainsi qu\'une liste de tous ceux déja parus.'
        },
        {
          name: 'Le secrétariat', route: 'Secretariat', icon: 'secretariat', btnText: 'PRENDRE CONTACT',
          subtitle: 'Prenez connaissance avec le secrétariat du club, et contactez-le si nécessaire.'
        },
        {
          name: 'Les Dirigeants', route: 'Dirigeants', icon: 'dirigeants', btnText: 'FAIRE CONNAISSANCE',
          subtitle: 'Faites la rencontre des nos responsables du bureau et du conseil d\'administration.'
        },
        {
          name: 'Nos partenaires', route: 'Partenaires', icon: 'partenaires', btnText: 'VOIR LA LISTE',
          subtitle: 'Découvrez la liste des partenaires du club et leurs activités respectives.'
        },
        {
          name: 'Nos photos', route: 'AlbumsListe', icon: 'photos', btnText: 'VOIR LES PHOTOS',
          subtitle: 'Sont listées et triés ici les photos et albums liés au club.'
        }
      ]
    };
  }
}
</script>
