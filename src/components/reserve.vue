<template>
  <section v-if="stay" class="reserve-card">
    <p>
        <span>{{getFormattedPrice}}</span> / night
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
      <span>{{ getFormattedRate }}</span> ·
      <a href="#">{{ stay.numOfReviews }} reviews</a> 
    </p>
     <el-date-picker
                            v-model="dates"
                            type="daterange"
                            range-separator="|"
                            start-placeholder="Add dates"
                            end-placeholder="Add dates"
                        />
  </section>
</template>

<script>


export default {
  name:'reserve',
  props: {
      stay: Object,

  },
  components: {},
  created() {},
  data() {
    return {
        dates: {
     end: new Date(),
     start: new Date().getTime() - 3600 * 1000 * 24 * 7,
     }
    }
  },
  methods: {},
  computed: {
      getFormattedPrice() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.stay.price)
    },
    getFormattedRate() {
      let rate = +(this.stay.reviewScores.rating) / 20
      return rate
    },
  },
  unmounted() {},
}
</script>

<style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}
.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}
.demo-date-picker .block:last-child {
    border-right: none;
}
.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>