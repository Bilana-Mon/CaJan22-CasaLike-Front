<template>
    <header :class="{ 'app-header scrolled': isScrolled, 'app-header': !isScrolled }">
        <div class="section-row">
            <div class="section-col">
                <nav :class="{ 'main-nav scrolled': isScrolled, 'main-nav': !isScrolled }">
                    <div @click="goHome" class="logo">
                        <svg
                            version="1.1"
                            id="logo-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="-258.4 397.4 43 47"
                            style="enable-background:new -258.4 397.4 43 47;"
                            xml:space="preserve"
                        >
                            <path
                                class="st0"
                                d="M-484,826.8c0,3.9-3.1,7-7,7c-1.8,0-3.6-0.7-4.9-2l0,0l-8.1-7.9l-8.1,7.9l0,0c-2.7,2.7-7.2,2.7-9.9,0
                            c-2-2.1-2.6-5.2-1.4-7.8l13.8-30.4l0.1-0.2c1.4-3,4.9-4.4,7.9-3c1.3,0.6,2.4,1.7,3,3l0.1,0.2l13.8,30.4
                            C-484.2,824.8-484,825.8-484,826.8z"
                            />
                            <path
                                class="st1"
                                d="M-223.9,444.3c-2.2,0-4.4-0.9-6-2.5l-7-6.9l-7,6.9c-3.3,3.3-8.7,3.3-12,0c-2.5-2.5-3.2-6.3-1.7-9.5l13.9-30.6
                            c1.7-3.8,6.2-5.4,9.9-3.7c1.6,0.8,3,2.1,3.7,3.7l0.1,0.2l13.8,30.4c0.5,1.1,0.8,2.3,0.8,3.5C-215.4,440.5-219.2,444.3-223.9,444.3z
                             M-236.9,431.3c0.4,0,0.8,0.2,1.1,0.4l8.1,8c2.1,2.2,5.6,2.2,7.8,0c1-1,1.6-2.4,1.6-3.9c0-0.8-0.2-1.6-0.5-2.3l-13.9-30.6
                            c-1-2.3-3.7-3.3-5.9-2.3c-1,0.4-1.8,1.3-2.3,2.3l-0.1,0.2l-13.8,30.4c-1.3,2.8,0,6,2.7,7.3c2.1,0.9,4.5,0.5,6.2-1.1l8.1-8
                            C-237.7,431.4-237.3,431.3-236.9,431.3z"
                            />
                            <path
                                class="st1"
                                d="M-236.9,434.3c-0.4,0-0.8-0.2-1.1-0.4c-3.4-3.3-6.8-7.2-6.8-10.7c0-4.4,3.5-7.9,7.9-7.9s7.9,3.5,7.9,7.9
                            c0,3.4-3.5,7.3-6.8,10.7C-236.1,434.1-236.5,434.3-236.9,434.3z M-236.9,418.3c-2.7,0-4.9,2.1-4.9,4.8v0.1c0,2.2,3,5.5,4.9,7.5
                            c1.9-2,4.9-5.3,4.9-7.5C-232,420.5-234.1,418.3-236.9,418.3C-236.8,418.3-236.9,418.3-236.9,418.3z"
                            />
                            <path
                                class="st1"
                                d="M-256.3,434.4c-0.8,0-1.5-0.7-1.5-1.5c0-0.2,0-0.4,0.1-0.6l13.9-30.6c1.7-3.8,6.2-5.4,9.9-3.7
                            c1.6,0.8,3,2.1,3.7,3.7l0.1,0.2l13.8,30.4c0.4,0.7,0,1.6-0.7,2s-1.6,0-2-0.7c0,0,0,0,0-0.1l-13.9-30.6c-1-2.3-3.7-3.3-5.9-2.3
                            c-1,0.4-1.8,1.3-2.3,2.3l-0.1,0.2l-13.8,30.4C-255.2,434.1-255.7,434.4-256.3,434.4z"
                            />
                        </svg>

                        <span class="brand-name">CasaLike</span>
                    </div>
                    <div class="nav-right">
                        <router-link class="link" to="/stay">Places to Stay</router-link>
                        <router-link class="link" to="/host">Become a Host</router-link>
                        <div @click="openLoginBar = !openLoginBar" class="login-bar">
                            <svg
                                id="hamburger"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                                />
                            </svg>
                            <div class="user-icon-container">
                                <div class="badge-counter" v-if="!isSeenByUser">1</div>
                                <svg
                                    class="user-icon"
                                    id="user-circle"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                        d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div v-if="openLoginBar" class="login-options">
                            <div class="login-btn">
                                <b>Messages</b>
                            </div>
                            <div class="notification-icon-container">
                                <div class="badge-counter" v-if="!isSeenByUser"></div>
                                <div class="login-btn" @click="goToOrders()">
                                    <b>Notifications</b>
                                </div>
                            </div>
                            <div class="login-btn">
                                <b>Trips</b>
                            </div>
                            <div class="login-btn">
                                <b>Wishlists</b>
                            </div>
                            <hr class="hr" />
                            <div class="login-btn">
                                <b>Host your home</b>
                            </div>
                            <div class="login-btn">
                                <b>Account</b>
                            </div>
                            <hr class="hr" />
                            <div class="login-btn">
                                <b>Help</b>
                            </div>
                            <div class="login-btn">
                                <b>Log out</b>
                            </div>
                        </div>
                    </div>
                </nav>
                <search />
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
    async created() {
        window.addEventListener('scroll', this.handleScroll);
        await this.$store.dispatch({ type: 'loadOrders' })
        this.orders = JSON.parse(JSON.stringify(this.$store.getters.orders))
        this.order = this.orders[this.orders.length - 1]
        this.isSeenByUser = this.order.isSeenByUser
        console.log(this.order)

    },
    data() {
        return {
            addSignupModal: false,
            openLoginBar: false,
            scrolled: false,
            isSeenByUser: true,
            order: null
        }
    },
    computed: {
        isScrolled() {
            return this.isStayDetailsPage || this.scrolled;
        },
        isStayDetailsPage() {
            return ['stay', 'stay-details', 'order-details', 'back-office'].includes(this.$route.name)
        }
    },
    methods: {
        goHome() {
            this.$router.push('/')
        },

        handleScroll() {
            this.scrolled = window.scrollY > 5
        },
        goToOrders() {
            this.$router.push('/order')
        }

    }
}
</script>
