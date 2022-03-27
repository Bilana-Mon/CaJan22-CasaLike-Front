<template>
    <div class="amenities-preview-container" v-if="stay">
        <section class="amenities-preview">
            <div class="amenities-heading">
                <h2>What this place offers</h2>
            </div>
            <div class="amenities-container">
                <div class="amenity-container">
                    <!-- v-for="amenity in stay.amenities" :key="amenity" -->
                    <div class="svg" v-if="stay.amenities"></div>
                    <ul class="amenity">
                        <li>
                            <span>
                                <svg
                                    v-if="isTV"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isEssentials"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isWifi"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isKitchen"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isBathtub"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isWasher"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isDryer"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isHeating"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                                <svg
                                    v-if="isIron"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                                >
                                    <path
                                        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                                    />
                                </svg>
                            </span>
                            <!-- {{ amenity.type }} -->
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'amenities-preview',
    props: {
        stay: Object
    },
    components: {},
    created() {
        this.getAmenities
        console.log(this.getAmenities);
    },
    data() {
        return {
            amenities: [],
            isTV: false,
            isEssentials: false,
            isWifi: false,
            isKitchen: false,
            isBathtub: false,
            isWasher: false,
            isDryer: false,
            isHeating: false,
            isIron: false
        }
    },
    methods: {
        getAmenities() {
            let amenities = this.stay.amenities;
            console.log(amenities);
            // let tvAmenity = amenities.find(amenity => amenity.type === 'TV')
            // if (tvAmenity) {
            //     this.isTV = true;
            // } else {
            //     this.isTV = false;
            // }
            // return amenities = amenities.filter(amenity => {
            //     return this.stay.amenities.includes(amenity.type);
            // })

        }
    },
    computed: {
        formatedSvg() {
            return { ...amenity.svg }
        }
    },
}
</script>