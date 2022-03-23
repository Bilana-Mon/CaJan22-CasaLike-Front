<template>
  <li class="stay-preview-container">
    <custom-card>
    <template #header>
    <swiper :options="swiperOption" ref="swiper" class="swiper">
      <swiper-slide v-for="i in stay.imgUrls" :key="i">
        <button @click="$refs.swiper.swiperInstance.slidePrev()" class="swiper-button-prev">swipe my ass</button>
        <img :src="`src/assets/imgs/stays/${i}`" />
        <button @click="$refs.swiper.swiperInstance.slideNext()" class="swiper-button-next">swipe my ass</button>
      </swiper-slide>  
    </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'


export default {
  name: 'stay-preview',
  props: {
    stay: Object,
  },
  components: {
    customCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
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
</style>