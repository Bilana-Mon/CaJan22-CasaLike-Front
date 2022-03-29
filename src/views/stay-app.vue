<template>
  <div class="section-row" >
    <div class="section-col stay-col">
    <section class="stay-app">
    <!-- <p>{{stays}}</p> -->

    <stay-list v-if="stays" :stays="stays"  />
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
      console.log(this.$store.getters.stays)
      return this.$store.getters.stays
    }
  },
}
</script>