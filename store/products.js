export const state = () => ({
  list: [{ text: 'text', done: true }]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { product }) {
    state.list.splice(state.list.indexOf(product), 1)
  },
  toggle(state, product) {
    product.done = !product.done
  }
}

export const getters = {
  productList: (state) => state.list.map(item => item.text)
}
