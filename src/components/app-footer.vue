<template>
    <section class="footer-container">
        <div class="footer-bottom">
        <p>© 2022 CasaLike, Inc.</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Sitemap</p>
        <p>English (US)</p>
        <p>$</p>
        <p>USD</p>
    </div>
    </section>
</template>

<script>


export default {
    name:'app-footer',
    components: {},
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
.footer-bottom {
    height: 10rem;
    background-color: lightgrey;
    bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p {
    cursor:pointer;
}

</style>