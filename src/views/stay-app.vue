<template>
  <section class="stay-app">
   <p>{{stays}}</p>

    <!-- <stay-list :stays="stays" /> -->
   
    
  </section>
</template>

<script>
import stayList from '../components/stay-list.vue'

export default {
  components: {
    stayList
  },
  created() { },

  data() {
    return {

      
    }
  },
  methods: {},
  computed: {
    stays() {
      return this.$store.getters.staysToShow
    }
  },
  unmounted() { },
}
</script>