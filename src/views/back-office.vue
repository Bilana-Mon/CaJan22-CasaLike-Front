<template>
    <section class="backoffice-container">
        <!-- <backoffice-cards :orders="orders"></backoffice-cards> -->
        <backoffice-list :orders="orders"></backoffice-list>
    </section>
</template>

<script>
import backofficeList from "../components/backoffice-list.vue"
import backofficeCards from "../components/backoffice-cards.vue"
export default {
    name: 'backoffice',
    components: {
        backofficeList,
        backofficeCards
    },
    async created() {
        await this.$store.dispatch({ type: 'loadOrders' })
        this.orders = JSON.parse(JSON.stringify(this.$store.getters.orders))
        this.orders = (this.orders).reverse()
    },
    data() {
        return {
            orders: null
        }
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>

