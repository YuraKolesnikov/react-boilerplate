import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const entertainments = [
  {
    id: 1,
    site: 'trainyrbrain',
    caption: 'True/False Quiz. Keep your brain fit!',
    subscribed: true,
    imgPath: './assets/1.png',
    value: 15,
  },
  {
    id: 2,
    site: 'ynquiz',
    caption: 'Easy Yes/No Quiz. Distinguish facts from fiction!',
    subscribed: true,
    imgPath: './assets/2.png',
    value: 15,
  },
  {
    id: 3,
    site: 'finditquiz',
    caption:
      'Fun photo Quiz. Match words and names to pictures of objects and people.',
    subscribed: false,
    imgPath: './assets/3.png',
    value: 20,
  },
  {
    id: 4,
    site: 'moviequizonline',
    caption: 'Movie Photo Quiz. Guess the film by a still!',
    subscribed: false,
    imgPath: './assets/4.png',
    value: 15,
  },
  {
    id: 5,
    site: 'findsuperstar',
    caption: 'Celebrity Photo Quiz. Guess the star by a photo!',
    subscribed: true,
    imgPath: './assets/5.png',
    value: 20,
  },
  {
    id: 6,
    site: 'whatcountry',
    caption:
      'Geography quiz. Guess the country by the photo (fact/description)',
    subscribed: false,
    imgPath: './assets/6.png',
    value: 15,
  },
]

const initialHappiness = entertainments.reduce((acc, curr) => {
  if (curr.subscribed) {
    acc += curr.value
  }
  return acc
}, 0)

export default new Vuex.Store({
  state: {
    happiness: initialHappiness,
    entertainments,
  },
  mutations: {
    toggleItem(state, payload) {
      const { index, item } = payload
      state.entertainments.splice(index, 1, item)
    },
    unsubscribeAll(state) {
      state.entertainments = state.entertainments.map(i => ({
        ...i,
        subscribed: false,
      }))
    },
    updateHappinessValues(state, payload) {
      state.happiness = payload
    },
  },
  actions: {
    toggleItem({ commit, state }, { id, newStatus }) {
      const itemIndex = state.entertainments.findIndex(item => item.id === id)

      if (itemIndex >= 0) {
        const itemToUpdate = { ...state.entertainments[itemIndex], subscribed: newStatus }
        commit('toggleItem', { index: itemIndex, item: itemToUpdate })
      }
    },
    unsubscribeAll({ commit, state }) {
      commit('unsubscribeAll')
      commit('updateHappinessValues', 0)
    }
  },
  getters: {
    calculatedNew(state) {
      return state.entertainments.reduce((acc, curr) => {
        if (curr.subscribed) {
          acc += curr.value
        }
        return acc
      }, 0)
    }
  }
})
