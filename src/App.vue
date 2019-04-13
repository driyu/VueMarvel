<template>
  <div id="app">
    <router-view/>
    <grid v-bind:cards="cards">
    </grid>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {cards: [1, 2, 3, 4, 5, 6]}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
