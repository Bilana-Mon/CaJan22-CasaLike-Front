<template>
  <section v-if="stay" class="stay-details">
    <p>{{ stay.name }}</p>
    <p>
      <span>{{ getFormattedRate }}</span> ·
      <a href="#">{{ stay.numOfReviews }} reviews</a> ·
      <a href="#">{{ stay.address.street }}</a>
    </p>
    <div class="stay-images-container">
      <div class="stay-images" v-for="i in stay.imgUrls" :key="i">
        <img :src="`src/assets/imgs/stays/${i}`" />
      </div>
    </div>
    <div>
      <div>
    <h2>
      <span>{{ stay.propertyType }}</span> hosted by
      <span>{{ stay.host.fullname }}</span>
    </h2>
    <p>
      <span>{{ stay.capacity }}</span> guests ·
      <span>{{ getNumBedrooms }}</span> ·
      <span>{{ getNumsBeds }}</span> ·
      <span>{{getNumsBathes}}</span> 
    </p>
    </div>
       <img class="small-img" :src="`src/assets/imgs/stays/${stay.imgUrls[0]}`" />
       </div>
  </section>
</template>

<script>

import { stayService } from '../services/stay.service'

export default {
  name: 'stay-details',
  // props: [''],
  components: {},
  async created() {
    const { id } = this.$route.params
    this.stay = await stayService.getById(id)
  },
  data() {
    return {
      stay: null
    }
  },
  methods: {},
  computed: {
    getFormattedRate() {
      let rate = +(this.stay.reviewScores.rating) / 20
      return rate
    },
    getNumBedrooms() {
      let numOfBedrooms = this.stay.bedrooms
      let msg = numOfBedrooms > 1 ? 'bedrooms' : 'bedroom'
      let formattedNumOfBedrooms = numOfBedrooms + ' ' + msg

      return formattedNumOfBedrooms
    },
    getNumsBeds() {
      let numOfBeds = this.stay.beds
      let msg = numOfBeds > 1 ? 'beds' : 'bed'
      let formattedNumOfBeds = numOfBeds + ' ' + msg

      return formattedNumOfBeds
    }, 
    getNumsBathes() {
      let numOfBathes = this.stay.bathrooms
      console.log(numOfBathes)
      let msg = numOfBathes > 1 ? 'bathes' : 'bath'
      let formattedNumOfBathes = numOfBathes + ' ' + msg

      return formattedNumOfBathes
    }
  },
  unmounted() { },
}
</script>
<style>
.stay-images-container {
  display: flex;
}
.stay-images img {
  height: 200px;
  width: 200px;
}

.stay-details .small-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>