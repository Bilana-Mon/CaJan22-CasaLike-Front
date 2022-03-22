<template>
  <section class="home-page">
    <app-header></app-header>
    <main></main>
    <app-footer></app-footer>
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue"
import appFooter from "../components/app-footer.vue"
export default {
  name: 'home-page',
  components: {
    appHeader,
    appFooter
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
