<template>
    <header class="app-header">
        <div class="section-row">
            <div class="section-col">
                <nav class="main-nav">
                    <div @click="goHome" class="logo">
                        <!-- <img class="logo-img" alt="logo-img" src="src/assets/airbnb/logo.svg" /> -->

                        <svg version="1.1" id="logo-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="-267 390.9 60 60" style="enable-background:new -267 390.9 60 60;" xml:space="preserve">
                        <path class="st0" d="M-217,435.9c0,3.9-3.1,7-7,7c-1.8,0-3.6-0.7-4.9-2l0,0l-8.1-7.9l-8.1,7.9l0,0c-2.7,2.7-7.2,2.7-9.9,0
                            c-2-2.1-2.6-5.2-1.4-7.8l13.8-30.4l0.1-0.2c1.4-3,4.9-4.4,7.9-3c1.3,0.6,2.4,1.7,3,3l0.1,0.2l13.8,30.4
                            C-217.2,433.9-217,434.9-217,435.9z"/>
                        <path class="st1" d="M-224,444.4c-2.2,0-4.4-0.9-6-2.5l-7-6.9l-7,6.9c-3.3,3.3-8.7,3.3-12,0c-2.5-2.5-3.2-6.3-1.7-9.5l13.9-30.6
                            c1.7-3.8,6.2-5.4,9.9-3.7c1.6,0.8,3,2.1,3.7,3.7l0.1,0.2l13.8,30.4c0.5,1.1,0.8,2.3,0.8,3.5C-215.5,440.6-219.3,444.4-224,444.4z
                             M-237,431.4c0.4,0,0.8,0.2,1.1,0.4l8.1,8c2.1,2.2,5.6,2.2,7.8,0c1-1,1.6-2.4,1.6-3.9c0-0.8-0.2-1.6-0.5-2.3l-13.9-30.6
                            c-1-2.3-3.7-3.3-5.9-2.3c-1,0.4-1.8,1.3-2.3,2.3l-0.1,0.2l-13.8,30.4c-1.3,2.8,0,6,2.7,7.3c2.1,0.9,4.5,0.5,6.2-1.1l8.1-8
                            C-237.8,431.5-237.4,431.4-237,431.4z"/>
                        <path class="st1" d="M-237,434.4c-0.4,0-0.8-0.2-1.1-0.4c-3.4-3.3-6.8-7.2-6.8-10.7c0-4.4,3.5-7.9,7.9-7.9s7.9,3.5,7.9,7.9
                            c0,3.4-3.5,7.3-6.8,10.7C-236.2,434.2-236.6,434.4-237,434.4z M-237,418.4c-2.7,0-4.9,2.1-4.9,4.8c0,0,0,0.1,0,0.1
                            c0,2.2,3,5.5,4.9,7.5c1.9-2,4.9-5.3,4.9-7.5C-232.1,420.6-234.2,418.4-237,418.4C-236.9,418.4-237,418.4-237,418.4z"/>
                        <path class="st1" d="M-256.4,434.5c-0.8,0-1.5-0.7-1.5-1.5c0-0.2,0-0.4,0.1-0.6l13.9-30.6c1.7-3.8,6.2-5.4,9.9-3.7
                            c1.6,0.8,3,2.1,3.7,3.7l0.1,0.2l13.8,30.4c0.4,0.7,0,1.6-0.7,2c-0.7,0.4-1.6,0-2-0.7c0,0,0,0,0-0.1l-13.9-30.6
                            c-1-2.3-3.7-3.3-5.9-2.3c-1,0.4-1.8,1.3-2.3,2.3l-0.1,0.2l-13.8,30.4C-255.3,434.2-255.8,434.5-256.4,434.5z"/>
                        </svg>

                        <span class="brand-name">CasaLike</span>
                    </div>
                    <div class="nav-right">
                        <router-link class="link" to="/stay">Places to stay</router-link>
                        <router-link class="link" to="/host">Become a host</router-link>
                        <ul class="clean-list login-bar">
                            <!-- <li class="login-btn" @click="addSignupModal = true">
                                <a>Signup</a>
                            </li>
                            <li class="login-btn" @click="addSignupModal = true">
                                <a>Login</a>
                            </li> -->
                        </ul>
                    </div>
                </nav>
                <search @setFilter="setFilter" />
                <login-signup v-if="addSignupModal" @close="addSignupModal = false"></login-signup>
            </div>
        </div>
    </header>
</template>

<script>

import loginSignup from './login-signup.vue'
import search from './search.vue'


export default {
    name: 'app-header',
    components: {
        loginSignup,
        search
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
        },
        setFilter(filterBy) {
            console.log(filterBy)
            this.$store.dispatch({ type: 'setFilter', filterBy })
        }
    },
    computed: {},
    unmounted() { },
}
</script>