<template>
	<a :href="to" class="v-link" :target="target" :rel="rel"><slot /></a>
</template>

<script>
export default {
	name: 'v-link',
	props: {
		to: String,
		target: String,
		rel: String
	}
}
</script>

<style lang="scss">
@import "./link";
</style>
