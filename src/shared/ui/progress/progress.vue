<template>
	<div class="v-progress">
		<div class="v-progress--bar">
			<div class="v-progress--fill" :style="{ width: value + '%' }" />
		</div>
		<span :class="textClassList">{{ value }}%</span>
	</div>
</template>

<script>
export default {
	name: 'v-progress',
	props: {
		value: {
			type: Number,
			required: true,
			validator: (value) => value >= 0 && value <= 100,
		},
	},
	computed: {
		textClassList() {
			return ['v-progress--text', this.value > 0 && 'v-progress--text-colored']
		}
	}
}
</script>

<style lang="scss">
@import "./progress"
</style>
