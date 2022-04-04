<template>
    <section class="section-row backoffice-list-container">
        <div class="section-col stay-col">
            <div class="small-img-container">
                <h2 class="table-heading host-title">Hello, Kyrill</h2>
                <img
                    class="small-img"
                    :src="`https://res.cloudinary.com/dpwyhvd1e/image/upload/v1649008049/casaLike/reviews/kyrill.jpg`"
                />
            </div>
            <div class="section-row">
                <div class="section-col cards">
                    <p class="small text-muted">
                        <span class="badge text-success">Your Average Reviews</span>
                    </p>
                    <h3 class="h3-card">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            class="st-current"
                            style="display: inline-block; height: 14px; width: 14px; fill: rgb(255, 56, 92);"
                        >
                            <path
                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                fill-rule="evenodd"
                                class
                            />
                        </svg>
                        <span class="badge text-success">4.9 / 5</span>
                    </h3>
                    <small class="text-muted">231 Reviews</small>
                </div>

                <div class="section-col cards">
                    <p class="small text-muted">
                        <span class="badge text-success">Annual Income</span>
                    </p>
                    <h3 class="h3-card">$25,610</h3>
                    <small class="text-muted">2% increased compared to last year</small>
                </div>

                <div class="section-col cards">
                    <p class="small text-muted">
                        <span class="badge text-danger">Average Number of Reservations</span>
                    </p>
                    <h3 class="h3-card">48</h3>
                    <small class="text-muted">1.5% increased compared to last year</small>
                </div>

                <div class="section-col last-card">
                    <p class="small text-muted">
                        <span class="badge text-success">You are a</span>
                    </p>
                    <h3 class="h3-card">Superhost</h3>
                    <small class="text-muted">Superhosts are highly rated hosts.</small>
                </div>
            </div>

            <table cellpadding="0" cellspacing="0">
                <h2 class="table-heading">Your Reservations</h2>
                <thead>
                    <tr class="th-container">
                        <th>Name of guest:</th>
                        <th>Number of guests:</th>
                        <th>From:</th>
                        <th>To:</th>
                        <th>Status:</th>
                        <th>Actions:</th>
                    </tr>
                </thead>
                <tbody>
                    <backoffice-preview
                        class="orders-list-container"
                        v-for="order in this.orders"
                        :key="order._id"
                        :order="order"
                    ></backoffice-preview>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import backofficePreview from "./backoffice-preview.vue";

export default {
    name: 'backoffice-list',
    props: {
        orders: Array
    },
    components: {
        backofficePreview,
    },
}
</script>





