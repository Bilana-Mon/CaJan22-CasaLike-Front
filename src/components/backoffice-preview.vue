<template>
    <section class="orders-preview-container">
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
    created() { },
    data() {
        return {}
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
    },
    computed: {},
}
</script>

<style>
.orders-list-conatainer span {
    padding: 5px;
}
</style>