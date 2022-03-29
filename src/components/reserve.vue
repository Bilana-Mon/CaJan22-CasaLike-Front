<template>
    <section v-if="stay" class="reserve-card">
        <div class="card-info">
            <div class="card-price">{{ getFormattedPrice }}</div>
            <div class="night">/ night</div>
            <div class="card-star">
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: inline-block; height: 14px; width: 14px; fill: #ff385c;"
                    class="st-current"
                >
                    <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fill-rule="evenodd"
                        class
                    />
                </svg>
            </div>
            <div class="card-rate">{{ getFormattedRate }}</div>·
            <a href="#" class="card-reviews">{{ stay.numOfReviews }} reviews</a>
        </div>
        <div class="input-container">
            <div class="input-container-checks" @click="isDateShown = !isDateShown">
                <div class="card-check-in">CHECK-IN</div>
                <div class="card-check-out">CHECKOUT</div>
            </div>
            <div v-if="isDateShown">
                <el-date-picker
                    v-model="filterBy.dates"
                    type="daterange"
                    range-separator
                    :start-placeholder="`${filterBy.dates.start}`"
                    :end-placeholder="`${filterBy.dates.end}`"
                    format="M/D/YYYY"
                    clearable
                    visible
                />
            </div>
            <div class="container" @click="toggleSelect">
                <input type="checkbox" class="select-checkbox" />
                <label class="select-label" for="select-checkbox">Add guests</label>
                <div class="select-wrap">
                    <ul v-if="selectOpen" class="select">
                        <li class="option">
                            <div class="options-list">
                                <a href="#" title="First">
                                    <div class="option-adults">Adults</div>
                                    <br />
                                    <div class="option-age">Age 13 or above</div>
                                </a>
                            </div>
                            <div class="btn-list">
                                <button
                                    :disabled="filterBy.countOfGuests.adults === 0"
                                    @click.stop="updateCount('adults', -1)"
                                >-</button>
                                <span class="count-span">{{ filterBy.countOfGuests.adults }}</span>
                                <button @click.stop="updateCount('adults', 1)">+</button>
                            </div>
                        </li>
                        <li class="option">
                            <div class="options-list">
                                <a href="#" title="Second">
                                    Children
                                    <br />Ages 2–12
                                </a>
                            </div>
                            <div class="btn-list">
                                <button
                                    :disabled="filterBy.countOfGuests.children === 0"
                                    @click.stop="updateCount('children', -1)"
                                >-</button>
                                <span class="count-span">{{ filterBy.countOfGuests.children }}</span>
                                <button @click.stop="updateCount('children', 1)">+</button>
                            </div>
                        </li>
                        <li class="option">
                            <div class="options-list">
                                <a href="#" title="Third">
                                    Infants
                                    <br />Under 2
                                </a>
                            </div>
                            <div class="btn-list">
                                <button
                                    :disabled="filterBy.countOfGuests.infants === 0"
                                    @click.stop="updateCount('infants', -1)"
                                >-</button>
                                <span class="count-span">{{ filterBy.countOfGuests.infants }}</span>
                                <button @click.stop="updateCount('infants', 1)">+</button>
                            </div>
                        </li>
                        <li class="option">
                            <div class="options-list">
                                <a href="#" title="fourth">
                                    Pets
                                    <br />
                                    <a class="pets-service" href="#">Bringing a service animal?</a>
                                </a>
                            </div>
                            <div class="btn-list">
                                <button
                                    :disabled="filterBy.countOfGuests.pets === 0"
                                    @click.stop="updateCount('pets', -1)"
                                >-</button>
                                <span class="count-span">{{ filterBy.countOfGuests.pets }}</span>
                                <button @click.stop="updateCount('pets', 1)">+</button>
                            </div>
                        </li>
                        <span
                            class="pet-msg"
                        >If you're lucky enough to have more than 2 pets with you, be sure to let your host know.</span>
                        <a class="pets-service" @click.stop="toggleSelect">Close</a>
                    </ul>
                </div>
            </div>
            <button
                class="mouse-cursor-gradient-tracking"
                @mousemove="changeColor"
                @click="sendMsg"
            >
                <span class="text-reserve">Check availability</span>
            </button>
        </div>
        <div v-if="isReserved">
            {{ msg }}
            <button class="msg-btn" @click="isReserved = !isReserved">Close</button>
        </div>
    </section>
</template>

<script>


export default {
    name: 'reserve',
    props: {
        stay: Object,

    },
    components: {},
    created() {
        if (this.$store.getters.filter.dates['0'] && this.$store.getters.filter.dates['1']) {
            this.filterBy.dates.start = this.$store.getters.filter.dates['0']
            this.filterBy.dates.start = this.getFormattedStart
            this.filterBy.dates.end = this.$store.getters.filter.dates['1']
            this.filterBy.dates.end = this.getFormattedEnd

        }
        this.filterBy.countOfGuests.adults = this.$store.getters.filter.countOfGuests.adults
        this.filterBy.countOfGuests.children = this.$store.getters.filter.countOfGuests.children
        this.filterBy.countOfGuests.infants = this.$store.getters.filter.countOfGuests.infants
        this.filterBy.countOfGuests.pets = this.$store.getters.filter.countOfGuests.pets
        this.filterBy.location = this.$store.getters.filter.location
    },
    data() {
        return {
            filterBy: {
                location: '',
                dates: {
                    end: 'Add dates',
                    start: 'Add dates',
                },
                countOfGuests: {
                    adults: 0,
                    children: 0,
                    infants: 0,
                    pets: 0
                },
            },
            isReserved: false,
            selectOpen: false,
            msg: '',

            isFixed: false,
            isAbsoluteUp: false,
            isAbsoluteDown: false,
            isDateShown: false
        }
    },
    methods: {
        updateCount(age, diff) {
            switch (age) {
                case 'adults':
                    this.filterBy.countOfGuests.adults += diff;
                    break;
                case 'children':
                    this.filterBy.countOfGuests.children += diff;
                    break;
                case 'infants':
                    this.filterBy.countOfGuests.infants += diff;
                    break;
                case 'pets':
                    this.filterBy.countOfGuests.pets += diff;
            }
        },

        changeColor(e) {
            let btn = document.querySelector('.mouse-cursor-gradient-tracking');
            btn.addEventListener('mousemove', e => {
                let rect = e.target.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                btn.style.setProperty('--x', x + 'px');
                btn.style.setProperty('--y', y + 'px');
            });
        },
        toggleSelect() {
            this.selectOpen = !this.selectOpen
        },
        sendMsg() {
            let adults = this.filterBy.countOfGuests.adults
            this.isReserved = true;

            if (adults >= 1 && this.filterBy.dates.start !== 'Add dates' && this.filterBy.dates.end !== 'Add dates') {
                this.msg = 'Your reservation was successful'
                let order = {...this.filterBy}
                this.$store.dispatch({ type: 'saveOrder', order })
                this.$router.push('/order/' + this.stay._id)
            } else {
                this.msg = 'Missing reservation details!'
            }
        },
    },
    computed: {
        getFormattedPrice() {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.stay.price)
        },
        getFormattedRate() {
            let rate = +(this.stay.reviewScores.rating) / 20
            return rate
        },
        getFormattedStart() {
            let startDate = this.filterBy.dates.start
            if (startDate === 'Add dates') return 'Add dates'
            // console.log(startDate)
            const date1 = startDate.getDate()
            console.log(date1)
            const date2 = startDate.getMonth() + 1;
            console.log(date2)
            const date3 = startDate.getFullYear();
            console.log(date3)
            const fullDate = date2 + "/" + date1 + "/" + date3
            return fullDate

        },
        getFormattedEnd() {
            let endDate = this.filterBy.dates.end
            if (endDate === 'Add dates') return 'Add dates'
            // console.log(startDate)
            const date1 = endDate.getDate()
            console.log(date1)
            const date2 = endDate.getMonth() + 1;
            console.log(date2)
            const date3 = endDate.getFullYear();
            console.log(date3)
            const fullDate = date2 + "/" + date1 + "/" + date3
            return fullDate
        }
    },
}
</script>

<style>
.msg-btn {
    background-color: white;
    border: none;
}
.msg-btn:hover {
    cursor: pointer;
}
</style>

