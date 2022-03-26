<template v-if="stay">
  <section class="map-container">
    <h2>Where you’ll be</h2>
    <p>{{ stay.address.street }}</p>
    <GMapMap class="map" :center="center" :zoom="10" map-type-id="terrain">
      <GMapMarker :options="markerOptions" />
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
    this.center = { lat: this.stay.address.location.lan, lng: this.stay.address.location.lat }
    console.log(this.center)
    this.icon = {
      path: "M8.602 1.147l.093.08 7.153 6.914-.696.718L14 7.745V14.5a.5.5 0 0 1-.41.492L13.5 15H10V9.5a.5.5 0 0 0-.41-.492L9.5 9h-3a.5.5 0 0 0-.492.41L6 9.5V15H2.5a.5.5 0 0 1-.492-.41L2 14.5V7.745L.847 8.86l-.696-.718 7.153-6.915a1 1 0 0 1 1.297-.08z"
      ,
      fillColor: '#FF0000',
      fillOpacity: .6,
      strokeWeight: 0,
      scale: 1
    },
      this.markerOptions = { position: this.center, label: "", title: "Exact location provided after booking", icon: this.icon };
  },
  data() {
    return {
      center: {},
      markerOptions: {},
      icon: {}

    }
  },
  methods: {},
  computed: {

  },
  unmounted() { },
}
</script>


