<template>
    <section class="backoffice-list-container">
        <ul class="orders-list-container clean-list" v-for="order in this.orders" :key="order._id">
            <backoffice-preview :order="order"></backoffice-preview>
        </ul>
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
    created() { },
    data() {
        return {}
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>

<style>
.backoffice-list-container {
    border: 1px solid #222222;
}
</style>


