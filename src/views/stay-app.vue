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
  created() {
   this.$store.dispatch({ type: 'loadStays' })
  },
  computed: {
    stays() {
      console.log(this.$store.getters.stays);
      let stays = this.$store.getters.stays
      return stays
    }
  },
}
</script>