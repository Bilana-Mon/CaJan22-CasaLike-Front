<template>
    <header class="app-header">
        <div @click="goHome" class="logo">Casa<span>Like</span></div>
        <nav>
      <router-link class="link" to="/stay">Places to stay</router-link>
      <router-link class="link" to="/host">Become a host</router-link>
      <ul>
          <li @click="addSignupModal = true">
              <a>Signup</a>
          </li>
          <li @click="addSignupModal = true">
          <a>Login</a>
           </li>           
      </ul>
        </nav>
<login-signup v-if="addSignupModal" @close="addSignupModal = false"></login-signup>
    </header>
</template>

<script>

import loginSignup from './login-signup.vue'


export default {
    name:'app-header',
    components: {
        loginSignup
    },
    created() { },
    data() {
        return {
            addSignupModal: false
        }
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
    computed: {},
    unmounted() { },
}
</script>