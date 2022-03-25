<template v-if="stay">
<section class="map-container">
  <GMapMap class="map"
      :center="center"
      :zoom="10"
      map-type-id="terrain"

  >
  </GMapMap>
  </section>
</template>

<script>


export default {
 props: {
        stay: Object,
        

    },
  components: {},
  created() {
      this.center = {lat:this.stay.address.location.lan, lng:this.stay.address.location.lat}
      console.log(this.center)
  },
  data() {
    return {
       center: {}
    }
  },
  methods: {},
  computed: {
    
  },
  unmounted() {},
}
</script>
<style>

.map {
    width: 70rem;
    height: 30rem;
    margin: 0 auto
}
</style>