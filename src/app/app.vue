<template>
  <v-bordered-container :wrapper-class="'app'" :container-class="'container'">
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
					@click="initiateUnsubscribeRoutine"
					:button-style="BUTTON_STYLES.SECONDARY"
					:text-size="TEXT_SIZES.MEDIUM"
				>
					Unsubscribe from all of the above. It's over
				</v-button>
			</footer>
		</div>
		<v-confirmation-modal
			:is-open="isModalOpen"
			:value="finalValue"
			@close="setModal(false)"
			@save="save"
		/>
	</v-bordered-container>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { VButton, VSubtitle, VModal, BUTTON_STYLES, TEXT_SIZES } from 'shared/ui'
import { VPrefCard } from 'features'
import { VConfirmationModal, VSidebar } from 'widgets'
import { VBorderedContainer } from 'shared/providers'

export default {
  components: {
		VConfirmationModal,
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
			routine: null,
			finalValue: 0
    }
  },
  methods: {
    ...mapActions(['toggleItem', 'unsubscribeAll']),
		...mapMutations(['updateHappinessValues']),
		initiateSaveRoutine() {
    	this.setModal(true)
			this.routine = 'save'
			this.finalValue = this.happinessDiff
		},
		initiateUnsubscribeRoutine() {
    	this.setModal(true)
			this.routine = 'unsubscribe'
			this.finalValue = 0 - this.happiness
		},
		save() {
			this.setModal(false)

			if (this.routine === 'save') {
				this.updateHappinessValues(this.calculatedNew)
			} else if (this.routine === 'unsubscribe') {
				this.unsubscribeAll()
				this.updateHappinessValues(0)
			}
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
  },
}
</script>

<style lang="scss">
@import './app';
</style>
