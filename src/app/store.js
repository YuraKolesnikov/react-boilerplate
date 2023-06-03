import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oldHappinessValue: 0,
    newHappinessValue: 0,
    data: [
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
        subscribed: true,
        imgPath: './assets/4.png',
        value: 15,
      },
      {
        id: 5,
        site: 'findsuperstar',
        caption: 'Celebrity Photo Quiz. Guess the star by a photo!',
        subscribed: false,
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
    ],
  },
  mutations: {
    toggleItem(state, payload) {
      const { id, newStatus } = payload
      const itemIndex = state.data.findIndex(item => item.id === id)

      if (itemIndex >= 0) {
        const itemToUpdate = { ...state.data[itemIndex], subscribed: newStatus }
        state.data.splice(itemIndex, 1, itemToUpdate)
      }
    },
    unsubscribeAll(state) {
      state.data = state.data.map(i => ({
        ...i,
        subscribed: false,
      }))
    },
    updateHappinessValues(state, payload) {
      state.oldHappinessValue = payload.oldHappinessValue
      state.newHappinessValue = payload.newHappinessValue
    },
  },
})
