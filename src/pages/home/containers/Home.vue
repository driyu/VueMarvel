<template>
  <div>
    <headerBar>
    </headerBar>
    <searchBar></searchBar>
    <div>Rejilla de cards<card></card><card></card><card></card></div>
    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#" class="text-white"><i class="fas fa-arrow-up"></i> Volver arriba</a>
        </p>
        <p class="text-footer">WikiMarvel Guild Ideas - Design: <a href="https://twitter.com/mrcodedev/" target="_blank" class="text-danger">@MrCodedev</a></p>
        <p class="text-footer"><small>Los logos y material utilizados de Marvel para esta guild, son sólo de proposito educativo, no nos lucramos de ello y toda actividad que realizamos es totalmente gratuita. </small></p>
        <p class="text-footer"><small>Open Source Weekends - Guild Ideas 2019</small></p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderBar from '../../../components/HeaderBar'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
export default {
  name: 'Home',
  components: {
    Card,
    SearchBar,
    HeaderBar
  },
  data () {
    return {
      datos: 'Hola mundo!'
    }
  }
}

</script>
