<template>
    <section id='id-test' class="search-bar">
        <form @submit.prevent="setFilter">
            <div class="search-bar-container">
                <div class="search-element location-container">
                    <label for="location">
                        <div class="location-input-container">
                            <div class="search-heading">Location</div>
                            <div class="search-text">Where are you going?</div>
                            <div>
                                <input @click="test1 = !test1"
                                    class="search-test"
                                    type="text"
                                    v-model="filterBy.location"
                                    placeholder="Where are you going?"
                                />
                                <span style="position: absolute; z-index: 999; " v-if="test1">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 22px; width: 22px; fill: currentcolor;"><path d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path></svg>
                                    Locations
                                </span>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="vsep"></div>
                <div class="search-element date-from-container">
                    <div class="date-from-picker-container">
                        <div class="search-heading">Check in</div>
                        <el-date-picker
                            class="ddd"
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
            test1: false,
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
            this.$router.push(`/stay?location=${this.filterBy.location}`)
        },
        goExplore() {
            console.log('kaka')
            this.$router.push(`/stay`)
        },
    },
}
</script>
<style scoped>
.search-test {
    background: red !important;
}
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