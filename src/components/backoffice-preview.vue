<template>
    <section class="orders-preview-container" v-if="order">
        <li class="orders-list-conatainer">
            <!-- <div class="order-stay-container">
                <span>Name of stay:</span>
                <span>{{ order.nameOfStay }}</span>
            </div>-->
            <div class="order-guest-container">
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
            <div class="order-dates-container">
                <span>From:</span>
                <span>{{ getFormattedDate(order.dates['0']) }}</span>
                <span>To:</span>
                <span>{{ getFormattedDate(order.dates['1']) }}</span>
            </div>
            <div class="order-guest-name-container">
                <span>Name of guest:</span>
                <span>{{ order.user }}</span>
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
            <hr class="hr" />
        </li>
    </section>
</template>

<script>

export default {
    name: 'backoffice-preview',
    props: {
        order: Object
    },
    components: {},
    async created() {
        // this.order = await this.$store.getters.order
    },
    data() {
        return {

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
.orders-list-conatainer span {
    padding: 5px;
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