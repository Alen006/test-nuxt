<template lang="pug">
	div.navigation.section.box
		h2.title Shopping Cart
		nav.navigation__cart
			nuxt-link(to="/cart").button
					span.icon.mx-1
						i.fas.fa-shopping-cart
					span  Cart 
					| (
					b.has-text-danger.mx-2 {{shoppingCartLength}}
					| )
		shopping-cart
</template>

<script>import { mapGetters } from 'vuex'
	export default {
		components:{
			ShoppingCart:() => import(/* webpackChunkName: 'ShoppingCart' */'@c/ShoppingCart')
		},
		computed:{
			...mapGetters('products',['shoppingCartLength','shoppingCartProducts'])
		}

	}
</script>

<style lang="stylus" scoped>
.navigation
	&__cart
		&-btn
			padding 1rem
			border 3px solid rgba(0,0,0,0.3)
			&:hover
				background rgba(0,0,0,0.8)
				color #fff
</style>