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
    </div>
    <div class="chart-container"> 
    <ul>
        <li class="review-chart">
         <div class="chartrating1">Cleanliness</div>
         <progress :value="(this.stay.reviewScores.cleanliness) /2" max="5"/>
          <span>{{this.stay.reviewScores.cleanliness/2}}</span>
        </li>
        <li class="review-chart">
        <div class="chartrating2">Communication</div>
        <progress :value="(this.stay.reviewScores.communication) /2" max="5"/> 
        <span>{{this.stay.reviewScores.communication/2}}</span>
        </li>
          <li class="review-chart">
        <div class="chartrating3">Check-in</div>
         <progress :value="(this.stay.reviewScores.checkin) /2" max="5"/>
         <span>{{this.stay.reviewScores.checkin/2}}</span>
        </li>
           <li class="review-chart">
        <span>Accuracy</span>
           <progress :value="(this.stay.reviewScores.accuracy) /2" max="5"/>
           <div class="chartrating4">{{this.stay.reviewScores.accuracy/2}}</div>
        </li>
            <li class="review-chart">
        <div class="chartrating5">Location</div>
            <progress :value="(this.stay.reviewScores.location) /2" max="5"/>
             <span>{{this.stay.reviewScores.location/2}}</span>  
        </li>
               <li class="review-chart">
        <div class="chartrating6">Value</div>
            <progress :value="(this.stay.reviewScores.value) /2" max="5"/>
             <span>{{this.stay.reviewScores.value/2}}</span> 
        </li>
    </ul>
  </div>
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
  components: {
      
  },
  created() {
  },
  data() {
    return {
        isTxtLong: false,
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

.progress-value {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: .875rem;
  padding-bottom: .25rem;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 143px;
  color: #273238;
  height: 4px;
  display: flex;
  align-items: center;
  justify-content: center;


}

progress::-webkit-progress-bar {
  background-color: #eee;
}

progress::-webkit-progress-value {
  background-color: #273238;
}

progress::-moz-progress-bar {
  background-color: #eee;
}

</style>