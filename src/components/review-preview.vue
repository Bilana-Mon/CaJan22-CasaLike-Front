<template>
  <section class="review-preview">
    <div class="chart-rating">
      <span>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: inline-block; height: 16px; width: 16px; fill: #ff385c;"
          class="st-current"
        >
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fill-rule="evenodd"
            class
          />
        </svg>
      </span>
      <span class="stay-details-rate">
        {{ getFormattedRate }} ·
        <a class href="#">{{ stay.numOfReviews }} reviews</a>
      </span>
    </div>
    <div class="chart-container">
      <ul>
        <li class="review-chart">
          <div class="chartrating1 rating-name">Cleanliness</div>
          <div class="rating-score">
            <progress :value="(this.stay.reviewScores.cleanliness) / 2" max="5" />
            <span>{{ this.stay.reviewScores.cleanliness / 2 }}</span>
          </div>
        </li>
        <li class="review-chart">
          <div class="chartrating2 rating-name">Communication</div>
          <div class="rating-score">
            <progress :value="(this.stay.reviewScores.communication) / 2" max="5" />
            <span>{{ this.stay.reviewScores.communication / 2 }}</span>
          </div>
        </li>

        <li class="review-chart">
          <div class="chartrating3 rating-name">Check-in</div>
          <div class="rating-score">
            <progress :value="(this.stay.reviewScores.checkin) / 2" max="5" />
            <span>{{ this.stay.reviewScores.checkin / 2 }}</span>
          </div>
        </li>

        <li class="review-chart">
          <div class="rating-name">Accuracy</div>
          <div class="rating-score">
            <progress :value="(this.stay.reviewScores.accuracy) / 2" max="5" />
            <span class="chartrating4">{{ this.stay.reviewScores.accuracy / 2 }}</span>
          </div>
        </li>

        <li class="review-chart">
          <div class="rating-name">Location</div>
          <div class="rating-score">
            <progress :value="(this.stay.reviewScores.location) / 2" max="5" />
            <span>{{ this.stay.reviewScores.location / 2 }}</span>
          </div>
        </li>

        <li class="review-chart">
          <div class="rating-name">Value</div>
          <div class="rating-score">
            <progress :value="(this.stay.reviewScores.value) / 2" max="5" />
            <span>{{ this.stay.reviewScores.value / 2 }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="review-preview-container">
      <ul>
        <li v-for="review in stay.reviews.slice(0, 6)" :key="review">
          <div class="review-header">
            <img
              v-if="this.reviewimgsUrls"
              class="host-thumbnail"
              :src="`https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648799097/casaLike/reviews/${this.getRandomImg()}.jpg`"
              onerror="this.onerror=null; this.src='./src/assets/host.png'"
              alt
            />
            <div class="review-info">
              <div class="review-name">{{ review.by.fullname }}</div>
              <div class="review-date">{{ getFormattedDate(review.at) }}</div>
            </div>
          </div>
          <p>{{ getReviewTxt(review.txt) }}</p>

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
        </li>
      </ul>
    </div>
    <div class="show-button">
      <a href="#">Show all {{ stay.reviews.length }} reviews</a>
    </div>
  </section>
</template>

<script>


export default {
  name: 'review-preview',
  props: {
    stay: Object,
  },

  data() {
    return {
      isTxtLong: false,
      reviewimgsUrls: ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014'],
    }
  },
  methods: {
    getFormattedDate(date) {
      let monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ]
      let monthNum = new Date(date).getMonth()
      let monthName = monthNames[monthNum - 1]
      let yearNum = new Date(date).getFullYear()
      let formattedDate = monthName + ' ' + yearNum
      return formattedDate

    },
    getReviewTxt(reviewTxt) {
      let formattedTxt = reviewTxt
      if (formattedTxt.length > 184) {
        formattedTxt = formattedTxt.slice(0, 185) + '...'
        this.isTxtLong = true
      } else {
        this.isTxtLong = false
      }
      return formattedTxt
    },
    getRandomImg() {
      let randImg = this.reviewimgsUrls[Math.floor(Math.random() * this.reviewimgsUrls.length)]
      // let filteredImgs = this.reviewimgsUrls.filter(imgUrl => imgUrl !== randImg)
      // this.reviewimgsUrls = filteredImgs
      // console.log(filteredImgs);
      return randImg
    },
  },
  computed: {
    getFormattedRate() {
      let rate = +(this.stay.reviewScores.rating) / 20
      return rate
    },
  },

}
</script>

