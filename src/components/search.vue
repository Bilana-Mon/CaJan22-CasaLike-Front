<template>
    <div
        :class="{ 'search-scroll-bg expanded': searchExpanded, 'search-scroll-bg': !searchExpanded }"
    ></div>
    <div class="search-scroll" @click="expandSearch">
        <div class="search-field">
            <div
                class="start-your-search"
                v-if="this.filterBy.location.length"
            >{{ this.filterBy.location }}</div>
            <div class="start-your-search" v-else>Start your search</div>
            <button class="search-btn">
                <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                        />
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <section class="search-bar">
        <div class="search-bar-container">
            <div class="search-element location-container">
                <label for="location">
                    <div class="location-input-container" @click="openListBox = !openListBox">
                        <div class="search-heading">Location</div>
                        <!-- <div class="search-text">Where are you going?</div> -->
                        <input
                            class="search-text location-text"
                            type="text"
                            v-model="filterBy.location"
                            placeholder="Where are you going?"
                        />
                    </div>
                </label>
            </div>
            <div class="vsep"></div>
            <div class="search-element date-from-container">
                <div class="date-from-picker-container">
                    <div class="search-heading date-picker-heading">
                        <span class="check-in">Check in</span>
                        <div class="vsep date-vsep"></div>
                        <span class="check-out">Check out</span>
                    </div>
                    <el-date-picker
                        v-model="filterBy.dates"
                        type="daterange"
                        start-placeholder="Add dates"
                        end-placeholder="Add dates"
                        format="M/D/YYYY"
                        clearable
                    />
                </div>
            </div>
            <div class="vsep"></div>
            <div class="guests-container search-element" @click.stop="toggleSelect">
                <div>
                    <div class="search-heading">Guests</div>
                    <div class="search-text" v-if="!selectOpen">{{ showNumOfGuests }}</div>
                    <div class="container">
                        <input type="checkbox" class="select-checkbox" />
                        <label
                            class="select-label"
                            for="select-checkbox"
                            v-if="selectOpen"
                        >{{ showNumOfGuests }}</label>
                        <div class="select-wrap">
                            <ul v-if="selectOpen" class="select">
                                <li class="option">
                                    <div class="options-list">
                                        <a href="#" title="First">
                                            <div class="option-adults option-title">Adults</div>
                                            <div class="option-age">Age 13 or above</div>
                                        </a>
                                    </div>
                                    <div class="btn-list">
                                        <button
                                            :disabled="filterBy.countOfGuests.adults === 0"
                                            @click.stop="updateCount('adults', -1)"
                                        >-</button>
                                        <span class="count-span">{{ filterBy.countOfGuests.adults }}</span>
                                        <button @click.stop="updateCount('adults', 1)">+</button>
                                    </div>
                                </li>
                                <li class="option">
                                    <div class="options-list">
                                        <a href="#" title="Second">
                                            <div class="option-child option-title">Children</div>
                                            <div class="option-age2">Ages 2–12</div>
                                        </a>
                                    </div>
                                    <div class="btn-list">
                                        <button
                                            :disabled="filterBy.countOfGuests.children === 0"
                                            @click.stop="updateCount('children', -1)"
                                        >-</button>
                                        <span class="count-span">
                                            {{
                                                filterBy.countOfGuests.children
                                            }}
                                        </span>
                                        <button @click.stop="updateCount('children', 1)">+</button>
                                    </div>
                                </li>
                                <li class="option">
                                    <div class="options-list">
                                        <a href="#" title="Third">
                                            <div class="option-infants option-title">Infants</div>
                                            <div class="option-age3">Under 2</div>
                                        </a>
                                    </div>
                                    <div class="btn-list">
                                        <button
                                            :disabled="filterBy.countOfGuests.infants === 0"
                                            @click.stop="updateCount('infants', -1)"
                                        >-</button>
                                        <span
                                            class="count-span"
                                        >{{ filterBy.countOfGuests.infants }}</span>
                                        <button @click.stop="updateCount('infants', 1)">+</button>
                                    </div>
                                </li>
                                <li class="option">
                                    <div class="options-list">
                                        <div class="option-pets option-title" title="fourth">Pets</div>
                                        <a class="pets-service" href="#">Bringing a service animal?</a>
                                    </div>
                                    <div class="btn-list">
                                        <button
                                            :disabled="filterBy.countOfGuests.pets === 0"
                                            @click.stop="updateCount('pets', -1)"
                                        >-</button>
                                        <span class="count-span">{{ filterBy.countOfGuests.pets }}</span>
                                        <button @click.stop="updateCount('pets', 1)">+</button>
                                    </div>
                                </li>
                                <span class="pet-msg">
                                    If you're lucky enough to have more than 2 pets with
                                    you, be sure to let your host know.
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="search-btn-container">
                    <button @click.prevent.stop="setFilter" class="search-btn">
                        <div class="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


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
            selectOpen: false,
            searchExpanded: false,
            stays: null,
            openListBox: false
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.stays = this.$store.getters.stays
    },
    methods: {
        setFilter() {
            let filterBy = { ...this.filterBy }
            this.$store.dispatch({ type: 'setFilter', filterBy })
            this.$router.push(`/stay?location=${this.filterBy.location}`)
            this.selectOpen = false;
        },
        goExplore() {
            this.$router.push(`/stay`)
        },
        handleScroll() {
            this.isActive = window.scrollY > 20
        },
        toggleSelect() {
            this.selectOpen = !this.selectOpen
        },
        updateCount(age, diff) {
            switch (age) {
                case 'adults':
                    this.filterBy.countOfGuests.adults += diff;
                    break;
                case 'children':
                    this.filterBy.countOfGuests.children += diff;
                    break;
                case 'infants':
                    this.filterBy.countOfGuests.infants += diff;
                    break;
                case 'pets':
                    this.filterBy.countOfGuests.pets += diff;
            }
        },
        expandSearch() {
            this.searchExpanded = !this.searchExpanded;
        }
    },
    computed: {
        numberOfGuests() {
            return this.filterBy.countOfGuests.adults + this.filterBy.countOfGuests.children;
        },
        isAdultsExists() {
            return this.filterBy.countOfGuests.adults > 0;
        },
        showNumOfGuests() {
            const guests = this.numberOfGuests > 1 ? 'guests' : 'guest'
            return this.isAdultsExists ? this.numberOfGuests + ' ' + guests : 'Add guests'
        }
    },
}
</script>

