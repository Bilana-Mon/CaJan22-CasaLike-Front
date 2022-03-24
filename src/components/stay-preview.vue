<template>
  <li @click="goToStayDetalis" class="stay-preview-container">
    <custom-card>
    <template #header>
    <el-carousel :interval="5000" arrow="always">
     <el-carousel-item v-for="item in stay.imgUrls" :key="item">
    <img class="stay-img-gallery" :src="`src/assets/imgs/stays/${item}`" />
     </el-carousel-item>
     </el-carousel>
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

export default {
  name: 'stay-preview',
  props: {
    stay: Object,
  },
  components: {
    customCard,

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
  methods: {
    goToStayDetalis() {
      this.$router.push('/stay/' + this.stay._id)
    }
  }
}
</script>
