<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
      </svg>
      <div class="card-body">
        <h4>{{heroName}}</h4>
        <p class="card-text">{{ text }}</p>
        <div class="d-flex justify-content-center align-items-center mx-auto">
          <div class="btn-group">
            <button type="button" class="btn btn-danger">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      heroName: 'Nombre del héroe',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula nulla, curabitur sollicitudin eu vitae condimentum lectus consequat. Iaculis volutpat platea pulvinar suscipit habitasse sociosqu eleifend tristique aptent, ultrices at rutrum sociis potenti duis ante dignissim, leo quis ad eget fermentum nibh sodales egestas. Vulputate per tempus blandit mauris posuere scelerisque nam faucibus, hac erat torquent tristique luctus iaculis magnis, etiam pulvinar in augue lacinia pellentesque porta.',
      photoThumbnail: ''
    }
  }
}

</script>

