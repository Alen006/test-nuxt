import axios from 'axios'
import { isProductFetched } from '../services/product'
// const apiPc = 'https://tkikowski.tim.test.divante.pl/rwd/category/getCategoryProducts/?id=58291&pageSize=12&order=p3m&dir=desc&page=1'
// const fakeApi = 'https://fakestoreapi.com/products'
const Api =
    'https://tkikowski.tim.test.divante.pl/rwd/category/getCategoryProducts?id=5195&page=1&order=p3m&dir=desc&pageSize=12'
export const state = () => ({
    productList: [],
    cartList: [],
    isLoaded: false,
    modalMessage: true,
    currentProductId: 0,
    successMessage: {
        text: 'Product has been added to cart',
        status: 'has-background-success',
        icon: 'fa-check-square',
    },
    falseMessage: {
        text: 'You already added this product',
        status: 'has-text-warning',
        icon: 'fa-exclamation-triangle',
    },
    currentMessage: {},
})

export const actions = {
    async fetchProducts({ state, commit }) {
        try {
            if (!isProductFetched(state.productList)) {
                const listOfProducts = await axios.get(Api)
                commit('SET_PRODUCTS_LIST', listOfProducts.data.products)
            }
        } catch (err) {
            console.log(err, 'Something went wrong')
        }
    },
    addProduct({ state, dispatch, commit }, id) {
        const isInProductCart = state.cartList.some((product) => {
            console.log(id)
            console.log(product.id, '---')
            return product.id === id
        })
        if (!isInProductCart) {
            commit('ADD_PRODUCT_TO_CART', id)
            dispatch('showPopup', state.successMessage)
        } else if (isInProductCart) {
            dispatch('showPopup', state.falseMessage)
        }
    },
    deleteProduct({ commit }, id) {
        commit('DELETE_FROM_CART', id)
    },
    addToStock({ commit }, id) {
        commit('ADD_PRODUCT_FROM_STOCK', id)
    },
    removeFromStock({ commit }, id) {
        commit('REMOVE_FROM_CART', id)
    },
    showPopup({ commit }, message) {
        commit('SHOW_MESSAGE', message)
        setTimeout(() => commit('SHOW_MESSAGE', message), 1500)
    },
}

export const mutations = {
    SET_PRODUCTS_LIST(state, products) {
        state.productList = products
    },
    ADD_PRODUCT_TO_CART(state, id) {
        state.currentProductId = id
        const product = state.productList.find((product) => product._id === id)
        const isInProductCart = state.cartList.find(
            (product) => product.id === id
        )

        if (isInProductCart) {
            // product already present in the cart. so increase the quantity
            isInProductCart.quantity++
            console.log(state.cartList)
        } else {
            state.cartList.push({
                // product newly added to cart
                ...isInProductCart,
                id: product._id,
                stock: product._source.stock,
                quantity: 1,
            })
        }
        // reduce the quantity in products list by 1 /  check why
        product.quantity--
    },
    DELETE_FROM_CART(state, id) {
        const index = state.cartList.findIndex((prod) => prod._id === id)
        state.cartList.splice(index, 1)
        console.log(state.cartList)
    },
    REMOVE_FROM_CART(state, id) {
        const product = state.productList.find((product) => product.id === id)
        // find the product in the cart list
        const cartProduct = state.cartList.find((product) => product.id === id)

        cartProduct.quantity--
        // Add back the quantity in products list by 1
        product.quantity++
    },
    SHOW_MESSAGE(state, message) {
        state.modalMessage = !state.modalMessage
        state.currentMessage = message
    },
}
export const getters = {
    shoppingCartLength: (state) => state.cartList.length,
    shoppingCartProducts: (state) => (id) => {
        const products = state.productList.find((product) => product._id === id)
        console.log(products)
        return products
    },
    getStockById: (state) => (id) => {
        const prod = state.productList.find((product) => product._id === id)
        return prod ? prod._source.stock : 'Not available'
    },
    productItemById: (state) => (id) =>
        state.productList.find((currentProduct) => currentProduct._id === id),
    messageStatus: (state) => state.modalMessage,
    currentMessage: (state) => state.currentMessage,
}
