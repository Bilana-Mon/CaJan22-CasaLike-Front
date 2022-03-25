<template>
  <li @click="goToStayDetalis" class="stay-preview-container">
    <custom-card>
      <template #header>
        <el-carousel :autoplay="false" arrow="hover" trigger="click">
          <el-carousel-item v-for="item in stay.imgUrls" :key="item">
            <img class="stay-img-gallery" :src="`src/assets/imgs/stays/${item}`" />
          </el-carousel-item>
        </el-carousel>
      </template>

      <template #footer>
        <div class="rating">
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
          <p>
            {{ getFormattedRate }}
            
            (<span>{{ stay.numOfReviews }}</span>)
          </p>
        </div>
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
