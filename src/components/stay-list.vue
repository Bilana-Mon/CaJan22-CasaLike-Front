<template>
    <section class="stay-list">
        <h3 class="num-of-stays-h3">
            {{ this.stays.length }} stays
            <span
                v-if="filterByLocation.length"
            >in {{ this.filterByLocation }}</span>
        </h3>
        <ul class="stay-list-container">
            <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id"></stay-preview>
        </ul>
    </section>
</template>

<script>
import stayPreview from './stay-preview.vue'

export default {
    name: 'stay-list',
    props: {
        stays: Array,

    },
    created() {
        this.filterByLocation = this.$store.getters.filter.location
    },
    data() {
        return {
            filterByLocation: null
        }
    },
    components: {
        stayPreview
    },
}
</script>
