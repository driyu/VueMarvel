<template>
  <div class="album py-5 bg-light">
        <div class="container">
          <h1 class="hero-name">{{ heroName }}</h1>
          <div class="row">
              <div class="col-sm-12 col-md-6">
                  <svg class="bd-placeholder-img img-width-card" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>{{ heroName }}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{{ heroName }}</text></svg>
              </div>
              <div class="col-sm-12 col-md-6">
                <p>{{ description }}</p>
              </div>
          </div>
          <div class="album py-5 bg-light card-general-hero">
            <div class="container">   
              <div class="row">
                <div class="card bg-light mb-3 card-width-hero">
                  <div class="card-header card-header-hero">Comics</div>
                    <div class="card-body">
                      <p class="card-text">{{ comics }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="album py-5 bg-light card-general-hero">
              <div class="container">   
                <div class="row">
                  <div class="card bg-light mb-3 card-width-hero">
                    <div class="card-header card-header-hero">History</div>
                      <div class="card-body">
                        <p class="card-text">{{ history }}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
import RwvArticleActions from "@/components/ArticleActions";
import { mapGetters } from 'vuex'

export default {
  name: 'CardDetails', 
  data:{
    heroName : 'Nombre del héroe',
    description : 'Bla bla bla',
    comics : ['comic1', 'comic2', 'comic3', 'comic4'],
    history: 'histroria',

  }, 
  props: {},
  methods: {},
  computed: mapGetters([
    'characters'
  ])
};
</script>




