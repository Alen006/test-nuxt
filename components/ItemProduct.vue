<template lang="pug">
	div.card.box.column.m-4.is-3
		div.item-content
			h2.item-content__title.title.is-6.my-5 {{product._source.name}}
			figure.item-content__image-box
				img(:src="`https://tkikowski.tim.test.divante.pl${product._source.imageLink}`").item-content__image
			span.item-content__price.subtitle.mt-2.mb-0 price: {{product._source.price}}
			span.item-content__stock.subtitle stock: {{getStockById(product._id)}}
			p.product-item__description {{product._source.description}}
		div.item-category
			div.product-item__category
				span Kategoria: 
				b.product-item__category-name {{ product._source.categoryName }}
			div.product-item__category
				span Dostawca: 
				b {{manufacturerName}}
		
			div.content added: 
				b
					time(:datetime="timeCreatedAt").tag.content__actions-time {{timeCreatedAt}}

			div.content__actions 
				button.button.my-5.is-primary(@click="addProduct(product._id)") add to cart
</template>

<script>
import {mapActions , mapGetters} from 'vuex'
// const limitWhileZero = (value, stock) => value === 0
// const stockPlus = (stockNumber , stockValue = 0) => {stockNumber = stockValue += stockNumber}
// const stockMinus = (stockNumber ,stockValue = 0) => {stockNumber = stockValue -= stockNumber}

export default{
props:{
	product:{
		type: Object,
		default: ()=>({})
	},
	
},
	data(){
		return {
	
		}
	},
computed:{
	...mapGetters('products',['getStockById']),
	timeCreatedAt() {
		return this.product._source.createdAt
	},
	manufacturerName() {
		return this.product._source.manufacturer
	},
	currentItemStock(){
		return this.product._source.stock - this.stockNumber
	}
},
methods:{
	...mapActions('products',['addProduct','deleteProduct','addToStock','removeFromStock']),
	...mapActions('products',['showPopup']),

	addItem(){
		this.removeFromStock(this.product._id)
	},
	removeItem(){
		this.addToStock(this.product._id)
	}

	},

}
</script>

<style lang="stylus" scoped>
.product-item
	list-style none
	margin 1rem 0
	padding 0.2rem 0.4rem;
	border 1px solid rgba(0,0,0,.3)

.item-content
	&__stock,
	&__price
		display block
	&__image
		width 130px
		height 130px
		object-fit contain

</style>