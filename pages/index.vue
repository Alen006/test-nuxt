<template lang="pug">
	div.hero
		h3 VUEX + Axios :)
		block-navigation
		block-products.columns.is-multiline.m-4
		
</template>

<script>
export default {
	components: {
	BlockProducts: () => import(/* webpackChunkName: 'BlockProducts' */'@/components/BlockProducts'),
	BlockNavigation: () => import(/* webpackChunkName: 'BlockNavigation' */'@/components/BlockNavigation'),
	}, 

	data() {
	return {
		name:'',
		speakText:"Speak TEXT",
		text:''
    }},
	watch:{
	text(){
			this.speakText = this.text
}
	},

    methods:{

    }
}

</script>

<style lang="stylus" scoped>
.red
    color red
</style>
