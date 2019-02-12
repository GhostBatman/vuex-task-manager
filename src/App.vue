<template>
  <div id="app">
    <div class="side-bar">
      <list-component />
    </div>
    <div class="editor">
      <editor-component />
    </div>
  </div>
</template>

<script>
import ListComponent from './components/ListComponent'
import EditorComponent from './components/EditorComponent'

export default {
  name: 'app',
  components: {
    EditorComponent,
    ListComponent
  }
}
</script>

<style scoped lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  display: flex
  padding-top: 30px

  .editor
    flex-grow: 1

  .side-bar
    width: 100%
    max-width: 300px
</style>
