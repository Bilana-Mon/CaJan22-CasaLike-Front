<template>

    <li class="stay-preview-container">
<custom-card>
     <template #header>
         <img :src="getImgUrl" >
     </template>
      <template #footer>
         <p><span>Name:</span> {{ stay.name }}</p>
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
      customCard
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
        getImgUrl() {
          return `src/assets/imgs/stays/${this.stay.imgUrls[0]}`
       }
  },
  unmounted() {},
}
</script>