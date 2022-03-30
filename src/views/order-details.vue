<template>
    <section class="order-details-container">
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
                <span>{{ order.dates['0'] }}</span>
                <span>To:</span>
                <span>{{ order.dates['1'] }}</span>
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
                    <span>Total</span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { stayService } from "../services/stay.service.js";
export default {
    name: 'order-details',
    // props: {
    //     stay: Object
    // },
    components: {},
    async created() {
        // const { id } = this.$route.params
        // this.stay = await stayService.getById(id)
        // console.log(this.stay);
        this.order = await this.$store.getters.order
        console.log(this.order);
    },
    data() {
        return {
            order: null
        }
    },
    methods: {
        getFormattedPrice(price) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+price)
        },
        getFormattedDate(date) {
            let monthNames = [
                "January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"
            ]
            let monthNum = new Date(date).getMonth()
            let monthName = monthNames[monthNum - 1]
            let yearNum = new Date(date).getFullYear()
            console.log(yearNum)
            let formattedDate = monthName + ' ' + yearNum
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
        }
        // getTotalFees() {
        //     let cleanFees = this.stay.cleaningFee
        //     if (!cleanFees) {
        //         cleanFees = 0;
        //     }
        //     let securityFees = this.stay.securityDeposit
        //     if (!securityFees) {
        //         securityFees = 0;
        //     }
        //     let extraPeopleFees = this.stay.extraPeople
        //     if (!extraPeopleFees) {
        //         extraPeopleFees = 0;
        //     }
        //     let totalFees = extraPeopleFees + securityFees + cleanFees;
        //     console.log(totalFees);
        //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalFees)
        //     // return totalFees
        // }

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