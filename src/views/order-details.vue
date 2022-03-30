<template>
    <section class="order-details-container">
        <div class="order-details-success">
            <h1>Your Order Details</h1>
            <p>We thank you, for your reservation! Here are the details about your order:</p>
            <div class="order-details-desc">
                <div class="stay-order-details">
                    <span>Name of the stay:</span>
                    <span>{{ stay.name }}</span>
                    <span>Address of the stay:</span>
                    <span>{{ stay.address.street }}</span>
                    <span>The host:</span>
                    <span>{{ stay.host.fullname }}</span>
                </div>
                <hr class="hr" />
                <div class="guests-order-details">
                    <span>num of guests</span>
                    <span>adults</span>
                    <span>children</span>
                    <span>infants</span>
                    <span>pets</span>
                </div>
                <hr class="hr" />
                <div class="pricing-for-order">
                    <span>Price per night:</span>
                    <span>{{ getFormattedPrice }}</span>
                    <span>nights num</span>
                    <span>Fees:</span>
                    <span>{{ getTotalFees }}</span>
                    <hr class="hr" />
                    <span>Total</span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { stayService } from "../services/stay.service.js";
export default {
    name: 'order-details',
    props: {
        stay: Object
    },
    components: {},
    async created() {
        const { id } = this.$route.params
        this.stay = await stayService.getById(id)
        console.log(this.stay);
    },
    data() {
        return {
            stay: null
        }
    },
    methods: {},
    computed: {
        getFormattedPrice() {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.stay.price)
        },
        getTotalFees() {
            let cleanFees = this.stay.cleaningFee
            if (!cleanFees) {
                cleanFees = 0;
            }
            let securityFees = this.stay.securityDeposit
            if (!securityFees) {
                securityFees = 0;
            }
            let extraPeopleFees = this.stay.extraPeople
            if (!extraPeopleFees) {
                extraPeopleFees = 0;
            }
            let totalFees = extraPeopleFees + securityFees + cleanFees;
            console.log(totalFees);
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalFees)
            // return totalFees
        }

    },
    unmounted() { },
}
</script>
<style>
.order-details-container {
    height: 80vh;
}

.order-details-success {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 30rem;
    border: 1px solid black;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 5rem;
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