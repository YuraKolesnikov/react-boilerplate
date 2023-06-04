<template>
	<v-modal :is-open="isOpen" @close="$emit('close')">
		<div class="v-confirmation-modal-body">
			<h2 class="v-confirmation-modal-header">Hurrah!</h2>
			<p class="v-confirmation-modal-caption">Your subscription preferences have been succesfully saved</p>
			<div class="v-confirmation-modal-happiness-diff">
				<p :class="numClassList">{{value}}%</p>
				<p class="v-confirmation-modal-happiness-caption">{{savedMessage}}</p>
			</div>
		</div>
		<div class="v-confirmation-modal-footer">
			<v-button
				@click="$emit('save')"
				:button-style="BUTTON_STYLES.PRIMARY"
				:text-size="TEXT_SIZES.LARGE">
				Ok, great!
			</v-button>
		</div>
	</v-modal>
</template>

<script>
import { VModal, VButton, BUTTON_STYLES, TEXT_SIZES } from 'shared/ui'

export default {
	name: 'v-confirmation-modal',
	components: {
		VModal,
		VButton
	},
	props: {
		isOpen: Boolean,
		value: Number
	},
	data() {
		return {
			BUTTON_STYLES,
			TEXT_SIZES
		}
	},
	computed: {
		savedMessage() {
			return this.value > 0 ? 'Fun gained :)' : 'Fun lost :('
		},
		numClassList() {
			return ['v-confirmation-modal-happiness-num', this.value > 0 ? 'v-confirmation-modal-happiness-num--green' : 'v-confirmation-modal-happiness-num--red']
		},
	}
}
</script>

<style lang="scss">
@import "./confirmation-modal";
</style>
