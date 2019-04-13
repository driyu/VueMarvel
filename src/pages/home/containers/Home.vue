<template>
  <div class="app">
    <p>Componente header</p>
    <p>Componente SearchBar</p>
    <div>Grid<card></card></div>
    <p>footer</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      datos: 'Hola mundo!'
    }
  }
}

</script>

<style>
.hero {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
