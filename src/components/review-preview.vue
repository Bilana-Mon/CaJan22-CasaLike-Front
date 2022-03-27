<template>
  <section class="review-preview">
      <p>
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
      <a class="stay-details-rate" href="#">{{ stay.numOfReviews }} reviews</a>
    </p>
    <ul>
        <li v-for="review in stay.reviews.slice(0,6)" :key="review">
        <p>{{review.by.fullname}}</p>
            <img 
            class="host-thumbnail" 
            :src="review.by.imgUrl" 
            onerror="this.onerror=null; this.src='./src/assets/host.png'"
            alt="">
            <div class="">{{getFormattedDate(review.at)}}</div>
          <p>{{getReviewTxt(review.txt)}}</p>
          <a href="#" v-if="isTxtLong">Show more</a>
        </li>
    </ul>
   <button class="show-btn">Show all {{stay.reviews.length}} reviews</button>
  </section>

</template>

<script>


export default {
    name: 'review-preview',
 props: {
    stay: Object,
  },
  components: {},
  created() {},
  data() {
    return {
        isTxtLong: false
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
     let monthName = monthNames[monthNum -1]
     let yearNum = new Date(date).getFullYear()
     console.log(yearNum)
     let formattedDate = monthName + ' ' + yearNum
      return formattedDate
      
    },
    getReviewTxt(reviewTxt) {
     let formattedTxt = reviewTxt
     if (formattedTxt.length > 184 ) {
        formattedTxt = formattedTxt.slice(0,185) + '...'
         this.isTxtLong = true
     } else {
         this.isTxtLong = false
     }
     return formattedTxt
    }
  },
  computed: {
    getFormattedRate() {
      let rate = +(this.stay.reviewScores.rating) / 20
      return rate
    },
   
  },
  unmounted() {},
}
</script>

<style >
.review-preview img {
   width:56px;
   height: 56px;
   border-radius: 50%;
   border: solid;
}

.review-preview li {
    list-style: none; 
}
</style>