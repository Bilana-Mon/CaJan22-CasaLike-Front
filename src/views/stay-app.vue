<template>
  <section class="stay-app">
    <login-signup v-if="addSignupModal" @close="addSignupModal=false"></login-signup>
  </section>
</template>

<script>
import loginSignup from './login-signup.vue'

export default {
  components: {
  loginSignup
  },
  created() {},

   data() {
    return {
        addSignupModal: false
    }
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>