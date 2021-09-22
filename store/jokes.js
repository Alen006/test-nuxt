import axios from 'axios'
export const state = () => ({
    jokesList: [],
    jokesApi: 'https://v2.jokeapi.dev/joke/Any',
})

export const actions = {
    async getJokes({ commit }) {
        try {
            const fetchJokes = await axios.get(
                'https://v2.jokeapi.dev/joke/Any'
            )
            commit('SET_JOKES', fetchJokes.data)
        } catch (err) {
            console.log(err, 'ERROR!')
        }
    },
}

export const mutations = {
    SET_JOKES(state, jokesList) {
        state.jokesList = jokesList
    },
}
