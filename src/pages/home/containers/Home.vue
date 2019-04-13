<template>
  <div>
    <headerBar></headerBar>
    <searchBar></searchBar>
    <div>Rejilla de cards<card></card><card></card><card></card></div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import HeaderBar from '../../../components/HeaderBar'
import FooterBar from '../../../components/FooterBar'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
export default {
  name: 'Home',
  components: {
    Card,
    SearchBar,
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      datos: 'Hola mundo!'
    }
  }
}

</script>
