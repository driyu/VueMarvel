<template>
  <div>
    <headerBar />
    <searchBar />
    <grid v-bind:cards="cards" />
    <footerBar />
  </div>
</template>

<script>
import HeaderBar from '../../../components/HeaderBar'
import SearchBar from '../components/SearchBar'
import Grid from '../components/Grid'
import FooterBar from '../../../components/FooterBar'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    SearchBar,
    Grid,
    FooterBar
  },
  data: () => {
    return {cards: [1, 2, 3, 4, 5, 6]}
  }
}

</script>
