<template>
    <li class="stay-preview-container">
      <custom-card>

        <template #header>
          <img v-for="i in stay.imgUrls" :key='i' :src="`src/assets/imgs/stays/${i}`" >       
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
      customCard,
 

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
   
  },
 
  unmounted() {},
}
</script>
<style>
.stay-preview-container img {
  width: 300px; 
  height: 200px;
}
</style>