<template>
	<aside class="v-sidebar">
		<div class="v-sidebar--img">
			<img src="../../app/assets/logo.png" alt="">
		</div>
		<v-subtitle :class-name="'v-sidebar--subtitle'">
			How much fun <br /> do you want in your life?
		</v-subtitle>
		<p class="v-sidebar--email">harry.simon@yahoo.com</p>
		<p class="v-sidebar--cta">
			<v-link
				to="https://www.youtube.com/watch?v=X62FRKpFk9Y"
				target="_blank"
				rel="noreferrer noopener">
				Subscribe
			</v-link>
			to all our fun sites to upgrade your fun progress
		</p>
		<div class="v-sidebar--info-wrapper">
			<v-info />
		</div>
	</aside>
</template>

<script>
import { VSubtitle, VLink } from 'shared/ui'
import { VInfo } from 'widgets'

export default {
	name: 'v-sidebar',
	components: {
		VSubtitle,
		VLink,
		VInfo
	}
}
</script>

<style lang="scss">
@import "./sidebar";
</style>
