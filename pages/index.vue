<template lang="pug">
  div
    h1.title Welcome
</template>

<script>
export default {
  data() {
    return {
      test: ''
    }
  },
  computed: {
    printVal() {
      return this.$store.state.t
    }
  },
  mounted() {
    console.log('****-****')
    console.log(this.$store.state.t)
    console.log(this.$store.state)
  },
  methods: {}
}
</script>

<style lang="stylus">
.title
  color brown
  border 1px solid black
  padding 1em
</style>
