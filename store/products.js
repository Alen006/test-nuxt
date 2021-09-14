import axios from 'axios'
import { isProductFetched, isProductInCart } from '../services/product'
// const apiPc = 'https://tkikowski.tim.test.divante.pl/rwd/category/getCategoryProducts/?id=58291&pageSize=12&order=p3m&dir=desc&page=1'
// const fakeApi = 'https://fakestoreapi.com/products'
const Api = 'https://tkikowski.tim.test.divante.pl/rwd/category/getCategoryProducts?id=5195&page=1&order=p3m&dir=desc&pageSize=12'
export const state = () => ({
	productList: [],
	productStock:[],
	cartList:[],
	promise: null
})

export const mutations = {
	SET_PRODUCTS_LIST(state,products){
		state.productList = products
	},
	ADD_PRODUCT_TO_CART(state,id){
		state.cartList = [...state.cartList , id]
	},
	ADD_PRODUCT_FROM_STOCK(state,id){
		console.log('id add to product',id)

	},
	REMOVE_PRODUCT_FROM_STOCK(state,id){
		console.log('STOCK VALUE',id)
	
	},

	REMOVE_FROM_CART(state,id){
		const index = state.cartList.findIndex(prod => prod._id === id)
		state.cartList.splice(index, 1)
	},

}


export const actions = {
	async fetchProducts({state, commit}){
		try {
			if (!isProductFetched(state.productList)) {
				const listOfProducts = await axios.get(Api)
				commit('SET_PRODUCTS_LIST', listOfProducts.data.products)
			
			}
		} catch(err){
			console.log(err , 'Something went wrong')
		}
	},
	addProduct({state,commit},product){
		if(isProductInCart(state.cartList, product)) return 
		commit('ADD_PRODUCT_TO_CART', product)
	},
	deleteProduct({commit},id){
		commit('REMOVE_FROM_CART', id)
	},
	addToStock({commit},stockValue){
		commit('ADD_PRODUCT_FROM_STOCK',stockValue)
	},
	removeFromStock({commit},stockValue){
		commit('REMOVE_PRODUCT_FROM_STOCK',stockValue)
	}
}
export const getters = {
	shoppingCartLength: state => state.cartList.length,
	shoppingCartProducts: state => state.cartList || [],
	getStockById: state => id => {
		const prod = state.productList.find(product => product._id === id)
		return prod ? prod._source.stock : 'Not available'
	} ,	
	productItemById: state => (id) => state.productList.find(currentProduct => currentProduct._id === id)
}
