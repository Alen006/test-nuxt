<template lang="pug">
div.star-box
  div.star-box
    icon-star.star(v-for="i in 5" @mouseover.native="setStarStatus(i)" @mouseleave.native="setStarStatus(clicked)" @click.native="setStar(i)" :class="{'active' : i <= currentStar}")
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
      currentStar: 0,
      clicked: 0
    }
  },
  methods: {
    setStar(id) {
      this.clicked = id
    },
    setStarStatus(id) {
        if (id >= 1) {
          this.currentStar = id
        } else if (this.clicked >= 1) {
          this.currentStar = this.clicked
        }
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
