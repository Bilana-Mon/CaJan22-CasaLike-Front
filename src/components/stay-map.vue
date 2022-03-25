<template v-if="stay">
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 100vh"
  >
  </GMapMap>
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