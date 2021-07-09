<template lang="pug">

div
    mainFooter
</template>

<script>
import mainFooter from '../components/footer'

export default {
  components: {
    mainFooter
  }
}
</script>

<style lang="stylus">
.done
  text-decoration line-through
.list-item
  margin 1em
.remove
  color red
  padding .2em .5em
  border 1px solid #000
  cursor pointer
  &:hover
    background lightblue
</style>
