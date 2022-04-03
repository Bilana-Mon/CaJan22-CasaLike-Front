<template>
    <section class="backoffice-list-container">
        <table cellpadding="0" cellspacing="0">
            <h2 class="table-heading">Your Reservations</h2>
            <thead>
                <tr>
                    <th>Name of guest:</th>
                    <th>Number of guests:</th>
                    <th>From:</th>
                    <th>To:</th>
                    <th>Status:</th>
                    <th colspan="2">Actions:</th>
                </tr>
            </thead>
            <tbody>
                <backoffice-preview
                    class="orders-list-container clean-list"
                    v-for="order in this.orders"
                    :key="order._id"
                    :order="order"
                ></backoffice-preview>
            </tbody>
        </table>
    </section>
</template>

<script>
import backofficePreview from "./backoffice-preview.vue"
export default {
    name: 'backoffice-list',
    props: {
        orders: Array
    },
    components: {
        backofficePreview
    },

}
</script>




