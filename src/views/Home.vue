<template>
  <section class="homepage layout">
    <div class="homepage-img">
      <img alt="homepage-img" src="~@/assets/imgs/homepage/homepage.jpg">
      <div class="jingle">
      <p>Where would you like to feel at home today?</p>
    </div>

    <h1>Ultimate Rentals</h1>
    <div class="rental-cards">

      <div class="rental-card" @click="goExplore()">
        <p>Copenhagen</p>
        <img class="rental-img" alt="copenhagen" src="~@/assets/imgs/homepage/kbh.webp">
    
      </div>

      <div class="rental-card" @click="goExplore()">
        <p>Paris</p>
        <img class="rental-img" alt="paris" src="~@/assets/imgs/homepage/paris.webp">
      </div>

      <div class="rental-card" @click="goExplore()">
        <p>Hongkong</p>
        <img class="rental-img" alt="hongkong" src="~@/assets/imgs/homepage/hongkong.webp">
      </div>

      <div class="rental-card" @click="goExplore()">
        <p>San-Francisco</p>
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
<style>


body {
    margin: 0;
}
img{
  height: 100vh;
  position: relative;
}
.rental-img {
 width:300px;
 height:300px;
 border-radius: 10px;
}

.rental-cards {
  cursor:pointer;
  display: grid;
  column-gap:20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

}

.rental-card {
  border-radius: 10px;
  object-fit: cover;
}

h2 {
  text-transform: capitalize;
  font-size: 22px;
  
}
.jingle{
    font-size: 30px;
    text-align: center;
    color: black;
    position: absolute;
    transform: translate( 10%,-350% );
}
</style>