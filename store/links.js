export const state = () => ({
  links: [
    {
      url: '/',
      name: 'home'
    },
    {
      url: '',
      name: 'products'
    },
    {
      url: '',
      name: 'contact'
    }
  ]
})

export const getters = {
  linksListName(state) {
    return state.links.map((link) => link.name)
  }
}
