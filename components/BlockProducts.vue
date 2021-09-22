<template lang="pug">
		section.block-products
			item-product(v-for="product in productsList" :key="product.id" :product="product")
			modal-vue()

</template>

<script>
import { mapActions } from 'vuex'
export default {
	components:{
		ItemProduct: ()=> import(/* webpackChunkName: 'ItemProduct' */ '@c/ItemProduct'),
		ModalVue: ()=> import(/* webpackChunkName: 'ModalVue' */ '@c/ModalVue')
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
		this.$nextTick(() => {
		this.$nuxt.$loading.start()
		setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })

		},
	methods:{...mapActions('products',['fetchProducts']),

	},

}
</script>

<style lang='stylus' scoped>



</style>