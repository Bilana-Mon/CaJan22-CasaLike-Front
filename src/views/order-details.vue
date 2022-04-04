<template>
    <section class="section-row">
        <!-- <section class="order-details-container section-col" v-if="order"> -->
        <!-- <div class="order-details-success">
                <h1>Your Order Details</h1>
                <p>We thank you, for your reservation! Here are the details about your order:</p>
                <div class="order-details-desc">
                    <div class="stay-order-details">
                        <span>Name of the stay:</span>
                        <span>{{ order.nameOfStay }}</span>
                        <span>Address of the stay:</span>
                        <span>{{ order.location }}</span>
                        <span>The host:</span>
                        <span>{{ order.host }}</span>
                    </div>
                    <hr class="hr" />
                    <span>From:</span>
                    <span>{{ getFormattedDate(order.dates['0']) }}</span>
                    <span>To:</span>
                    <span>{{ getFormattedDate(order.dates['1']) }}</span>
                    <hr class="hr" />
                    <div class="guests-order-details">
                        <span>Number of guests:</span>
                        <span>Adults:</span>
                        <span>{{ order.capacity.adults }}</span>
                        <span v-if="order.capacity.children">
                            Children:
                            <span>{{ order.capacity.children }}</span>
                        </span>
                        <span v-if="order.capacity.infants">
                            Infants:
                            <span>{{ order.capacity.infants }}</span>
                        </span>
                        <span v-if="order.capacity.pets">
                            Pets:
                            <span>{{ order.capacity.pets }}</span>
                        </span>
                    </div>
                    <hr class="hr" />
                    <div class="pricing-for-order">
                        <span>Price per night:</span>
                        <span>{{ getFormattedPrice(this.order.price) }} / night</span>
                        <span>
                            {{ getFormattedPrice(this.order.price) }}
                            <span>X</span>
                            <span>{{ getNumOfNights }} nights</span>
                        </span>

                        <span>Fees:</span>
                        <span>{{ getFormattedPrice(this.order.fees) }}</span>
                        <hr class="hr" />
                        <span>
                            Total:
                            <span>{{ getTotal }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>-->
        <section v-if="!order"></section>
        <!-- <easy-spinner /> -->
        <section class="pending-reservation-container section-col" v-if="order">
            <div class="pending-status-container" v-if="!isApproved">
                <app-modal>
                    <button @click="closeModal">X</button>
                <h2>Reservation Status: Pending</h2>
                <div class="pending-img">
                    <img src="/src/assets/icons/wall-clock.png" alt />
                </div>
                </app-modal>
            </div>
            <div class="pending-status-container" v-if="isApproved">
                <h2>{{ order.user }}, thank you for your reservation!</h2>
                <div class="pending-img">
                    <img src="/src/assets/icons/compelete.png" alt />
                </div>
            </div>
            <h3 v-if="isApproved">Enjoy your trip!</h3>
            <h3>Reservation details</h3>

            <ul class="clean-list list-container">
                <div class="desc-li-container">
                    <li>
                        <span class="li-title">Stay name:</span>
                        <span class="li-content">{{ order.nameOfStay }}</span>
                    </li>
                    <li>
                        <span class="li-title">Stay address:</span>
                        <span class="li-content">{{ order.location }}</span>
                    </li>
                    <li>
                        <span class="li-title">The host:</span>
                        <span class="li-content">{{ order.host }}</span>
                    </li>
                    <li>
                        <span class="li-title">From:</span>
                        <span class="li-content">{{ getFormattedDate(order.dates['0']) }}</span>
                    </li>
                    <li>
                        <span class="li-title">To:</span>
                        <span class="li-content">{{ getFormattedDate(order.dates['1']) }}</span>
                    </li>
                </div>
                <div class="guests-li-container">
                    <li>
                        <span class="li-title li-upper-title">Number of guests:</span>
                        <div class="guests-box">
                            <div class="guests-li">
                                <div class="li-title">Adults:</div>
                                <div class="li-content">{{ order.capacity.adults }}</div>
                            </div>
                            <div v-if="order.capacity.children" class="guests-li">
                                <div class="li-title">Children:</div>
                                <div class="li-content">{{ order.capacity.children }}</div>
                            </div>
                            <div v-if="order.capacity.infants" class="guests-li">
                                <div class="li-title">Infants:</div>
                                <div class="li-content">{{ order.capacity.infants }}</div>
                            </div>
                            <div v-if="order.capacity.pets" class="guests-li">
                                <div class="li-title">Pets:</div>
                                <div class="li-content">{{ order.capacity.pets }}</div>
                            </div>
                        </div>
                    </li>
                </div>
                <div class="price-li-container">
                    <li>
                        <span>
                            <span class="li-title">Price per night:</span>
                            <span class="li-content">{{ getFormattedPrice(this.order.price) }}</span>
                        </span>
                    </li>
                    <li>
                        <span class="li-title">Number of nights:</span>
                        <span class="li-content">{{ getNumOfNights }} nights</span>
                    </li>
                    <li>
                        <span class="li-title">Total price excluding fees:</span>
                        <span class="li-content">{{ getTotalExFees }}</span>
                    </li>
                    <li>
                        <span class="li-title li-upper-title">Fees:</span>
                        <div class="fees-box">
                            <div v-if="order.cleaningFee" class="cleaning-fee-container">
                                <div class="li-title">Cleaning fee:</div>
                                <div class="li-content">${{ this.order.cleaningFee }}</div>
                            </div>
                            <div v-if="order.securityDeposit" class="security-fee-container">
                                <div class="li-title">Security deposit:</div>
                                <div class="li-content">${{ this.order.securityDeposit }}</div>
                            </div>
                        </div>
                    </li>
                </div>
                <hr class="hr" />
                <li>
                    <span class="li-title">Total price:</span>
                    <span class="li-content">{{ getTotalPrice }}</span>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
// import { stayService } from "../services/stay.service.js";
// import easySpinner from 'vue-easy-spinner';

export default {
    name: 'order-details',
    // props: {
    //     stay: Object
    // },
    components: {},
    async created() {
        await this.$store.dispatch({ type: 'loadOrders' })
        this.order = this.$store.getters.orders[0]
        console.log(this.order)
        console.log(this.order);
        setTimeout(() => {
            this.isApproved = true;
        }, 10000);
        console.log(this.order.user)
        // const { id } = this.$route.params
        // this.stay = await stayService.getById(id)
        // console.log(this.stay);

    },
    data() {
        return {
            order: null,
            isApproved: false,
            // isLoading:true
        }
    },
    methods: {
        getFormattedPrice(price) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(+price)
        },
        getFormattedDate(date) {
            let monthNames = [
                "January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"
            ]
            let dayNum = new Date(date).getDate()
            console.log(dayNum)
            let monthNum = new Date(date).getMonth()
            let monthName = monthNames[monthNum]
            let yearNum = new Date(date).getFullYear()
            console.log(yearNum)
            let formattedDate = dayNum + ' ' + monthName + ' ' + yearNum
            return formattedDate
        },closeModal() {
          this.$emit('close')
      },
    },
    computed: {
        getNumOfNights() {
            let startDate = this.order.dates['0'].getTime()
            let endDate = this.order.dates['1'].getTime()
            let diffInTime = endDate - startDate;
            let diffInDays = diffInTime / (1000 * 3600 * 24)
            console.log(diffInDays);
            return diffInDays
        },
        getTotalExFees() {
            let numNights = this.getNumOfNights
            let price = numNights * (this.order.price)
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
        },
        getTotalPrice() {
            let numNights = this.getNumOfNights
            let totalPriceExFees = numNights * (this.order.price)
            let cleaningFee = this.order.cleaningFee
            if (!cleaningFee) cleaningFee = 0
            let securityDeposit = this.order.securityDeposit
            if (!securityDeposit) securityDeposit = 0
            let totalPrice = totalPriceExFees + cleaningFee + securityDeposit
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalPrice)
        }
    },
    unmounted() { },
}
</script>
