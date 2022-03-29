<template>
    <section class="stay-list">
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
    components: {
        stayPreview
    },
}
</script>
<style>
.stay-list ul {
    list-style-type: none;
}
</style>