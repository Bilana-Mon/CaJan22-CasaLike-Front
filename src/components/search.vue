<template>
    <section class="search-bar">
        <form @submit.prevent="setFilter">
            <div class="search-bar-container">
                <div class="search-element location-container">
                    <label for="location">
                        <div class="location-input-container">
                            <div class="search-heading">Location</div>
                            <div class="search-text">Where are you going?</div>
                            <!-- <input
                                type="text"
                                v-model="filterBy.location"
                                placeholder="Where are you going?"
                            /> -->
                        </div>
                    </label>
                </div>
                <div class="vsep"></div>
                <div class="search-element date-from-container">
                    <div class="date-from-picker-container">
                        <div class="search-heading">Check in</div>
                        <el-date-picker
                            v-model="filterBy.dates"
                            type="daterange"
                            range-separator="|"
                            start-placeholder="Add dates"
                            end-placeholder="Add dates"
                        />
                    </div>
                </div>
                <div class="vsep"></div>
                <div class="search-element guests-container">
                    <div class="">
                        <div class="search-heading">Guests</div>
                        <div class="search-text">Add guests</div>
                    </div>

                    <div class="search-btn-container">
                    <button class="search-btn" @click="goExplore">
                        <div class="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                        </div>
                    </button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>


<!-- import { ref } from 'vue' -->
<script>

export default {
    name: 'search',
    data() {
        return {
            filterBy: {
                location: '',
                dates: {
                    end: new Date(),
                    start: new Date().getTime() - 3600 * 1000 * 24 * 7,
                }
            },

        }
    },
    created() {
        console.log(this.fitlerBy)
    },
    methods: {
        setFilter() {
            console.log(this.filterBy)
            console.log('lala')
            this.$emit('setFilter', { ...this.filterBy })
            this.$router.push(`/stay/${this.filterBy.location}`)
        },
        goExplore() {
            console.log('kaka')
            this.$router.push(`/stay`)
        },
    },
}
</script>

<style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}
.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}
.demo-date-picker .block:last-child {
    border-right: none;
}
.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>

<!-- SVG FOR THE PINPOINT SEARCH ON LOCATION  -->
<!-- <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 22px; width: 22px; fill: currentcolor;" aria-hidden="true" role="presentation" focusable="false"><path d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.259231 -->