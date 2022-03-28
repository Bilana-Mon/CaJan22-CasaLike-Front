<template>
  <section v-if="stay">
   <img 
            class="host-thumbnail" 
            :src="stay.host.thumbnailUrl" 
            onerror="this.onerror=null; this.src='./src/assets/host.png'"
            alt="">
  </section>
</template>

<script>


export default {
    name:'host',
  props: {
        stay: Object
    },
  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>