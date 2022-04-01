<template>
    <section class="order-details-container" v-if="order && isApproved">
        <div class="order-details-success">
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
    </section>
    <section v-if="!order"></section>
    <!-- <easy-spinner /> -->
    <section v-if="order && !isApproved">
        <h2>Reservation Status: Pending</h2>
        <h3>Reservation details</h3>
        <ul>
            <li>
                Stay name: {{ order.nameOfStay }}
            </li>
            <li>
                Stay address: {{ order.location }}
            </li>
            <li>
                The host: {{ order.host }}
            </li>
            <li>
                {{ getFormattedDate(order.dates['0']) }}
            </li>
            <li>
                {{ getFormattedDate(order.dates['1']) }}
            </li>
            <li>
                Number of guests:
                <span>Adults: {{ order.capacity.adults }}</span>
                <span v-if="order.capacity.children">
                    Children: {{ order.capacity.children }}
                </span>
                <span v-if="order.capacity.infants">
                    Infants: {{ order.capacity.infants }}
                </span>
                <span v-if="order.capacity.pets">
                    Pets: {{ order.capacity.pets }}
                </span>
            </li>
            <li>
                <span>Price per night (per person): {{ getFormattedPrice(this.order.price) }}</span>
            </li>
            <li>
                Number of nights: {{ getNumOfNights }} nights
            </li>
            <li>
                Total price excluding fees: {{ getTotalExFees }}
            </li>
            <li>
            Fees:
            <span>
                Cleaning fee: {{ this.order.cleaningFee }}
            </span>
            <span>
                Security deposit: {{ this.order.securityDeposit }}
            </span>
            </li>
            <li>
                Total price: {{getTotalPrice}}
            </li>

        </ul>
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
        this.order = await this.$store.getters.order
        console.log(this.order);
        setTimeout(() => {
            this.isApproved = true;
        }, 60000);
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
            let numGuests = this.order.capacity.adults + this.order.capacity.children
            let price = numNights * (this.order.price) * numGuests
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
        },
        getTotalPrice() {
             let numNights = this.getNumOfNights
            let numGuests = this.order.capacity.adults + this.order.capacity.children
            let totalPriceExFees = numNights * (this.order.price) * numGuests
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
<style>
.order-details-container {
    height: 80vh;
    margin-bottom: 2rem;
}

.order-details-success {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 44rem;
    border: 1px solid black;
    border-radius: 20px;
    margin: auto;
    margin-top: 2rem;
    padding: 2rem;
}
.order-details-desc {
    display: flex;
    flex-direction: column;
    height: 40rem;
}

.stay-order-details {
    display: flex;
    flex-direction: column;
}

.guests-order-details {
    display: flex;
    flex-direction: column;
}

.pricing-for-order {
    display: flex;
    flex-direction: column;
}
</style>