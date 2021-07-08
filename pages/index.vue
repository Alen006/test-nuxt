<template lang="pug">
div
  nav
  ul
    li(v-for="link in linksListName" :key="link") {{link}}
  ul
   li.list-item(v-for="product,i in products" :key="i" :class="{'done':product.done}") {{i}} {{product.text}}
    input(type='checkbox' @change="toggle(product)")
    span.remove(@click="remove(product)") x
   li
    input( @keyup.enter="addTodo" placeholder="What need to be done?")

  ul  
    h2 list
    li {{productList}}
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', ['productList']),
    ...mapGetters('links', ['linksListName']),
    products() {
      return this.$store.state.products.list
    }
  },
  mounted() {
    console.log('product list ', this.productList)
  },
  methods: {
    addTodo(e) {
      this.$store.commit('products/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'products/toggle',
      remove: 'products/remove'
    })
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
