<template>
    <section :class="{ 'search-bar': isActive, 'search-bar-small': !isActive }">
        <form @submit.prevent="setFilter">
            <div class="search-bar-container">
                <div class="search-element location-container">
                    <label for="location">
                        <div class="location-input-container">
                            <div class="search-heading">Location</div>
                            <!-- <div class="search-text">Where are you going?</div> -->
                            <input class="search-text location-text" type="text" v-model="filterBy.location"
                                placeholder="Where are you going?" />
                        </div>
                    </label>
                </div>
                <div class="vsep"></div>
                <div class="search-element date-from-container">
                    <div class="date-from-picker-container">
                        <div class="search-heading">Check in</div>
                        <el-date-picker v-model="filterBy.dates" type="daterange" range-separator="|"
                            start-placeholder="Add dates" end-placeholder="Add dates" />
                    </div>
                </div>
                <div class="vsep"></div>
                    <div class="guests-container search-element" @click="toggleSelect">
                        <div>
                            <div class="search-heading">Guests</div>
                            <div class="search-text">Add guests</div>
                            <div class="container" @click="toggleSelect">
                                <input type="checkbox" class="select-checkbox" />
                                <label class="select-label" for="select-checkbox">Guests</label>
                                <div class="select-wrap">
                                    <ul v-if="selectOpen" class="select">
                                        <li class="option">
                                            <a href="#" title="First">
                                                Adults
                                                Age 13+
                                            </a>
                                            <button :disabled="filterBy.countOfGuests.adults === 0"
                                                @click="updateCount('adults', -1)">-</button>
                                            {{ filterBy.countOfGuests.adults }}
                                            <button @click="updateCount('adults', 1)">+</button>
                                        </li>
                                        <li class="option">
                                            <a href="#" title="Second">
                                                Children
                                                Ages 2–12
                                            </a>
                                            <button :disabled="filterBy.countOfGuests.children === 0"
                                                @click="updateCount('children', -1)">-</button>
                                            {{ filterBy.countOfGuests.children }}
                                            <button @click="updateCount('children', 1)">+</button>
                                        </li>
                                        <li class="option">
                                            <a href="#" title="Third">
                                                Infants
                                                Under 2
                                            </a>
                                            <button :disabled="filterBy.countOfGuests.infants === 0"
                                                @click="updateCount('infants', -1)">-</button>
                                            {{ filterBy.countOfGuests.infants }}
                                            <button @click="updateCount('infants', 1)">+</button>
                                        </li>
                                        <li class="option">
                                            <a href="#" title="fourth">
                                                Pets
                                                <a href="#">Bringing a service animal?</a>
                                            </a>
                                            <button :disabled="filterBy.countOfGuests.pets === 0"
                                                @click="updateCount('pets', -1)">-</button>
                                            {{ filterBy.countOfGuests.pets }}
                                            <button @click="updateCount('pets', 1)">+</button>
                                        </li>
                                        <a href="#">Close</a>
                                    </ul>
                                </div>
                            </div>


                        </div>

                        <div class="search-btn-container">
                            <button class="search-btn" @click="goExplore">
                                <div class="svg-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                                    </svg>
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
                },
                countOfGuests: {
                    adults: 0,
                    children: 0,
                    infants: 0,
                    pets: 0
                },
            },
            isActive: true,
            selectOpen: false

        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        console.log(window.scrollY)

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
        handleScroll(event) {
            console.log(window.scrollY)
            if (window.scrollY > 20) this.isActive = false
            else this.isActive = true
        },
        toggleSelect() {
            console.log('kissmechokeme');
            this.selectOpen = !this.selectOpen
        },
        updateCount(age, diff) {
            switch (age) {
                case 'adults':
                    this.countOfGuests.adults += diff;
                    break;
                case 'children':
                    this.countOfGuests.children += diff;
                    break;
                case 'infants':
                    this.countOfGuests.infants += diff;
                    break;
                case 'pets':
                    this.countOfGuests.pets += diff;
            }
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

.select-checkbox {
    display: none;
}

.select-label:before {
    content: "\25BE";
    float: right;
}
.select-wrap {
    background: rgb(255, 255, 255);
}

.select {
    list-style: none;
    padding: 10px;
    margin: 0;
}
.select a {
    text-decoration: none;
    color: inherit;
}
</style>
