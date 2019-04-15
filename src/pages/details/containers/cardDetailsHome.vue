<template>
<div>
  <headerBar />
  <carddetails />
  <footer />
</div>

</template>

<script>
import HeaderBar from '../../../components/HeaderBar'
import FooterBar from '../../../components/FooterBar'
import CardDetails from '../components/cardDetails'

export default {
  name: 'CardDetailsHome',
  components: {
    HeaderBar,
    CardDetails,
    Footer
  },
  props: {},
  methods: {}
};
</script>
