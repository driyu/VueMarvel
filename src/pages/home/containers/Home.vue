<template>
  <div>
    <headerBar />
    <searchBar />
    <grid v-bind:cards="cards" />
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
import SearchBar from '../components/SearchBar'
import Grid from '../components/Grid'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    SearchBar,
    Grid
  },
  data: () => {
    return {cards: [1, 2, 3, 4, 5, 6]}
  }
}

</script>
