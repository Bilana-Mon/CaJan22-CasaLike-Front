<template>
    <section class="search-bar">
        <form @submit.prevent="setFilter">
            <div class="search-bar-container">
                <div class="location-container">
                    <label for="location">
                        <div class="location-input-container">
                            <div>Location</div>
                            <input
                                type="text"
                                @input="setFilter"
                                v-model="filterBy.location"
                                placeholder="Where are you going?"
                            />
                        </div>
                    </label>
                </div>
                <div class="date-from-container">
                    <div class="date-from-picker-container">
                        <div>Check in</div>
                        <div>Add dates</div>
                        <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="Check out"
                            start-placeholder="Add dates"
                            end-placeholder="Add dates"
                        />
                    </div>
                </div>
                <div class="guests-container">
                    <div class="guests-container">
                        <div>Guests</div>
                        <div>Add guests</div>
                    </div>
                </div>
                <div class="search-btn-container">
                    <button class="search-btn" @click="goExplore">
                        <div class="svg-container">
                            <svg />
                        </div>
                        <div class="search-container">Search</div>
                    </button>
                </div>
            </div>
        </form>
    </section>
</template>


<script>
import { ref } from 'vue'

export default {
    name: 'search',
    data() {
        return {
            filterBy: {
                location: ''
            },
            value: {
                value1: ref(''),
                end: new Date(),
                start: new Date().getTime() - 3600 * 1000 * 24 * 7,
            }
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