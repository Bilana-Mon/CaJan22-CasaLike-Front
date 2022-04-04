<template>
    <tr :class="getClassByStatus()" v-if="order">
        <td>{{ order.user }}</td>
        <td>
        <div class="td-guest">
            <span class="td-span-guests">Adults:</span>
            <span>{{ order.capacity.adults }}</span>

            <div v-if="order.capacity.children">
                <span class="td-span-guests">Children:</span>
                <span>{{ order.capacity.children }}</span>
            </div>
            <div v-if="order.capacity.infants">
                <span class="td-span-guests">Infants:</span>
                <span>{{ order.capacity.infants }}</span>
            </div>
            <div v-if="order.capacity.pets" class="guests-li">
                <span class="td-span-guests">Pets:</span>
                <span>{{ order.capacity.pets }}</span>
            </div>
        </div>
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
            <span class="approve" v-if="order.status === 'approved' || this.isApproved">Approved</span>
            <span class="decline" v-if="order.status === 'declined' || this.isDeclined">Declined</span>
            <span
                class="pending-content"
                v-if="order.status === 'pending' && !this.isApproved && !this.isDeclined"
            >Pending</span>
        </td>
        <td class="btn-container">
            <button
                class="approve"
                @click="setOrderApproveStatus(); togglePending()"
                :disabled="order.status === 'approved' || order.status === 'declined' || !this.isPending"
            >Approve</button>
            <button
                class="decline"
                @click="setOrderDeclineStatus(); togglePending()"
                :disabled="order.status === 'approved' || order.status === 'declined' || !this.isPending"
            >Decline</button>
        </td>
    </tr>
</template>

<script>



export default {
    name: 'backoffice-preview',
    props: {
        order: Object
    },
    async created() {

    },
    data() {
        return {
            isPending: true,
            isApproved: false,
            isDeclined: false,
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
            let monthNum = new Date(date).getMonth()
            let monthName = monthNames[monthNum]
            let yearNum = new Date(date).getFullYear()
            let formattedDate = dayNum + ' ' + monthName + ' ' + yearNum
            return formattedDate
        },
        async setOrderApproveStatus() {
            this.isApproved = true
            let order = { ...this.order }
            order.status = 'approved'
            order.isSeenByUser = false;
            order.isSeenByHost = true;
            await this.$store.dispatch({ type: 'setOrder', order })
            await this.$store.dispatch({ type: 'saveOrder', order })
            console.log(order);
        },
        togglePending() {
            this.isPending = false
        },
        async setOrderDeclineStatus() {
            this.isDeclined = true
            let order = { ...this.order }
            order.status = 'declined'
            order.isSeenByUser = false;
            order.isSeenByHost = true;
            await this.$store.dispatch({ type: 'setOrder', order })
            await this.$store.dispatch({ type: 'saveOrder', order })

            console.log(this.$store.getters.order);
            console.log(order);
        },
        getClassByStatus() {
            let order = { ...this.order }
            let classStatus = 'seen orders-preview-container'
            if (order.status === 'pending' && this.isPending) classStatus = 'unSeen orders-preview-container'
            return classStatus
        }
    },
}
</script>


