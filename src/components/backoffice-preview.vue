<template>
    <section class="orders-preview-container" v-if="order">
        <tr>
            <!-- <div class="order-stay-container">
                <span>Name of stay:</span>
                <span>{{ order.nameOfStay }}</span>
            </div>-->

            <!-- <div class="li-title">Name of guest:</div> -->
            <td>{{ order.user }}</td>

            <!-- <div class="li-title">Number of guests:</div> -->
            <td>
                <span>Adults:</span>
                <span>{{ order.capacity.adults }}</span>

                <span v-if="order.capacity.children">
                    <span>Children:</span>
                    <span>{{ order.capacity.children }}</span>
                </span>
                <span v-if="order.capacity.infants">
                    <span>Infants:</span>
                    <span>{{ order.capacity.infants }}</span>
                </span>
                <span v-if="order.capacity.pets" class="guests-li">
                    <span>Pets:</span>
                    <span>{{ order.capacity.pets }}</span>
                </span>
            </td>

            <td>
                <!-- <div class="li-title">From:</div> -->
                <span>{{ getFormattedDate(order.dates['0']) }}</span>
            </td>
            <td>
                <!-- <div class="li-title">To:</div> -->
                <span>{{ getFormattedDate(order.dates['1']) }}</span>
            </td>
            <td>
                <span v-if="order.isApproved || this.isApproved">The reservation was approved!</span>
                <span v-if="order.isDeclined || this.isDeclined">The reservation was declined!</span>
            </td>
            <td>
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
            </td>
        </tr>
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

<!-- <style>
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
</style> -->

<style>
td {
    width: 150px;
    border: 1px solid #222222;
}

.orders-preview-container div {
    display: inline;
}
</style>