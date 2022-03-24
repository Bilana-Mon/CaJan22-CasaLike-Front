<template>
  <section class="homepage layout">
    <div class="homepage-img">
      <img alt="homepage-img" src="src/assets/imgs/homepage/homepage.jpg" />
      <div class="jingle">
        <h3>Where would you like to feel at home today?</h3>
      </div>

      <h1>Ultimate Destinations</h1>
      <div class="destination-cards">
        <div class="destination-card" @click="goExplore()">
          <p>Porto</p>
          <img class="destination-img" alt="porto" src="src/assets/imgs/homepage/porto.webp" />
        </div>

        <div class="destination-card" @click="goExplore()">
          <p>Maui</p>
          <img class="destination-img" alt="maui" src="src/assets/imgs/homepage/maui.webp" />
        </div>

        <div class="destination-card" @click="goExplore()">
          <p>Hongkong</p>
          <img class="destination-img" alt="hongkong" src="src/assets/imgs/homepage/hongkong.webp" />
        </div>

        <div class="destination-card" @click="goExplore()">
          <p>Montreal</p>
          <img class="destination-img" alt="montreal" src="src/assets/imgs/homepage/montreal.webp" />
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
<style>


</style>