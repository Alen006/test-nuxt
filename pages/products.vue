<template lang="pug">
	div
		nuxt-link(to='/' ) Go Back
		h1 Prodcuts Page
</template>

<script>
export default {
	data(){
		return {
			loading: false
		}
	},methods:{
		active(){
	console.log(this.loading)
	this.loading =  true
	
	console.log(this.loading)
	setTimeout(() => {
		this.loading =  false
		
	}, 5500)
	}
	}
}
</script>

<style lang="stylus" scoped></style>
