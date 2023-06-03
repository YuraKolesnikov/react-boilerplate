<template>
  <v-bordered-container :wrapper-class="'app'" :container-class="'container'">
		<v-sidebar />
		<div class="content">
			<header class="header">
				<h1 class="title">Ok, let's change your preferences</h1>
				<v-subtitle
				>To unsubscribe, please uncheck the appropriate box(es).</v-subtitle
				>
			</header>
			<main class="main">
				<div>
					<div class="cards">
						<v-pref-card
							v-for="item in entertainments"
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
					@click="initiateSaveRoutine"
					:button-style="BUTTON_STYLES.PRIMARY"
					:text-size="TEXT_SIZES.LARGE"
					:disabled="happinessDiff === 0"
				>
					Save changes
				</v-button>
				<v-button
					@click="unsubscribeAll"
					:button-style="BUTTON_STYLES.SECONDARY"
					:text-size="TEXT_SIZES.MEDIUM"
				>
					Unsubscribe from all of the above. It's over
				</v-button>
			</footer>
		</div>
		<v-modal :is-open="isModalOpen" @close="setModal(false)">
			<div class="modal-body">
				<h2 class="modal-header">Hurrah!</h2>
				<p class="modal-caption">Your subscription preferences have been succesfully saved</p>
				<div class="modal-happiness-diff">
					<p :class="numClassList">{{happinessDiff}}%</p>
					<p class="modal-happiness-caption">{{savedMessage}}</p>
				</div>
			</div>
			<div class="modal-footer">
				<v-button
					@click="save"
					:button-style="BUTTON_STYLES.PRIMARY"
					:text-size="TEXT_SIZES.LARGE">
					Ok, great!
				</v-button>
			</div>
		</v-modal>
	</v-bordered-container>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { VButton, VSubtitle, VModal, BUTTON_STYLES, TEXT_SIZES } from 'shared/ui'
import { VPrefCard } from 'features'
import { VSidebar } from 'widgets'
import { VBorderedContainer } from 'shared/providers'

export default {
  components: {
    VSidebar,
    VButton,
		VModal,
    VSubtitle,
    VPrefCard,
		VBorderedContainer,
  },
  data() {
    return {
      BUTTON_STYLES,
      TEXT_SIZES,
			isModalOpen: false,
    }
  },
  methods: {
    ...mapActions(['toggleItem', 'unsubscribeAll']),
		...mapMutations(['updateHappinessValues']),
		initiateSaveRoutine() {
    	this.isModalOpen = true
		},
		save() {
			this.updateHappinessValues(this.calculatedNew)
			this.isModalOpen = false
		},
		setModal(modalState) {
    	this.isModalOpen = modalState
		}
  },
  computed: {
    ...mapState(['entertainments', 'happiness']),
		...mapGetters(['calculatedNew']),
		happinessDiff() {
    	return this.calculatedNew - this.happiness
		},
		numClassList() {
    	return ['modal-happiness-num', this.happinessDiff > 0 ? 'modal-happiness-num--green' : 'modal-happiness-num--red']
		},
		savedMessage() {
    	return this.happinessDiff > 0 ? 'Fun gained :)' : 'Fun lost :('
		}
  },
}
</script>

<style lang="scss">
@import './app';
</style>
