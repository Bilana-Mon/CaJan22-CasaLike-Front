<template>
    <section class="orders-preview-container" v-if="order">
        <tr>
            <td>{{ order.user }}</td>
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
                <span class="approve" v-if="order.isApproved || this.isApproved">Approved</span>
                <span class="decline" v-if="order.isDeclined || this.isDeclined">Declined</span>
                <span
                    class="pending"
                    v-if="!order.isDeclined && !this.isDeclined && !order.isApproved && !this.isApproved"
                >Pending</span>
            </td>
            <td class="btn-container">
                <button
                    class="approve"
                    @click="setOrderApproveStatus(); toggleApprove()"
                    :disabled="order.isApproved || order.isDeclined || this.isApproved || this.isDeclined"
                >Approve</button>
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
}
</script>

<style>
.orders-preview-container td {
    width: 150px;
}

.orders-preview-container tr {
    height: 100px;
}

.btn-container button {
    width: 65px;
    height: 35px;
    border: 1px solid #222222;
    font-family: "CircularStd-Book";
    font-size: 11px;
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
.btn-container button:disabled:hover {
    border: 1px solid #717171;
    color: #717171;
    cursor: not-allowed;
}

.approve {
    font-family: "Airbnb-medium";
    color: #00a699;
}
.decline {
    font-family: "Airbnb-medium";
    color: #c01333;
}
.pending {
    font-family: "Airbnb-medium";
    color: #fc642d;
}

.btn-container .approve:hover {
    border: 1px solid #00a699;
    color: #00a699;
}
.btn-container .decline:hover {
    border: 1px solid #c01333;
    color: #c01333;
}
</style>