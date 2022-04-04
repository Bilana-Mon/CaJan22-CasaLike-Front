<template>
  <div class="main-layout section-row">
    <div class="section-col stay-col">
      <div class="loading-container" v-if="isLoading">
        <img
          class="img"
          style="-webkit-user-select: none;margin: auto;transition:background-color:white 300ms;"
          src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1649100298/casaLike/homepage/casalikeloader_nzvmn0.gif"
          alt="loading..."
        />
      </div>
      <section class="stay-app" v-else>
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
  async created() {
    await this.$store.dispatch({ type: 'loadStays' })
    // if (this.stays) {

    this.isLoading = false

    // }
  },
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    stays() {
      console.log(this.$store.getters.stays);
      let stays = this.$store.getters.stays
      console.log(stays.length);
      return stays
    }
  },
  methods: {
    getLoading() {
      this.isLoading = true;
    }
  },
  mounted() {
    this.getLoading()
  }
}
</script>
