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
              <img class="destination-img" alt="porto" src="src/assets/imgs/homepage/porto.webp" />
              <div class="destination-text">
              <p>Porto</p>
            </div>
            </div>
            <div class="destination-card" @click="goExplore()">
              <img class="destination-img" alt="maui" src="src/assets/imgs/homepage/maui.webp" />
              <div class="destination-text">
              <p>Maui</p>
              </div>
            </div>
            <div class="destination-card" @click="goExplore()">
              <img
                class="destination-img"
                alt="hongkong"
                src="src/assets/imgs/homepage/hongkong.webp"
              />
              <div class="destination-text">
              <p>Hongkong</p>
              </div>
            </div>
            <div class="destination-card" @click="goExplore()">
              <img
                class="destination-img"
                alt="montreal"
                src="src/assets/imgs/homepage/montreal.webp"
              />
              <div class="destination-text">
              <p>Montreal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-row">
      <div class="section-col">
        <div class="homepage-img">
          <img alt="homepage-img" src="src/assets/imgs/homepage/hoster2.jpg" />
          <div class="jingle2">
            <h3>
              You can host
              anything,
              <br />anywhere.
            </h3>
          </div>
          <router-link class="link" to="/host">
            <button href="#/host" class="become-btn">Become a host</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section-row">
      <div class="section-col">
        
        <h1 class="section-heading">Exotic Retreats</h1>
        <div class="exotic-cards-container">
        <div class="card">
          <div class="card-image"></div>
          <div class="card-text">
            <h2>Hawaii</h2>
            <p class="card-desc">Escape to spectacular resort to relax in a coastal refuge</p>
          </div>
          <div class="card">
          <div class="card-image card2"></div>
          <div class="card-text card2">
            <h2>Seychelles</h2>
            <p class="card-desc">Get there for beautiful beaches and welcoming lagoons</p>
          </div>
          <div class="card">
          <div class="card-image card3"></div>
          <div class="card-text card3">
            <h2>Namibia</h2>
            <p class="card-desc">Explore the very best of Africa's raw landscapes</p>
          </div>
          <div class="card">
          <div class="card-image card4"></div>
          <div class="card-text card4">
            <h2>Iceland</h2>
            <p class="card-desc">It is a great place to see the aurora borealis</p>
          </div>
          </div>
        </div> 
      </div>
    </div>
        </div>
      </div>
    </div>
    <!-- <div class="destination-cards-container">
          <div class="destination-cards">
            <div class="destination-card" @click="goExplore()">
              <p>Porto</p>
              <img 
              class="destination-img" 
              alt="porto" 
              src="src/assets/imgs/homepage/porto.webp" />
            </div>
            <div class="destination-card" @click="goExplore()">
              <p>Maui</p>
              <img 
              class="destination-img" 
              alt="maui" 
              src="src/assets/imgs/homepage/maui.webp" />
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
    </div>-->
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