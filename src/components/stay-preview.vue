<template>
  <li @click="goToStayDetalis" class="stay-preview-container">
    <custom-card>
      <template #header>
        <el-carousel :autoplay="false" arrow="hover" trigger="click">
          <el-carousel-item v-for="item in stay.imgUrls" :key="item">
            <img
              height="250"
              class="stay-img-gallery"
              :src="`https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648473465/casaLike/stays/${item}`"
            />
          </el-carousel-item>
        </el-carousel>
      </template>

      <template #footer>
        <div class="stay-desc">
          <div class="rating">
            <span class="rating-star">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: inline-block;
                  height: 14px;
                  width: 14px;
                  fill: #ff385c;
                "
                class="st-current"
              >
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"
                  class
                />
              </svg>
            </span>
            <div class="rating-value">
              {{ getFormattedRate }}
              <span>({{ stay.numOfReviews }} reviews)</span>
            </div>
          </div>
          <div class="stay-loc">
            <div class="room-type">{{ stay.roomType }}</div>
            <span>∙</span>
            <div class="stay-loc-name">{{ getLocation }}</div>
          </div>

          <div class="stay-name">{{ getStayName }}</div>
          <div class="stay-price">
            <div class="price-night">
              <b>
                <span class="price">{{ getFormattedPrice }}</span>
              </b> / night
            </div>
          </div>
        </div>
      </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from "./custom-card.vue";

export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  components: {
    customCard,
  },

  computed: {
    getFormattedRate() {
      let rate = +this.stay.reviewScores.rating / 20;
      return rate;
    },
    getLocation() {
      let stayStreet = this.stay.address.street.split(",");
      let formattedStayStreet = stayStreet[0];
      let city = this.stay.address.city;
      let formattedLocation = formattedStayStreet + " " + city;
      if (formattedLocation.length > 15) formattedLocation = formattedLocation.slice(0, 15)
      return formattedLocation;
    },
    getFormattedPrice() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(this.stay.price);
    },
    getStayName() {
      let stayName = this.stay.name
      if (stayName.length > 25) stayName = stayName.slice(0, 25)
      return stayName
    }
  },
  methods: {
    goToStayDetalis() {
      this.$router.push("/stay/" + this.stay._id);
    },
  },
};
</script>
