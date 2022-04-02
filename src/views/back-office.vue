<template>
    <section class="backoffice-container">
        <backoffice-list :orders="orders"></backoffice-list>
    </section>
</template>

<script>
import backofficeList from "../components/backoffice-list.vue"
export default {
    name: 'backoffice',
    components: {
        backofficeList
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

<style>
.backoffice-container {
    min-height: 80vh;
}
</style>