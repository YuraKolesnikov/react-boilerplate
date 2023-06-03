<template>
	<button
		:class="classList"
		@click="$emit('click', $event)">
		<slot />
	</button>
</template>

<script>
import { BUTTON_STYLES, TEXT_SIZES } from './config'

export default {
	name: 'v-button',
	props: {
		buttonStyle: {
			type: String,
			default: BUTTON_STYLES.PRIMARY,
			validator: value => BUTTON_STYLES.LIST.includes(value)
		},
		textSize: {
			String,
			default: TEXT_SIZES.LARGE,
			validator: value => TEXT_SIZES.LIST.includes(value)
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classList() {
			return ['v-button', `v-button--${this.buttonStyle}`, `v-button--${this.textSize}`]
		}
	},
}
</script>

<style lang="scss">
@import "./button";
</style>
