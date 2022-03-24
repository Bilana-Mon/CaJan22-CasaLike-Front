<template>
  <section v-if="stay" class="stay-details">
    <h1>Stay details</h1>
  </section>
</template>

<script>

import { stayService } from '../services/stay.service'

export default {
  name: 'stay-details',
  // props: [''],
  components: {},
  async created() { 
    const { id } = this.$route.params
    this.stay = await stayService.getById(id)
  },
  data() {
    return {
      stay: null
    }
  },
  methods: {},
  computed: {},
  unmounted() { },
}
</script>