<template>
    <section v-if="order">{{ this.order }}</section>
</template>

<script>
import { stayService } from "../services/stay.service.js"
export default {
    name: 'backoffice-cards',
    props: {

    },
    components: {},
    async created() {
        // this.order = await this.$store.getters.order
        console.log(await this.$store.getters.order);
    },
    data() {
        return {
            stay: null,
            order: null
        }
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>