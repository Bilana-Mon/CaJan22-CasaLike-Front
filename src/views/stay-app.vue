<template>
  <section class="stay-app">
    <!-- <p>{{stays}}</p> -->

    <stay-list :stays="stays" />
  </section>
</template>

<script>
import stayList from '../components/stay-list.vue'

export default {
  components: {
    stayList
  },
  computed: {
    stays() {
      return this.$store.getters.staysToShow
    }
  },
}
</script>