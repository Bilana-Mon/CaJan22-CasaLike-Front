<template>
    <section class="orders-preview-container" v-if="order">
        <li class="orders-preview-conatainer">
            <!-- <div class="order-stay-container">
                <span>Name of stay:</span>
                <span>{{ order.nameOfStay }}</span>
            </div>-->
            <div class="order-description-container">
                <div class="order-guest-name-container">
                    <div class="li-title">Name of guest:</div>
                    <div class="li-content">{{ order.user }}</div>
                </div>
                <div class="order-guest-container">
                    <div class="li-title">Number of guests:</div>
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
                <div class="order-dates-container">
                    <div class="dates-from">
                        <div class="li-title">From:</div>
                        <div class="li-content">{{ getFormattedDate(order.dates['0']) }}</div>
                    </div>
                    <div class="dates-to">
                        <div class="li-title">To:</div>
                        <div class="li-content">{{ getFormattedDate(order.dates['1']) }}</div>
                    </div>
                </div>
            </div>

            <div class="btn-container">
                <button
                    class="approve"
                    @click="setOrderApproveStatus(); toggleApprove()"
                    :disabled="order.isApproved || order.isDeclined || this.isApproved || this.isDeclined"
                >Approved</button>
                <button
                    class="decline"
                    @click="setOrderDeclineStatus(); toggleDeclined()"
                    :disabled="order.isDeclined || order.isApproved || this.isApproved || this.isDeclined"
                >Decline</button>
                <div v-if="order.isApproved || this.isApproved">The reservation was approved!</div>
                <div v-if="order.isDeclined || this.isDeclined">The reservation was declined!</div>
            </div>
        </li>
    </section>
</template>

<script>
import { stayService } from "../services/stay.service.js"


export default {
    name: 'backoffice-preview',
    props: {
        order: Object
    },
    components: {},
    async created() {
        this.stay = stayService.getById(this.order.stayId)
        console.log(this.stay);
        console.log(this.order.stayId);
    },
    data() {
        return {
            stay: null,
            isApproved: false,
            isDeclined: false
        }
    },
    methods: {
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
        async setOrderApproveStatus() {
            let order = { ...this.order }
            order.isApproved = true
            await this.$store.dispatch({ type: 'setOrder', order })
            console.log(order);
        },
        async setOrderDeclineStatus() {
            let order = { ...this.order }
            order.isDeclined = true
            await this.$store.dispatch({ type: 'setOrder', order })
            console.log(order);
        },
        toggleApprove() {
            this.isApproved = true
        },
        toggleDeclined() {
            this.isDeclined = true
        }
    },
    computed: {},
}
</script>

<style>
.orders-preview-conatainer {
    display: flex;
    border: 1px solid #222222;
    border-radius: 12px;
    padding: 5px;
}
.orders-preview-conatainer span {
    padding: 5px;
}

.order-description-container {
    display: flex;
    flex-direction: column;
    margin-right: 5px;
}

.order-guest-name-container {
    display: flex;
    flex-direction: row;
}
.order-guest-container .guests-li {
    display: flex;
    flex-direction: row;
}

.order-description-container .li-title {
    margin-right: 5px;
}

.order-dates-container {
    display: flex;
    flex-direction: column;
}
.order-dates-container .dates-from {
    display: flex;
    flex-direction: row;
}
.order-dates-container .dates-to {
    display: flex;
    flex-direction: row;
}
.order-dates-container .li-title {
    margin-right: 5px;
}

.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
}

.btn-container button {
    width: 75px;
    height: 35px;
    border: 1px solid #000;
    font-family: "CircularStd-Book";
    font-size: 14px;
    letter-spacing: 0.5px;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    position: relative;
    color: #222222;
    background-color: white;
    cursor: pointer;
    margin-right: 5px;
}

.btn-container button:disabled {
    border: 1px solid #717171;
    color: #717171;
    cursor: not-allowed;
}
</style>