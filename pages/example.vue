<template>
  <div class="mt-10 justify-content-center">
    <!-- <h1>{{ h1Text }}</h1> -->
    <!-- <h2 class="mt-2">{{ h2Text }}</h2> -->
    <h1>Hola</h1>
    <h2>Mundo</h2>

    <img
      :src='srcImg'
      class="mt-5"
      width="600"
    />
  </div> 
</template>

<script>
export default {
  name: 'Example',
  
  data() {
    return {
      srcImg: 'https://thumbs.dreamstime.com/z/bonito-hombre-negro-de-negocios-con-camiseta-casual-rayas-sonriendo-cara-feliz-gui%C3%B1ando-el-ojo-en-la-c%C3%A1mara-haciendo-signo-226477827.jpg'
    }
  },
  // computed: {
  //   h1Text() {
  //     return this.$t('h1Message')
  //   },
  //   h2Text() {
  //     return this.$t('h2Message')
  //   }
  // }
}
</script>