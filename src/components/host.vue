<template>
    <section v-if="stay">
        <div class="host-container">
            <h2 class="host-header-text">Hosted by {{ stay.host.fullname }}</h2>
            <div class="host-icon-container">
                <div class="host-icon">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style="display: block; height: 16px; width: 16px; fill: #ff385c;"
                    >
                        <path
                            d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"
                        />
                    </svg>
                </div>
                <div class="host-icon-desc">Identity verified</div>
            </div>
            <div class="about-host-container">
                <div class="about-host-container-inner">
                    <div class="host-about">
                        <h3>About {{ stay.host.fullname }}</h3>
                        <p>{{ getHostAbout }}</p>

                        <div class="show-more" v-if="isLongAbout">
                            Read more
                            <svg
                                viewBox="0 0 18 18"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                                style="height: 12px; width: 12px; display: block; fill: var(--f-k-smk-x);"
                            >
                                <path
                                    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                                    fill-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="host-about">
                        <h3 v-if="stay.host.isSuperhost">{{ stay.host.fullname }} is a Superhost</h3>
                        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                        <div>Response time: {{ stay.host.responseTime }}</div>
                    </div>
                </div>
                <div class="about-host-container-inner">
                    <div class="show-button2">
                        <a href="#">Contact Host</a>
                    </div>
                    <div class="protect">
                        <div class="icon-protect">
                            <svg
                                viewBox="0 0 24 24"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                                style="height: 24px; width: 24px; display: block; fill: rgb(255, 180, 0);"
                            >
                                <path
                                    d="m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"
                                />
                                <path
                                    d="m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
                                    fill="#484848"
                                />
                            </svg>
                        </div>
                        <div
                            class="text-protect"
                        >To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'host',
    props: {
        stay: Object
    },
    data() {
        return {
            isLongAbout: false
        }
    },
    computed: {
        getHostAbout() {
            let hostAbout = this.stay.host.about
            if (hostAbout.length > 105) {
                hostAbout = hostAbout.slice(0, 105) + '...'
                this.isLongAbout = true
            } else {
                this.isLongAbout = false
            }
            return hostAbout
        }
    },
}
</script>