<template>
  <section class="date-open-container">
   <el-date-picker      
                type="daterange"
                range-separator
                format="M/D/YYYY"
                clearable
                visible
            />
  </section>
</template>

<script>


export default {
  name: 'date-open',
  props: {
        stay: Object
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
<style>


</style>



