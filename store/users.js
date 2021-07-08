export const state = () => ({
  users: []
})

export const mutations = {
  addUser(state, user) {
    state.users.push({ name: user.name, pwd: user.pwd })
  },
  removeUser(state, { user }) {
    state.list.splice(state.users.indexOf(user), 1)
  }
}
