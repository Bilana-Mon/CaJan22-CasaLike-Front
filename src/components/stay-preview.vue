<template>
    <li class="stay-preview-container">
      <custom-card>

        <template #header>
          <img v-for="i in stay.imgUrls" :key='i' :src="`src/assets/imgs/stays/${i}`" >       
        </template>

        <template #footer>
          <p>{{getFormattedRate}}(<span>{{stay.numOfReviews}}</span>)</p>
          <p><span>{{stay.roomType}}</span>·<span>{{getLocation}}</span></p>
          <p><span>{{stay.name}}</span></p>
          <p><span>{{getFormattedPrice}}</span> <span>total</span></p>
          <p><a href="#">Price breakdown</a></p>
          
        </template>

      </custom-card>
    </li>
</template>

<script>
import customCard from './custom-card.vue'

export default {
    name:'stay-preview',
 props: {
        stay: Object,
    },

    
  components: {
      customCard,
 

  },
  created() {

  },
  data() {
    return {
    }
  },
  methods: {
    
  },
  computed: {
   getFormattedRate() {
     let rate = +(this.stay.reviewScores.rating) /20 
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
     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.stay.price)
   },

  },
 
  unmounted() {},
}
</script>
<style>
.stay-preview-container img {
  width: 300px; 
  height: 200px;
}
</style>