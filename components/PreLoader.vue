<template lang="pug">
	div(v-if="loading").loading-page
		div.loading
</template>

<script>
	export default {
	data: () => ({
		loading: false,
	}),
	methods: {
		start() {
		this.loading = true
		},
		finish() {
		this.loading = false
		},
	},
	}
</script>

<style lang="stylus" scoped>
.loading-page 
	position fixed
	top 50%
	left 50%
	z-index 1000
	text-align center
	display flex
	flex-direction column
	align-items center
	justify-content center

.loading 
	display inline-block
	width 6rem
	height 6rem
	border 10px solid #fd0
	border-radius 50%
	border-top-color orangered
	animation spin .5s ease-in-out infinite

@keyframes spin 
	0% 
		transform rotate(0deg) scale(1)
	50%
		transform rotate(0deg) scale(1.4)
	100% 
		transform rotate(360deg) scale(1)
	

</style>