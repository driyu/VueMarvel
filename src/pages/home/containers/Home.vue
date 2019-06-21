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
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    SearchBar,
    Grid,
    FooterBar
  },
  data: () => {
    return { cards: [] }
  },
  mounted () {
    this.fetchAllComics()
  },
  methods: {
    ...mapActions([ 'fetchAllComics' ]),
    ...mapState({ card: (state) => state.comics })
  }
}
</script>
