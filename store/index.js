export const state = () => ({
  counter: 3
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
