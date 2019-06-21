<template>
<div class="container">
  <div class="group-container align-middle">
    <span class="font-weight-lighter">Lista de tarjetas: &nbsp;</span>
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        12
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">12</a>
        <a class="dropdown-item" href="#">18</a>
        <a class="dropdown-item" href="#">24</a>
      </div>
    </div>
  </div>

  <div class="row">
    <card v-for="(card,index) in cards" v-bind:key="index" v-bind:card="card" />
  </div>
<span></span>
  <div class="button-group">
    <button type="button" class="btn btn-danger btn-lg btn-pagination">&lt; Previous</button>
    <span class="blank-space"></span>
    <button type="button" class="btn btn-danger btn-lg btn-pagination">Next ></button>
  </div>
</div>
</template>

<script>
import Card from './Card.vue'

export default {
  data () {
    return {}
  },
  name: 'Grid',
  props: ['cards'],
  components: {
    Card
  },
 
}
</script>
