<template>
	<h4 :class="classList"><slot /></h4>
</template>

<script>
export default {
	name: 'v-subtitle',
	props: {
		className: String
	},
	computed: {
		classList() {
			return ['v-subtitle', this.className]
		}
	}
}
</script>

<style lang="scss">
@import "./subtitle";
</style>
