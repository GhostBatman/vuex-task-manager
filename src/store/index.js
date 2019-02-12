import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => new Vuex.Store({

  state: {
    currentTask: {},
    currentList: [],
    tasksList: []
  },
  getters: {},
  mutations: {
    saveTask (state) {
      let taskId = state.currentTask.id
      let listId = state.currentList.id
      for (let i = 0; i < state.tasksList.length; i++) {
        if (state.tasksList[i].id === listId) {
          for (let j = 0; j < state.tasksList.length; j++) {
            if (state.tasksList[i].tasks[j] === taskId) {
              state.tasksList[i].tasks[j] = state.currentTask
              break
            }
          }
        }
      }
    },
    loadTasks (state, payload) {
      state.tasksList = payload
    },
    setCurrent (state, payload) {
      state.currentTask = payload.currentTask
      state.currentList = payload.currentList
    },
    updateCurrentName (state, payload) {
      state.currentTask.name = payload
    },
    updateCurrentDate (state, payload) {
      state.currentTask.due_date = payload
    },
    updateCurrentDescription (state, payload) {
      state.currentTask.description = payload
    }
  },
  actions: {
    saveTask (state) {
      state.commit('saveTask')
    }
  },
})

