<template lang="pug">
		section.block-products
			item-product(v-for="product in productsList" :key="product.id" :product="product")
			b TUTAJ {{productsList}}

</template>

<script>
import { mapActions } from 'vuex'
export default {
	components:{
		ItemProduct: ()=> import(/* webpackChunkName: 'ItemProduct' */ '@c/ItemProduct')
	},
	props:{
	
	},
	data() {
		return {
			posts:[]
	}
		},
		computed:{
			productsList(){
				return this.$store.state.products.productList
			},
		
		
	},
	mounted() {
		console.time('Execute 1')
		this.fetchProducts()
		console.timeEnd('Execute 1')

		},
	methods:{	...mapActions('products',['fetchProducts']),

	},

}
</script>

<style lang='stylus' scoped>



</style>