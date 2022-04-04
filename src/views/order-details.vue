<template>
    <section class="section-row section-col" v-if="order">
        <div class="pending-status-container">
            <h2>{{ this.order.user }}, your reservation was approved!</h2>
            <div class="pending-img">
                <img src="/src/assets/icons/compelete.png" alt />
            </div>
        </div>
        <h3>Your trip</h3>
        <section class="pending-reservation-container section-col">
            <ul class="clean-list list-container">
                <div class="desc-li-container">
                    <li>
                        <span class="li-title">Stay name:</span>
                        <span class="li-content">{{ this.order.nameOfStay }}</span>
                    </li>
                    <li>
                        <span class="li-title">Stay address:</span>
                        <span class="li-content">{{ this.order.location }}</span>
                    </li>
                    <li>
                        <span class="li-title">The host:</span>
                        <span class="li-content">{{ this.order.host }}</span>
                    </li>
                    <li>
                        <span class="li-title">From:</span>
                        <span class="li-content">{{ getFormattedDate(this.order.dates[0]) }}</span>
                    </li>
                    <li>
                        <span class="li-title">To:</span>
                        <span class="li-content">{{ getFormattedDate(this.order.dates[1]) }}</span>
                    </li>
                </div>
                <div class="guests-li-container">
                    <li>
                        <span class="li-title li-upper-title">Number of guests:</span>
                        <div class="guests-box">
                            <div class="guests-li">
                                <div class="li-title">Adults:</div>
                                <div class="li-content">{{ this.order.capacity.adults }}</div>
                            </div>
                            <div v-if="order.capacity.children" class="guests-li">
                                <div class="li-title">Children:</div>
                                <div class="li-content">{{ this.order.capacity.children }}</div>
                            </div>
                            <div v-if="order.capacity.infants" class="guests-li">
                                <div class="li-title">Infants:</div>
                                <div class="li-content">{{ this.order.capacity.infants }}</div>
                            </div>
                            <div v-if="order.capacity.pets" class="guests-li">
                                <div class="li-title">Pets:</div>
                                <div class="li-content">{{ this.order.capacity.pets }}</div>
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
                        <span class="li-content">{{ getNumOfNights() }} nights</span>
                    </li>
                    <li>
                        <span class="li-title">Total price excluding fees:</span>
                        <!-- <span class="li-content">{{ getTotalExFees }}</span> -->
                    </li>
                    <li>
                        <span class="li-title li-upper-title">Fees:</span>
                        <div class="fees-box">
                            <div v-if="order.cleaningFee" class="cleaning-fee-container">
                                <div class="li-title">Cleaning fee:</div>
                                <!-- <div class="li-content">${{ this.order.cleaningFee }}</div> -->
                            </div>
                            <div v-if="order.securityDeposit" class="security-fee-container">
                                <div class="li-title">Security deposit:</div>
                                <!-- <div class="li-content">${{ this.order.securityDeposit }}</div> -->
                            </div>
                        </div>
                    </li>
                </div>
                <hr class="hr" />
                <li>
                    <span class="li-title">Total price:</span>
                    <!-- <span class="li-content">{{ getTotalPrice }}</span> -->
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
        this.orders = JSON.parse(JSON.stringify(this.$store.getters.orders))
        this.order = this.orders[this.orders.length - 1]
        console.log(this.orders)
        console.log(this.order);
        this.editStatus()
        // const { id } = this.$route.params
        // this.stay = await stayService.getById(id)
        // console.log(this.stay);

    },
    data() {
        return {
            order: null,
            orders: null
            // isLoading:true
        }
    },
    methods: {
        getFormattedPrice(price) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(+price)
        },
        getFormattedDate(date) {
            console.log('forammated date', date);
            let monthNames = [
                "January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"
            ]
            let dayNum = new Date(date).getDate() - 1
            console.log('dayNum', dayNum)
            let monthNum = new Date(date).getMonth()
            let monthName = monthNames[monthNum]
            let yearNum = new Date(date).getFullYear()
            console.log('yearNum', yearNum)
            let formattedDate = dayNum + ' ' + monthName + ' ' + yearNum
            console.log('formattedDate', formattedDate);
            return formattedDate
        },
        getNumOfNights() {
            let startDate = new Date(this.order.dates[0]).getTime()
            let endDate = new Date(this.order.dates[1]).getTime()

            let diffInTime = endDate - startDate;
            let diffInDays = diffInTime / (1000 * 3600 * 24)

            console.log(diffInDays);
            return diffInDays
        },
        closeModal() {
            this.$emit('close')
        },
        async editStatus() {
            let order = { ...this.order }
            order.isSeenByUser = true;
            await this.$store.dispatch({ type: 'setOrder', order })
        }
    },
    computed: {
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
