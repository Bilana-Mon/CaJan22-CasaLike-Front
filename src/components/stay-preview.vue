<template>
<!-- <custom-card> -->

    <li class="stay-preview-container">
         <p><span>Name:</span> {{ stay.name }}</p>
    </li>
<!-- </custom-card> -->


</template>

<script>

// import customCard from './custom-card.vue'
export default {
    name:'stay-preview',
 props: {
        stay: Object,
    },
  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>