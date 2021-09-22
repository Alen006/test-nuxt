<template lang="pug">
section.container
	div.cart__header
		h3.title Product Cart: {{shoppingCartProducts}}
		nuxt-link( to='/').button
			span.icon-is-small
				i.fas.fa-arrow-left
			span.ml-2  Go Back
	div(v-for="product in this.$store.state.products.cartList" :key="product._id").card.m-4.column.is-multiline
		span Product {{product.id}} {{product}}
		div.card-image
			div(@click="deleteProduct(product._id)").delete.is-large.is-danger
			figure.image.is-128x128
				//- img(:src="`https://tkikowski.tim.test.divante.pl/${product._source.imageLink}`" alt="product image")
		div.card-content
			div.media
				div.media-content
					p.title.is-4 {{product.title}}
	
		div.field.has-addons
			div().control
				div.button {{temporaryStock}} szt.
			div.control
				a(@click="removeItem(product._id)").button
					i.fas.fa-minus
				a(@click="addItem(product._id)").button
					i.fas.fa-plus
		


</template>

<script>
import {mapGetters,mapActions} from 'vuex'
	export default {
		data(){
			return {
				temporaryStock:0
			}
		},
		computed:{
			...mapGetters('products',['shoppingCartProducts'])
		
		},
		mounted(){
		
		},
		methods:{
	
			...mapActions('products',['deleteProduct','addToStock','removeFromStock']),
	addItem(){
		this.addToStock(this.product._id)

	},
	removeItem(){
		this.removeFromStock(this.product._id)

	
	},
		},
	
	}
</script>

<style lang="stylus" scoped>
.image img
	object-fit contain
</style>