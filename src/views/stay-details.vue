<template>
  <div class="section-row">
    <div class="section-col">
      <section v-if="stay" class="stay-details">
        <h1>{{ stay.name }}</h1>
        <p class="stay-rate-container">
          <span>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: inline-block; height: 14px; width: 14px; fill: #ff385c;"
              class="st-current"
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"
                class
              />
            </svg>
          </span>
          <span class="stay-details-rate">{{ getFormattedRate }}</span> ·
          <a class="stay-details-rate" href="#">{{ stay.numOfReviews }} reviews</a> ·
          <a class="stay-details-address" href="#">{{ stay.address.street }}</a>
        </p>
        <div class="stay-images">
          <img v-for="i in stay.imgUrls" :key="i" :src="`src/assets/imgs/stays/${i}`" />
        </div>
        <div>
          <reserve :stay="stay"></reserve>
        </div>
        <div class="stay-desc-container">
          <div class="stay-type-container">
            <h2 class="stay-details h2">
              <span>{{ stay.propertyType }}</span> hosted by
              <span>{{ stay.host.fullname }}</span>
            </h2>
            <p class="stay-desc">
              <span>{{ stay.capacity }}</span> guests ·
              <span>{{ getNumBedrooms }}</span> ·
              <span>{{ getNumsBeds }}</span> ·
              <span>{{ getNumsBathes }}</span>
            </p>
          </div>
          <div class="small-img-container">
            <img class="small-img" :src="`src/assets/imgs/stays/${stay.imgUrls[0]}`" />
          </div>
        </div>
        <div class="hr-first"></div>
        <amenities-preview :stay="stay"></amenities-preview>
        <div class="hr"></div>
        <review-preview :stay="stay"></review-preview>
        <div class="hr"></div>
        <stay-map :stay="stay"></stay-map>
      </section>
    </div>
  </div>
</template>

<script>

import { stayService } from '../services/stay.service'
import reserve from '../components/reserve.vue'
import stayMap from '../components/stay-map.vue'
import reviewPreview from '../components/review-preview.vue'
import amenitiesPreview from '../components/amenities-preview.vue'

export default {
  name: 'stay-details',
  // props: [''],
  components: {
    reserve,
    stayMap,
    reviewPreview,
    amenitiesPreview
  },
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

