<template>
	<div :class="classList">
		<div class="v-pref-card--top">
			<div class="v-pref-card--img-wrapper">
				<img alt="" class="v-pref-card--img">
			</div>
			<div class="v-pref-card--toggle">
				<span class="v-pref-card--status">{{ status }}</span>
				<v-switch :id="id" :checked="subscribed" @change="onPrefToggle" name="toggle_subscribe" />
			</div>
		</div>
		<div class="v-pref-card--bottom">
			<p class="v-pref-card--text">
				{{ caption }}
			</p>
		</div>
	</div>
</template>

<script>
import { VSwitch } from 'shared/ui';

export default {
	name: 'v-pref-card',
	components: {
		VSwitch
	},
	props: {
		id: [Number, String],
		subscribed: Boolean,
		caption: String,
		imgPath: String
	},
	computed: {
		classList() {
			return ['v-pref-card', !!this.subscribed && 'v-pref-card--active']
		},
		status() {
			return this.subscribed ? 'Subscribed' : 'Unsubscribed'
		}
	},
	methods: {
		onPrefToggle(e) {
			this.$emit('toggleCard', { id: this.id, newStatus: e.target.checked })
		}
	}
}
</script>

<style lang="scss">
@import "./pref-card";
</style>
