<template lang="pug">
div.star-box
  div.star-box
    icon-star.star(v-for="i in 5" @mouseover.native="setStar(i)" @mouseleave.native="setStarStatus(i)" @click.native="setStarStatus(i)" :class="{'active' : i <= currentStar}")
  div.rating  {{currentStar}} / 5
</template>

<script>
import IconStar from '../components/IconStar'
export default {
  components: {
    IconStar
  },
  data() {
    return {
      // qualityPrice: 3,
      currentStar: 0,
      clean: 0
    }
  },
  methods: {
    setStar(id) {
      this.currentStar = id
    },
    setStarStatus(id) {
      id <= 0 ? (this.currentStar = 0) : (this.currentStar = id)
    }
  }
}
</script>

<style lang="stylus">
.rating
  margin 0 1rem
.done
  text-decoration line-through
.list-item
  margin 1em
.star-box
  display flex
.star
  cursor pointer
  fill #ddd
  width 18px
  height 18px
.none
  fill #ddd !important
.active
  fill #fd0
</style>
