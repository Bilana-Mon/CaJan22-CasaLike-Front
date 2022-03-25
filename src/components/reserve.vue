<template>
    <section v-if="stay" class="reserve-card">
        <p>
            <span>{{ getFormattedPrice }}</span> / night
            <span>
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: inline-block; height: 14px; width: 14px; fill: #ff385c;"
                    class="st-current"
                >
                    <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fill-rule="evenodd"
                        class
                    />
                </svg>
            </span>
            <span>{{ getFormattedRate }}</span> ·
            <a href="#">{{ stay.numOfReviews }} reviews</a>
        </p>
        <el-date-picker
            v-model="dates"
            type="daterange"
            range-separator="|"
            start-placeholder="Add dates"
            end-placeholder="Add dates"
        />
        <div class="container">
            <input type="checkbox" class="select-checkbox" />
            <label class="select-label" for="select-checkbox">Guests</label>
            <div class="select-wrap">
                <ul class="select">
                    <li class="option">
                        <a href="#" title="First">
                            Adults
                            Age 13+
                        </a>
                        <button
                            :disabled="countOfGuests.adults === 0"
                            @click="updateCount('adults', -1)"
                        >-</button>
                        {{ countOfGuests.adults }}
                        <button
                            @click="updateCount('adults', 1)"
                        >+</button>
                    </li>
                    <li class="option">
                        <a href="#" title="Second">
                            Children
                            Ages 2–12
                        </a>
                        <button
                            :disabled="countOfGuests.children === 0"
                            @click="updateCount('children', -1)"
                        >-</button>
                        {{ countOfGuests.children }}
                        <button
                            @click="updateCount('children', 1)"
                        >+</button>
                    </li>
                    <li class="option">
                        <a href="#" title="Third">
                            Infants
                            Under 2
                        </a>
                        <button
                            :disabled="countOfGuests.infants === 0"
                            @click="updateCount('infants', -1)"
                        >-</button>
                        {{ countOfGuests.infants }}
                        <button
                            @click="updateCount('infants', 1)"
                        >+</button>
                    </li>
                    <li class="option">
                        <a href="#" title="fourth">
                            Pets
                            <a href="#">Bringing a service animal?</a>
                        </a>
                        <button
                            :disabled="countOfGuests.pets === 0"
                            @click="updateCount('pets', -1)"
                        >-</button>
                        {{ countOfGuests.pets }}
                        <button
                            @click="updateCount('pets', 1)"
                        >+</button>
                    </li>
                    <a href="#">Close</a>
                </ul>
                <button class="mouse-cursor-gradient-tracking" @mousemove="changeColor">
                    <span>Reserve</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'reserve',
    props: {
        stay: Object,

    },
    components: {},
    created() { },
    data() {
        return {
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
        }
    },
    methods: {
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
        changeColor(e) {
            let btn = document.querySelector('.mouse-cursor-gradient-tracking');
            btn.addEventListener('mousemove', e => {
                let rect = e.target.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                btn.style.setProperty('--x', x + 'px');
                btn.style.setProperty('--y', y + 'px');
            });
        }
    },
    computed: {
        getFormattedPrice() {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.stay.price)
        },
        getFormattedRate() {
            let rate = +(this.stay.reviewScores.rating) / 20
            return rate
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
/* .container {
    position: relative;
}
.select-checkbox {
    display: none;
}
.select-label {
    display: block;
    border: 1px solid;
    padding: 4px;
}
.select-label:before {
    content: "\25BE";
    float: right;
}
.select-wrap {
    position: absolute;
    width: 100%;
    background: #eee;
    display: none;
}
.select-checkbox:checked ~ .select-wrap {
    display: block;
}
.select {
    list-style: none;
    padding: 10px;
    margin: 0;
}
.select a {
    display: block;
    text-decoration: none;
    color: inherit;
} */
</style>