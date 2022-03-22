<template>
  <app-modal>
  <section>
    <button @click="closeModal">X</button>

  </section>

  </app-modal>
</template>

<script>
import appModal from './app-modal.vue'


export default {

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