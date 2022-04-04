<template>
    <section class="main-layout homepage layout">
        <div :class="{ 'header-bg scrolled': isScrolled, 'header-bg': !isScrolled }"></div>
        <div class="section-row">
            <div class="section-col">
                <div class="homepage-img">
                    <img
                        alt="homepage-img"
                        src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648472873/casaLike/homepage/lake-house.jpg"
                    />
                    <div class="jingle">
                        <h3>Where would you like to feel at home today?</h3>
                    </div>
                    <router-link class="link" to="/stay">
                        <button href="#/stay" class="flexible-btn">
                            <span>I'm flexible</span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="section-row destination-row">
            <div class="section-col">
                <h1 class="section-heading">Popular Destinations</h1>
                <div class="destination-cards-container">
                    <div class="destination-cards">
                        <div class="destination-card" @click="goExplorePorto()">
                            <img
                                class="destination-img"
                                alt="porto"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648472873/casaLike/homepage/porto.webp"
                            />
                            <div class="destination-text">
                                <h2>Porto</h2>
                            </div>
                        </div>
                        <div class="destination-card" @click="goExploreMaui()">
                            <img
                                class="destination-img"
                                alt="maui"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648472873/casaLike/homepage/maui.jpg"
                            />
                            <div class="destination-text">
                                <h2>Maui</h2>
                            </div>
                        </div>
                        <div class="destination-card" @click="goExploreHongKong()">
                            <img
                                class="destination-img"
                                alt="hongkong"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648472873/casaLike/homepage/hongkong.webp"
                            />
                            <div class="destination-text">
                                <h2>Hong Kong</h2>
                            </div>
                        </div>
                        <div class="destination-card" @click="goExploreMontreal()">
                            <img
                                class="destination-img"
                                alt="montreal"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648472873/casaLike/homepage/montreal.jpg"
                            />
                            <div class="destination-text">
                                <h2>Montreal</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-row">
            <div class="section-col">
                <div class="homepage-img">
                    <img
                        alt="homepage-img"
                        src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648799357/casaLike/homepage/hoster2.jpg"
                    />
                    <div class="jingle2">
                        <h3>You can host anything, anywhere.</h3>
                    </div>
                    <router-link class="link" to="/host">
                        <button href="#/host" class="become-btn">Become a host</button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="section-row destination-row">
            <div class="section-col">
                <h1 class="section-heading">Exotic Retreats</h1>
                <div class="destination-cards-container">
                    <div class="destination-cards">
                        <div class="destination-card" @click="goExplore()">
                            <img
                                class="destination-img"
                                alt="porto"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648799428/casaLike/homepage/hawaii.jpg"
                            />
                            <div class="destination-text">
                                <h2>Hawaii</h2>
                                <p
                                    class="card-desc"
                                >Escape to spectacular resort to relax in a coastal refuge</p>
                            </div>
                        </div>
                        <div class="destination-card" @click="goExplore()">
                            <img
                                class="destination-img"
                                alt="maui"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648799394/casaLike/homepage/seychelles.jpg"
                            />
                            <div class="destination-text">
                                <h2>Seychelles</h2>
                                <p
                                    class="card-desc"
                                >Get there for beautiful beaches and welcoming lagoons</p>
                            </div>
                        </div>
                        <div class="destination-card" @click="goExplore()">
                            <img
                                class="destination-img"
                                alt="hongkong"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648799387/casaLike/homepage/namibia.jpg"
                            />
                            <div class="destination-text">
                                <h2>Namibia</h2>
                                <p
                                    class="card-desc"
                                >Explore the very best of Africa's raw landscapes</p>
                            </div>
                        </div>
                        <div class="destination-card" @click="goExplore()">
                            <img
                                class="destination-img"
                                alt="montreal"
                                src="https://res.cloudinary.com/dpwyhvd1e/image/upload/v1648799371/casaLike/homepage/iceland.jpg"
                            />
                            <div class="destination-text">
                                <h2>Iceland</h2>
                                <p class="card-desc">It is a great place to see the aurora borealis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'home-page',
    components: {

    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.filterBy = this.$store.getters.filter
    },
    data() {
        return {
            filterBy: null,
            isScrolled: false,
            city: '',
        }
    },
    methods: {
        goExplorePorto() {
            this.city = 'porto'
            this.goExplore()
        },
        goExploreMaui() {
            this.city = 'maui'
            this.goExplore()
        },
        goExploreHongKong() {
            this.city = 'hong kong '
            this.goExplore()
        },
        goExploreMontreal() {
            this.city = 'montreal'
            this.goExplore()
        },
        goExplore() {

            let filterBy = JSON.parse(JSON.stringify(this.filterBy))
            filterBy.location = this.city
            this.$store.dispatch({ type: 'setFilter', filterBy })
            this.$router.push(`/stay?location=${filterBy.location}`)

            // 
        },
        handleScroll(event) {
            // console.log(window.scrollY)
            if (window.scrollY > 5) this.isScrolled = true
            else this.isScrolled = false
        }
    },
    computed: {},
    unmounted() { },
}
</script>
