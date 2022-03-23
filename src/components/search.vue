<template>
    <section class="search-bar">
        <form @submit.prevent="filterSearch">
            <div class="search-bar-container">
                <div class="location-container">
                    <label for="location">
                        <div class="location-input-container">
                            <div>Location</div>
                            <input type="text" placeholder="Where are you going?" />
                        </div>
                    </label>
                </div>
                <div class="date-from-container">
                    <div class="date-from-picker-container">
                        <div>Check in</div>
                        <div>Add dates</div>
                    </div>
                </div>
                <div class="date-to-container">
                    <div class="date-to-picker-container">
                        <div>Check out</div>
                        <div>Add dates</div>
                    </div>
                </div>
                <div class="guests-container">
                    <div class="guests-container">
                        <div>Guests</div>
                        <div>Add guests</div>
                    </div>
                </div>
                <div class="search-btn-container">
                    <button class="search-btn">
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

export default {
    name: 'search',
    data() {
        return {}
    },
    methods: {
        filterSearch() {
            console.log('searching')
        }
    },
    computed: {},
}
</script>

<style>
.search-bar {
    display: flex;
}
.search-bar-container {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.search-btn-container {
    display: flex;
    width: 10px;
    height: 20px;
    padding: 10px;
}
.search-btn {
    padding: 10px;
}
</style>