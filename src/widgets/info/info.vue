<template>
	<ul class="v-info">
		<li>EntertainMeMore</li>
		<li>11807 Westheimer 550 PMB617</li>
		<li>Houston, TX 77077</li>
		<li class="v-info--links">
			<v-link to="mailto:email@entertainmemore.com">email@entertainmemore.com</v-link>
			<v-link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer noopener">Privacy Policy</v-link>
		</li>
	</ul>
</template>

<script>
import { VLink } from 'shared/ui'
export default {
	name: 'v-info',
	components: {
		VLink,
	}
}
</script>

<style lang="scss">
@import "./info";
</style>
