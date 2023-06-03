<template>
	<div :class="wrapperClassList">
		<div :class="containerClassList">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'v-bordered-container',
	props: {
		wrapperClass: String,
		containerClass: String,
	},
	computed: {
		wrapperClassList() { return ['v-wrapper', this.wrapperClass] },
		containerClassList() { return ['v-container', this.containerClass] }
	}
}
</script>

<style lang="scss">
@import "./bordered-container";
</style>
