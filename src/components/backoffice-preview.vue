<template>
    <section :class="getClassByStatus()" v-if="order">
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
                <span class="approve" v-if="order.status==='approved' || this.isApproved">Approved</span>
                <span class="decline" v-if="order.status==='declined' || this.isDeclined">Declined</span>
                <span
                    class="pending-content"
                    v-if="order.status==='pending' && !this.isApproved && !this.isDeclined"
                >Pending</span>
            </td>
            <td class="btn-container">
                <button
                    class="approve"
                    @click="setOrderApproveStatus(); togglePending()"
                    :disabled="order.status==='approved' || order.status==='declined' || !this.isPending"
                >Approve</button>
                <button
                    class="decline"
                    @click="setOrderDeclineStatus(); togglePending()"
                    :disabled="order.status==='approved' || order.status==='declined' || !this.isPending"
                >Decline</button>
            </td>
        </tr>
    </section>
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
            isPending:true,
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
            console.log(dayNum)
            let monthNum = new Date(date).getMonth()
            let monthName = monthNames[monthNum]
            let yearNum = new Date(date).getFullYear()
            console.log(yearNum)
            let formattedDate = dayNum + ' ' + monthName + ' ' + yearNum
            return formattedDate
        },
        async setOrderApproveStatus() {
            this.isApproved = true
            let order = { ...this.order }
           order.status = 'approved'
            await this.$store.dispatch({ type: 'setOrder', order })
            console.log(order);
        },
        togglePending() {
          this.isPending = false
        },
        async setOrderDeclineStatus() {
            this.isDeclined = true
            let order = { ...this.order }
            order.status = 'declined'
            await this.$store.dispatch({ type: 'setOrder', order })
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

<style>
.unSeen {
    font-weight: bold;
    background-color: rgb(168, 168, 177);
}
</style>

