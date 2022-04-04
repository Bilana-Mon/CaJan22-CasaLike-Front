<template>
  <div class="main-layout section-row">
    <div class="loading-container" v-if="isLoading">
      <img
        class="img"
        style="-webkit-user-select: none;margin: auto;transition:background-color:white 300ms;"
        src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1649100298/casaLike/homepage/casalikeloader_nzvmn0.gif"
        alt="loading..."
      />
    </div>
    <div class="section-col stay-col">
      <section v-if="stay && !isLoading" class="stay-details">
        <h1>{{ stay.name }}</h1>
        <div class="stay-rate-container">
          <div class="info-top-left">
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: inline-block; height: 14px; width: 14px; fill: #ff385c; margin-bottom: 2px;"
                class="st-current"
              >
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"
                  class
                />
              </svg>
            </span>
            <span class="stay-details-rating">{{ getFormattedRate }} ·</span>
            <a class="stay-details-rate" href="#">{{ stay.numOfReviews }} reviews</a>
            <b class="dot">·</b>
            <a class="stay-details-address" href="#">{{ stay.address.street }}</a>
          </div>
          <div class="icons-top">
            <div class="icon-share">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible; margin-right:6px;"
              >
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
                  <path d="M16 3v23V3z" />
                  <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
                </g>
              </svg> Share
            </div>
            <div class="icon-save">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;margin-right:6px"
              >
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                />
              </svg> Save
            </div>
          </div>
        </div>
        <div class="stay-images">
          <img
            v-for="i in stay.imgUrls"
            :key="i"
            :src="`https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648473465/casaLike/stays/${i}`"
          />
        </div>
        <div class="details-reserve-container">
          <div class="reserve-container">
            <reserve :stay="stay" @orderPending="isOpenModal = !isOpenModal"></reserve>
          </div>
          <app-modal class="order-modal" v-if="isOpenModal">
            <div class="portal-content">
              <button class="portal-close-btn" @click="isOpenModal = !isOpenModal">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"
                >
                  <path d="m6 6 20 20" />
                  <path d="m26 6-20 20" />
                </svg>
              </button>
              <h2 class="h2-modal">Bilana, Thanks For Your Reservation!</h2>
              <div class="order-status-pending-modal">
                <h3>Your Reservation Status is: Pending</h3>
                <div class="pending-img">
                  <img src="/src/assets/icons/wall-clock.png" alt />
                </div>
              </div>
            </div>
          </app-modal>
          <div class="stay-description-container">
            <div class="stay-desc-container">
              <div class="stay-type-container">
                <h2 class="stay-details h2">
                  <span>{{ stay.propertyType }}</span> hosted by
                  <span>{{ stay.host.fullname }}</span>
                </h2>
                <div class="stay-desc">
                  <span>{{ stay.capacity }}</span> guests ·
                  <span>{{ getNumBedrooms }}</span> ·
                  <span>{{ getNumsBeds }}</span> ·
                  <span>{{ getNumsBathes }}</span>
                </div>
              </div>
              <div class="small-img-container">
                <img
                  class="small-img"
                  :src="`https://res.cloudinary.com/dpwyhvd1e/image/upload/v1649008049/casaLike/reviews/kyrill.jpg`"
                />
              </div>
            </div>
            <hr />
            <special-features :stay="stay"></special-features>
            <hr />
            <span class="stay-summary">
              <p>{{ stay.summary.slice(0, 356) }}</p>
              <p>{{ stay.summary.slice(356, stay.summary.length) }}</p>
              <div class="show-more">
                Show more
                <svg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style="height: 12px; width: 12px; display: block; fill: var(--f-k-smk-x);"
                >
                  <path
                    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </span>
            <hr />
            <amenities-preview :stay="stay"></amenities-preview>
          </div>
        </div>
        <hr />
        <review-preview :stay="stay"></review-preview>
        <hr />
        <stay-map :stay="stay"></stay-map>
        <hr />
        <host :stay="stay"></host>
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
import specialFeatures from '../components/special-features.vue'
import host from '../components/host.vue'
import dateOpen from '../components/date-open.vue'

export default {
  name: 'stay-details',
  // props: [''],
  components: {
    reserve,
    stayMap,
    reviewPreview,
    amenitiesPreview,
    specialFeatures,
    host,
    dateOpen
  },
  async created() {
    const { id } = this.$route.params
    this.stay = await stayService.getById(id)
    this.isLoading = false
  },
  data() {
    return {
      stay: null,
      isOpenModal: false,
      isLoading: true
    }
  },
  methods: {
    getLoading() {
      this.isLoading = true;
    }
  },
  mounted() {
    this.getLoading()
  },
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




