<template>
	<label class="v-switch">
		<input
			:id="id"
			:name="name"
			:checked="checked"
			type="checkbox"
			class="v-switch--input">
		<span class="v-switch--toggle" />
	</label>
</template>

<script>
export default {
	name: 'v-switch',
	props: {
		id: [String, Number],
		name: String,
		checked: Boolean,
	}
}
</script>

<style lang="scss">
@import "./switch";
</style>
