<template>
  <div class="editor-component">
    <h4>Tasks</h4>
    <div class="row-item">
      <div class="label">
        Title*:
      </div>
      <input type="text" :value="task.name"
             @change="updateTitle" />
    </div>
    <div class="row-item">
      <div class="label">
        Deadline*:
      </div>
      <date-picker v-model="currentDate" lang="en"
                   @change="updateDate"></date-picker>
    </div>
    <div class="row-item">
      <div class="label">
        Description:
      </div>
      <editor v-model="currentDesc"
              @onFocusOut="updateDescription">
      </editor>
    </div>
    <button @click="saveTask">Save</button>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import * as moment from 'moment'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'EditorComponent',
  components: { Editor, DatePicker },

  data: () => ({
    currentDate: new Date,
    currentDesc: ''
  }),

  computed: {
    task () {
      return this.$store.state.currentTask
    },
  },

  watch: {
    task (task) {
      let newDate = moment(task.due_date, 'DD MM YYYY').toDate()

      if (this.currentDate !== newDate)
        this.currentDate = newDate
      this.currentDesc = task.description ? task.description : ''
    }
  },
  methods: {
    saveTask () {
      this.$store.dispatch('saveTask')
    },
    updateTitle (e) {
      this.$store.commit('updateCurrentName', e.target.value)
    },
    updateDate (e) {
      this.$store.commit('updateCurrentDate', moment(e).format('DD MM YYYY'))
    },
    updateDescription () {
      this.$store.commit('updateCurrentDescription', this.currentDesc)
    }
  }
}
</script>

<style scoped lang="sass">
.editor-component
  display: flex
  flex-direction: column
  padding: 0 30px

  button
    align-self: flex-end
    height: 34px
    padding: 6px 10px
    font-size: 14px
    border-radius: 4px
    cursor: pointer
    background-color: #528CE0
    color: white
    border: none
    width: 80px

  .row-item
    display: flex
    align-items: flex-start

    &:not(:last-child)
      margin-bottom: 30px


    input
      height: 20px
      padding: 6px 10px
      font-size: 14px
      line-height: 1.4
      color: #555
      background-color: #fff
      border: 1px solid #ccc
      border-radius: 4px
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075)

    input[type="text"],
    textarea
      flex-grow: 1

    .label
      width: 200px
      min-width: 200px

</style>