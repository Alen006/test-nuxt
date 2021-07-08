export const state = () => ({
  users: []
})

export const mutations = {
  addUser(state, user) {
    state.users.push({ name: user.name, pwd: user.pwd })
  }
}
