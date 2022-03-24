<template>
  <li class="stay-preview-container">
    <custom-card>
    <template #header>
    <carousel :items-to-show="1">  
    <slide v-for="slide in stay.imgUrls" :key="slide">
        <img :src="`src/assets/imgs/stays/${slide}`" />
    </slide>
<template #addons>
      <navigation />
      <pagination />
    </template>
    </carousel>
    
    </template>

    <template #footer>
    <p>
      {{ getFormattedRate }}(
      <span>{{ stay.numOfReviews }}</span>)
    </p>
    <p>
      <span>{{ stay.roomType }}</span>·
      <span>{{ getLocation }}</span>
    </p>
    <p>
      <span>{{ stay.name }}</span>
    </p>
    <p>
      <span>{{ getFormattedPrice }}</span>
      <span>total</span>
    </p>
    <p>
      <a href="#">Price breakdown</a>
    </p>
    </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from './custom-card.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';



export default {
  name: 'stay-preview',
  props: {
    stay: Object,
  },
  components: {
    customCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,

  },
  data() {
    return {
     
      }
    
  },
  computed: {
    getFormattedRate() {
      let rate = +(this.stay.reviewScores.rating) / 20
      return rate
    },
    getLocation() {
      let stayStreet = this.stay.address.street.split(',')
      let formattedStayStreet = stayStreet[0]
      let city = this.stay.address.city
      let formattedLocation = formattedStayStreet + ' ' + city
      return formattedLocation
    },
    getFormattedPrice() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.stay.price)
    }
  },
}
</script>
<style>
.stay-preview-container img {
  width: 300px;
  height: 200px;
}
.stay-preview-container .slide {
  width: 300px;
  height: 200px;
}
</style>