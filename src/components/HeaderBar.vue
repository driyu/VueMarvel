<template>
  <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">{{guildData.name}}</h4>
              <p class="text-muted">{{guildData.goal}}</p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <img src="img/osw-logo.jpg" alt="Logo Open Source Weekends" width="125" class="rounded mx-auto d-block">
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm" id="nav-bg-color-marvel">
        <div class="container d-flex justify-content-between">
          <a class="navbar-brand" href="./index.html">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1600px-MarvelLogo.svg.png" class="d-inline-block align-top" width="150" height="50" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  name: 'HeaderBar',
  data () {
    return {
      guildData: {
        name: 'Sobre Guild Ideas',
        goal: 'Somos una Guild que pertenece a Open Source Weekends, que ayuda a gente iniciada en la programación (y no tan iniciada) a darles conocimientos para que ellos puedan avanzar por si mismos.'
      }
    }
  }
}
</script>
