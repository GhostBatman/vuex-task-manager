<template>
  <div class="list-component">
    <h4>Users</h4>
    <div class="menu">
      <div class="list-item" v-for="list in taskLists">
        <span class="list-name">{{ list.name }}</span>
        <ul>
          <li v-for="task in list.tasks"
              @click="setCurrent(list, task)">
            {{ task.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data'

export default {
  name: 'ListComponent',
  computed: {
    taskLists () {
      return this.$store.state.tasksList
    }
  },
  created () {
    this.$store.commit('loadTasks', data)
  },
  methods: {
    setCurrent (list, task) {
      this.$store.commit('setCurrent', { currentTask: task, currentList: list })
    }
  }
}
</script>

<style scoped lang="sass">
.list-component
  padding-left: 30px
  .menu
    border: 2px solid black
    padding: 15px

  .list-item
    li
      cursor: pointer

      &:hover
        color: #528CE0

</style>