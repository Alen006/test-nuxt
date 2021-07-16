<template lang="pug">
  div
    span  
    ul
      li
        nuxt-link(v-for="link in links" :key="link.id" :to="link.path") {{link.label}} 
          
</template>

<script>
import { mapState } from 'Vuex'
export default {
  computed: {
    ...mapState('navLinks', ['links'])
  },
  mounted() {
    document.addEventListener('visibilitychange', function () {
      console.log(document.visibilityState)
      document.visibilityState === 'visible'
        ? (document.title = 'TIM SA')
        : (document.title = 'Wróć na TIM')
    })
  }
}
</script>

<style lang="stylus" scoped></style>
