<template>
	<div class="app">
		<div class="container">
			<v-sidebar />
			<div class="content">
				<header class="header">
					<h1 class="title">Ok, let's change your preferences</h1>
					<v-subtitle>To unsubscribe, please uncheck the appropriate box(es).</v-subtitle>
				</header>
				<main class="main">
					<div>
						<div class="cards">
							<v-pref-card
								v-for="item in data"
								:key="item.site"
								:id="item.id"
								:subscribed="item.subscribed"
								:caption="item.caption"
								:img-path="item.imgPath"
								@toggleCard="toggleItem"
							/>
						</div>
					</div>
				</main>
				<footer class="footer">
					<v-button
						@click="handleClick"
						:button-style="BUTTON_STYLES.PRIMARY"
						:text-size="TEXT_SIZES.LARGE">
						Save changes
					</v-button>
					<v-button
						@click="unsubscribeAll"
						:button-style="BUTTON_STYLES.SECONDARY"
						:text-size="TEXT_SIZES.MEDIUM">
						Unsubscribe from all of the above. It's over
					</v-button>
				</footer>
			</div>
		</div>
		{{data}}
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { VButton, VSubtitle, BUTTON_STYLES, TEXT_SIZES, } from 'shared/ui'
import { VPrefCard } from 'features'
import { VSidebar } from 'widgets'

export default {
	components: {
		VSidebar,
		VButton,
		VSubtitle,
		VPrefCard,
	},
	data() {
		return {
			BUTTON_STYLES,
			TEXT_SIZES,
		}
	},
	methods: {
		...mapMutations(['toggleItem', 'unsubscribeAll']),
		handleClick(e) {
			e.preventDefault()
			console.log('YEET')
		}
	},
	computed: {
		...mapState(['data']),
	},
}
</script>

<style lang="scss">
@import "./app";
</style>
