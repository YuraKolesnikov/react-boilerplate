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
								v-for="item in mockData"
								:key="item.site"
								:id="item.id"
								:subscribed="item.subscribed"
								:caption="item.caption"
								:img-path="item.imgPath"
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
						@click="handleClick"
						:button-style="BUTTON_STYLES.SECONDARY"
						:text-size="TEXT_SIZES.MEDIUM">
						Unsubscribe from all of the above. It's over
					</v-button>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
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
			mockData: [
				{
					"id": 1,
					"site": "trainyrbrain",
					"caption": "True/False Quiz. Keep your brain fit!",
					"subscribed": true,
					"imgPath": "./assets/1.png"
				},
				{
					"id": 2,
					"site": "ynquiz",
					"caption": "Easy Yes/No Quiz. Distinguish facts from fiction!",
					"subscribed": true,
					"imgPath": "./assets/2.png"
				},
				{
					"id": 3,
					"site": "finditquiz",
					"caption": "Fun photo Quiz. Match words and names to pictures of objects and people.",
					"subscribed": false,
					"imgPath": "./assets/3.png"
				},
				{
					"id": 4,
					"site": "moviequizonline",
					"caption": "Movie Photo Quiz. Guess the film by a still!",
					"subscribed": true,
					"imgPath": "./assets/4.png"
				},
				{
					"id": 5,
					"site": "findsuperstar",
					"caption": "Celebrity Photo Quiz. Guess the star by a photo!",
					"subscribed": false,
					"imgPath": "./assets/5.png"
				},
				{
					"id": 6,
					"site": "whatcountry",
					"caption": "Geography quiz. Guess the country by the photo (fact/description)",
					"subscribed": false,
					"imgPath": "./assets/6.png"
				}
			]
		}
	},
	methods: {
		handleClick(e) {
			e.preventDefault()
			console.log('YEET')
		}
	}
}
</script>

<style lang="scss">
@import "./app";
</style>
