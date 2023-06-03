<template>
	<transition name="modal">
		<div v-if="isOpen" class="v-modal-mask" @click.self="$emit('close')">
			<div class="v-modal-wrapper" @click.self="$emit('close')">
				<v-bordered-container>
					<slot />
				</v-bordered-container>
			</div>
		</div>
	</transition>
</template>

<script>
import { VBorderedContainer } from 'shared/providers'

export default {
	name: 'v-modal',
	components: {
		VBorderedContainer,
	},
	props: {
		isOpen: {
			type: Boolean,
			required: true,
		},
	},
	methods: {},
}
</script>

<style lang="scss">
@import "./modal"
</style>
