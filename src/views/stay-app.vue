<template>
  <div class="section-row">
    <div class="section-col stay-col">
    <section class="stay-app">
    <!-- <p>{{stays}}</p> -->

    <stay-list :stays="stays" />
  </section>
  </div>
  </div>
</template>

<script>
import stayList from '../components/stay-list.vue'

export default {
  components: {
    stayList
  },
  computed: {
    stays() {
      console.log(this.$store.getters.staysToShow.stays)
      return this.$store.getters.staysToShow.stays
    }
  },
}
</script>