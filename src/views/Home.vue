<template>
  <section class="homepage layout">
    <div class="homepage-img">
      <img alt="homepage-img" src="~@/assets/imgs/homepage/homepage.jpg" />
      <div class="jingle">
        <p>Where would you like to feel at home today?</p>
      </div>

      <h1>Ultimate Destinations</h1>
      <div class="destination-cards">
        <div class="destination-card" @click="goExplore()">
          <p>Porto</p>
          <img class="destination-img" alt="porto" src="~@/assets/imgs/homepage/porto.webp" />
        </div>

        <div class="destination-card" @click="goExplore()">
          <p>Maui</p>
          <img class="destination-img" alt="maui" src="~@/assets/imgs/homepage/maui.webp" />
        </div>

        <div class="destination-card" @click="goExplore()">
          <p>Hongkong</p>
          <img class="destination-img" alt="hongkong" src="~@/assets/imgs/homepage/hongkong.webp" />
        </div>

        <div class="destination-card" @click="goExplore()">
          <p>Montreal</p>
          <img class="destination-img" alt="montreal" src="~@/assets/imgs/homepage/montreal.webp" />
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

body {
  margin: 0;
  background-color: black,
}
img {
  height: 100vh;
  position: relative;
}
.destination-img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
}

.destination-cards {
  cursor: pointer;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.destination-card {
  border-radius: 10px;
  object-fit: cover;
}

.jingle {
  font-size: 30px;
    text-align: center;
    color: black;
    position: absolute;
    transform: translate(30%, -400%);
}
</style>