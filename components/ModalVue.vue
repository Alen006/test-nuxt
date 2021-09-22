<template lang="pug">
	article(:class="{'is-hidden': messageStatus}").message
		div(:class="currentMessage.status").message-header
			p {{currentMessage.text}}
			span.icon
				i(:class="currentMessage.icon").fas
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	
	computed:{
	...mapGetters('products',['messageStatus','currentMessage'])
	},
}
</script>

<style lang="stylus" scoped>
.message
	position fixed
	top 2%
	right 2%
	&-header
		padding 1rem
	.icon
		margin-left .5rem

</style>