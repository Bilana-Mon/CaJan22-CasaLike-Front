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
                    v-model="order.dates"
                    type="daterange"
                    range-separator
                    :start-placeholder="`${this.from}`"
                    :end-placeholder="`${this.to}`"
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
                                    :disabled="order.capacity.adults === 0"
                                    @click.stop="updateCount('adults', -1)"
                                >-</button>
                                <span class="count-span">{{ order.capacity.adults }}</span>
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
                                    :disabled="order.capacity.children === 0"
                                    @click.stop="updateCount('children', -1)"
                                >-</button>
                                <span class="count-span">{{ order.capacity.children}}</span>
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
                                    :disabled="order.capacity.infants === 0"
                                    @click.stop="updateCount('infants', -1)"
                                >-</button>
                                <span class="count-span">{{ order.capacity.infants }}</span>
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
                                    :disabled="order.capacity.pets === 0"
                                    @click.stop="updateCount('pets', -1)"
                                >-</button>
                                <span class="count-span">{{ order.capacity.pets }}</span>
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
                @click="checkOrder"
            >
                <span class="text-reserve">Reserve</span>
            </button>
        </div>
        <div v-if="isInValid">
          <p>Missing reservation details!</p> 
            <button class="msg-btn" @click="isInValid = !isInValid">Close</button>
        </div>
    </section>
</template>

<script>

import {orderService} from '../services/order.service.js'


export default {
    name: 'reserve',
    props: {
        stay: Object,

    },
    components: {},
    async created() {
        this.order = await orderService.getEmptyOrder()
        this.order.location = this.$store.getters.filter.location
        console.log(this.$store.getters.filter.location)
         if (this.$store.getters.filter.dates['0'] && this.$store.getters.filter.dates['1']) {
             this.order.dates.fromDate = this.$store.getters.filter.dates['0']
             this.order.dates.toDate = this.$store.getters.filter.dates['1']
         } else {
             this.order.dates.fromDate = 'Add dates'
             this.order.dates.toDate = 'Add dates'
         }
         this.order.price = this.stay.price
         this.order.capacity = {...this.$store.getters.filter.countOfGuests} 
         this.order.host = this.stay.host.fullname
         this.from = this.formatFrom
         this.to = this.formatTo

        console.log(this.order)

    },
    data() {
        return {
            order: null,
            isInValid: false,
            selectOpen: false,
            msg: '',

            isFixed: false,
            isAbsoluteUp: false,
            isAbsoluteDown: false,
            isDateShown: false,
            from: '',
            to:'',
        }
    },
    methods: {
        updateCount(age, diff) {
            switch (age) {
                case 'adults':
                    this.order.capacity.adults += diff;
                     console.log(this.order)
                    break;
                case 'children':
                    this.order.capacity.children += diff;
                    break;
                case 'infants':
                     this.order.capacity.infants += diff;
                    break;
                case 'pets':
                     this.order.capacity.pets += diff;
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
        checkOrder() {
            let adults = this.order.capacity.adults
            

            if (adults >= 1 && this.order.dates.fromDate !== 'Add dates' && this.order.dates.toDate !== 'Add dates') {
                this.msg = 'Your reservation was successful'
                let order = {...this.order}
                this.$store.dispatch({ type: 'saveOrder', order })
                this.$router.push('/order/' + this.stay._id)
            } else {
                this.isInValid = true;
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
        
        formatFrom() {
            let startDate = this.order.dates.fromDate
             if (startDate === 'Add dates') return 'Add dates'
            const date1 = startDate.getDate()
            const date2 = startDate.getMonth() + 1;
            const date3 = startDate.getFullYear();
            const fullDate = date2 + "/" + date1 + "/" + date3
            return fullDate
        },
           formatTo() {
            let endDate = this.order.dates.toDate
             if (endDate === 'Add dates') return 'Add dates'
             const date1 = endDate.getDate()
            const date2 = endDate.getMonth() + 1;
            const date3 = endDate.getFullYear();
            const fullDate = date2 + "/" + date1 + "/" + date3
            return fullDate
        },
        
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

