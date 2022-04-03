<template>
  
  <section>
   <app-modal>
    <button @click="closeModal">X</button>
    <p>lili lala</p>
 </app-modal>
  </section>

 
</template>

<script>
import appModal from './app-modal.vue'


export default {
  name:'login-signup',

  components: {
      appModal
  },
  created() {

  },
   
  data() {
    return {}
  },
  methods: {
      closeModal() {
          this.$emit('close')
      }
  },
  computed: {},
  unmounted() {},
}
</script>