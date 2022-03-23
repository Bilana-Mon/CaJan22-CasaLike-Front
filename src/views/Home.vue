<template>
  <section class="home-page layout">
    <div class="homepage-img">
      <img alt="homepage-img" src="~@/assets/imgs/homepage/homepage.jpg">
      <div class="jingle">
      <h2>Where would you like to feel at home today?</h2>
    </div>

    <h1>Ultimate Rentals</h1>
    <div class="rental-cards">

      <div class="rental-card" @click="goExplore()">
        <h2>Copenhagen</h2>
        <img class="rental-img" alt="copenhagen" src="~@/assets/imgs/homepage/kbh.webp">
    
      </div>

      <div class="rental-card" @click="goExplore()">
        <h2>Paris</h2>
        <img class="rental-img" alt="paris" src="~@/assets/imgs/homepage/paris.webp">
      </div>

      <div class="rental-card" @click="goExplore()">
        <h2>Hongkong</h2>
        <img class="rental-img" alt="hongkong" src="~@/assets/imgs/homepage/hongkong.webp">
      </div>

      <div class="rental-card" @click="goExplore()">
        <h2>San-Francisco</h2>
        <img class="rental-img" alt="sanfrancisco" src="~@/assets/imgs/homepage/sanfran.webp">
      </div>

    </div>

    </div>
  
  </section>
</template>

<script>

export default {
  name: 'home-page',
  components: {

  },
  created() { },
  data() {
    return {}
  },
  methods: {
    goExplore() {
            this.$router.push('/stay')
        }
  },
  computed: {},
  unmounted() { },
}
</script>
