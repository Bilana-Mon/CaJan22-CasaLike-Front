<template>
    <section v-if="stay && order" class="reserve-card">
        <div class="card-info">
            <span class="card-price">{{ getFormattedPrice }}</span>
            <span class="night">/ night</span>
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
            <span class="card-rate">{{ getFormattedRate }}</span>·
            <a href="#" class="card-reviews">{{ stay.numOfReviews }} reviews</a>
        </div>
        <div class="input-container">
            <div class="input-container-checks" @click="isDateShown = !isDateShown">
                <div class="reserve-vsep">
                    <div class="card-check-in">CHECK-IN</div>
                </div>
                <div class="card-check-out">CHECKOUT</div>
                <div class="date-container">
                    <div>
                        <el-date-picker
                            v-model="order.dates"
                            @change="isReserved = true"
                            type="daterange"
                            range-separator
                            :start-placeholder="`${this.from}`"
                            :end-placeholder="`${this.to}`"
                            format="M/D/YYYY"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="container" @click="toggleSelect">
            <input type="checkbox" class="select-checkbox" />
            <label class="select-label" for="select-checkbox">
                <div class="num-of-guests-container">
                    <div class="guest-txt-container">
                        <div class="guest-head">Guests</div>
                        <div class="num-of-guests-box">{{ showNumOfGuests }}</div>
                    </div>
                    <div class="arrow-down-up-container">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"
                        >
                            <g fill="none">
                                <path
                                    d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </label>

            <div class="select-wrap">
                <ul v-if="selectOpen" class="select">
                    <li class="option">
                        <div class="options-list">
                            <div title="First">
                                <div class="option-adults option-title">Adults</div>
                                <div class="option-age">Age 13 or above</div>
                            </div>
                        </div>
                        <div class="btn-list">
                            <button
                                :disabled="order.capacity.adults === 1"
                                @click.stop="updateCount('adults', -1)"
                            >-</button>
                            <span class="count-span">{{ order.capacity.adults }}</span>
                            <button @click.stop="updateCount('adults', 1)">+</button>
                        </div>
                    </li>
                    <li class="option">
                        <div class="options-list">
                            <div title="Second">
                                <div class="option-child option-title">Children</div>
                                <div class="option-age2">Ages 2–12</div>
                            </div>
                        </div>
                        <div class="btn-list">
                            <button
                                :disabled="order.capacity.children === 0"
                                @click.stop="updateCount('children', -1)"
                            >-</button>
                            <span class="count-span">{{ order.capacity.children }}</span>
                            <button @click.stop="updateCount('children', 1)">+</button>
                        </div>
                    </li>
                    <li class="option">
                        <div class="options-list">
                            <div title="Third">
                                <div class="option-infants option-title">Infants</div>
                                <div class="option-age3">Under 2</div>
                            </div>
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
                            <div class="option-pets option-title" title="fourth">Pets</div>
                            <div class="reserve-pets-service">Bringing a service animal?</div>
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
                    >This place has a maximum of {{ stay.capacity }} guests, not including infants.</span>
                    <div class="close-popup" @click.stop="toggleSelect">Close</div>
                </ul>
            </div>
        </div>
        <button
            class="mouse-cursor-gradient-tracking"
            @mousemove="changeColor"
            @click.stop="checkOrder"
        >
            <span class="text-reserve" v-if="isReserved">Reserve</span>
            <span class="text-reserve" v-if="!isReserved">Check availability</span>
        </button>
        <div class="text-charging">You won't be charged yet</div>
        <div v-if="isReserved && order">
            <div class="pricing-night">
                <div class="text-decor">{{ getFormattedPrice }} x {{ getNumOfNights }} nights</div>
                <div>{{ getTotalPriceForNights }}</div>
            </div>
            <div class="pricing-night" v-if="this.stay.cleaningFee">
                <div class="fees">Cleaning fee:</div>
                <div>${{ this.stay.cleaningFee }}</div>
            </div>
            <div class="pricing-night" v-if="this.stay.securityDeposit">
                <div class="fees">Security deposit:</div>
                <div>${{ this.stay.securityDeposit }}</div>
            </div>
            <hr class="hr-reserve" />
            <div class="total-price">
                <div>Total:</div>
                <div>{{ getTotalIncludeFees }}</div>
            </div>
        </div>
        <div v-if="isInvalid">
            <div class="msg-pickdates">
                <div>Please pick dates for your reservation!</div>
                <button class="msg-btn-pickdates" @click="isInvalid = !isInvalid">Close</button>
            </div>
        </div>
    </section>
</template>

<script>

import { orderService } from '../services/order.service.js'

export default {
    name: 'reserve',
    props: {
        stay: Object,
    },
    async created() {
        this.order = await orderService.getEmptyOrder()
        this.order.stayId = this.stay._id
        this.order.location = this.$store.getters.filter.location
        if (!this.$store.getters.filter.location) {
            this.order.location = this.stay.address.street
        }
        this.order.capacity = { ...this.$store.getters.filter.countOfGuests }
        if (this.order.capacity.adults === 0) this.order.capacity.adults = 1;
        this.order.price = this.stay.price
        this.order.host = this.stay.host.fullname
        this.order.nameOfStay = this.stay.name
        if (this.stay.cleaningFee) this.order.cleaningFee = this.stay.cleaningFee
        if (this.stay.securityDeposit) this.order.securityDeposit = this.stay.securityDeposit
        if (this.$store.getters.filter.dates['0'] && this.$store.getters.filter.dates['1']) {
            this.order.dates['0'] = this.$store.getters.filter.dates['0']
            this.order.dates['1'] = this.$store.getters.filter.dates['1']
            this.isReserved = true;
        } else {
            this.order.dates['0'] = 'Add date'
            this.order.dates['1'] = 'Add date'
            this.isReserved = false;
        }
        this.from = this.formatFrom
        this.to = this.formatTo
    },
    data() {
        return {
            order: null,
            isInvalid: false,
            selectOpen: false,
            msg: '',
            isReserved: false,
            isFixed: false,
            isAbsoluteUp: false,
            isAbsoluteDown: false,
            isDateShown: false,
            from: '',
            to: '',
            isOpenModal: false,
        }
    },
    methods: {
        updateCount(age, diff) {
            switch (age) {
                case 'adults':
                    this.order.capacity.adults += diff;
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
        async checkOrder() {
            if (this.order.dates['0'] !== 'Add date' && this.order.dates['1'] !== 'Add date') {
                let order = { ...this.order }
                await this.$store.dispatch({ type: 'saveOrder', order })
                this.$emit('orderPending')
                // this.isOpenModal = true
                // this.$router.push('/order')
            } else {
                this.isInvalid = true;
            }
        },

    },

    computed: {
        getFormattedPrice() {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(this.stay.price)
        },
        getFormattedRate() {
            let rate = +(this.stay.reviewScores.rating) / 20
            return rate
        },

        formatFrom() {
            let startDate = this.order.dates['0']
            if (startDate === 'Add date') return 'Add date'
            const date1 = startDate.getDate()
            const date2 = startDate.getMonth() + 1;
            const date3 = startDate.getFullYear();
            const fullDate = date2 + "/" + date1 + "/" + date3
            return fullDate
        },
        formatTo() {
            let endDate = this.order.dates['1']
            if (endDate === 'Add date') return 'Add date'
            const date1 = endDate.getDate()
            const date2 = endDate.getMonth() + 1;
            const date3 = endDate.getFullYear();
            const fullDate = date2 + "/" + date1 + "/" + date3
            return fullDate
        },

        showNumOfGuests() {
            let guestsTxt = '1 guest'
            if (this.order.capacity.adults > 0) {
                guestsTxt = this.order.capacity.adults + this.order.capacity.children;
                if (guestsTxt === 1) guestsTxt = guestsTxt + ' ' + 'guest';
                else guestsTxt = guestsTxt + ' ' + 'guests';
            }
            return guestsTxt;
        },
        getNumOfNights() {
            let startDate = this.order.dates['0'].getTime()
            let endDate = this.order.dates['1'].getTime()
            let diffInTime = endDate - startDate;
            let diffInDays = diffInTime / (1000 * 3600 * 24)
            return diffInDays
        },
        getTotalPriceForNights() {
            let numOfNights = this.getNumOfNights;
            // if (numOfGuests === 0) numOfGuests = 1
            let totalPrice = numOfNights * (this.stay.price)
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalPrice)
        },
        getNumOfGuests() {
            let numOfGuests = this.order.capacity.adults + this.order.capacity.children
            if (numOfGuests === 0) numOfGuests = 1
            return numOfGuests
        },
        getTotalIncludeFees() {
            let totalExFees = this.stay.price * (this.getNumOfNights)
            let cleanFees = this.stay.cleaningFee
            if (!cleanFees) cleanFees = 0
            let securityDeposit = this.stay.securityDeposit
            if (!securityDeposit) securityDeposit = 0
            let totalInFees = totalExFees + cleanFees + securityDeposit
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalInFees)

        },
    },
}
</script>



