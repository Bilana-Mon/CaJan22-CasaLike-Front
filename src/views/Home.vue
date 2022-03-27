<template>
  <div :class="{ 'header-bg scrolled': isScrolled, 'header-bg': !isScrolled }"></div>
  <section class="homepage layout">
    <div class="section-row">
      <div class="section-col">
        <div class="homepage-img">
          <img alt="homepage-img" src="src/assets/imgs/homepage/lake-house.jpg" />
          <div class="jingle">
            <h3>Where would you like to feel at home today?</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="section-row">
      <div class="section-col">
        <h1 class="section-heading">Popular Destinations</h1>
        <div class="destination-cards-container">
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
              <img
                class="destination-img"
                alt="hongkong"
                src="src/assets/imgs/homepage/hongkong.webp"
              />
            </div>
            <div class="destination-card" @click="goExplore()">
              <p>Montreal</p>
              <img
                class="destination-img"
                alt="montreal"
                src="src/assets/imgs/homepage/montreal.webp"
              />
            </div>
          </div>
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
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      isScrolled: false
    }
  },
  methods: {
    goExplore() {
      this.$router.push(`/stay`)
      // ?location=${this.filterBy.location}
    },
    handleScroll(event) {
      // console.log(window.scrollY)
      if (window.scrollY > 5) this.isScrolled = true
      else this.isScrolled = false
    }
  },
  computed: {},
  unmounted() { },
}
</script>
<style>
</style>