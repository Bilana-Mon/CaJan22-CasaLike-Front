<template>
  <section class="homepage layout">
    <div class="homepage-img">
      <img alt="homepage-img" src="src/assets/imgs/homepage/homepage.jpg" />
      <div class="jingle">
        <p>Where would you like to feel at home today?</p>
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
  column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.destination-card {
  border-radius: 10px;
  object-fit: cover;
}

.jingle {
    font-family: airbnb-extrabold;
    font-size: 40px;
    text-align: center;
    color: white;
    position: absolute;
    transform: translate(10%, -360%);
    
}

svg {
    height:20px;
    width:20px;
}
</style>