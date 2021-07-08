<template lang="pug">

div
    lodashGet
    list
    mainFooter
</template>

<script>
import list from '../components/list'
import mainFooter from '../components/footer'
import lodashGet from '../components/lodashGet'

export default {
  components: {
    mainFooter,
    list,
    lodashGet
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
