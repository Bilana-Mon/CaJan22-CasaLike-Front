<template>
    <section ></section>
</template>

<script>
import { stayService } from "../services/stay.service.js"
export default {
    name: 'backoffice-cards',
    props: {
      orders: Array
    },
    components: {},
   async created() {
    //  this.currStayId = this.getOrder()
    // this.stay = await stayService.getById(this.currStayId)

    //   console.log(this.stay)
    },
    data() {
        return {
            stay: null,
            order: null,
            currStayId: null
        }
    },
    methods: {
        // getOrder() {
        //     return this.orders[0]['stayId'] 
        // }
    },
    computed: {},
    unmounted() { },
}
</script>