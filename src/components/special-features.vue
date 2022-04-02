<template>
    <div class="special-features-container" v-if="stay">
        <ul>
            <li v-if="stay.host.isSuperhost">
                <div class="features-svg-container">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                        >
                        <path
                            d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"
                        />
                    </svg>
                </div>
                <div class="feature-text">
                    <span>{{ stay.host.fullname }} is a Superhost</span>
                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                </div>
            </li>
            <li v-if="stay.reviewScores.checkin === 10">
                <div class="features-svg-container">
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                >
                    <path
                        d="m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z"
                    />
                </svg>
                </div>
                <div class="feature-text">
                    <span>Great check-in experience</span>
                    <p>100% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
            </li>
            <li v-if="stay.reviewScores.location === 10">
                <div class="features-svg-container">
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                >
                    <path
                        d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    />
                </svg>
                </div>
                <div class="feature-text">
                    <span>Great location</span>
                    <p>100% of recent guests gave the location a 5-star rating.</p>
                </div>
            </li>
            <li v-if="isWifi">
                <div class="features-svg-container">
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                >
                    <path
                        d="m24.6666 1.66675h-17.33335c-1.65685475 0-3 1.34314525-3 3v26.4709039l11.66575-7.2926539 11.6676 7.2926539v-26.4709039c0-1.65686279-1.3431233-3-3-3zm0 2 .1166244.00672754c.4973508.05776355.8833756.48042438.8833756.99327246l-.0006 22.86225-9.6661012-6.041549-9.6668988 6.041549.00025-22.86225c0-.55228525.44771475-1 1-1z"
                    />
                </svg>
                </div>
                <div class="feature-text">
                    <span>Wifi</span>
                    <p>Guests often search for this popular amenity</p>
                </div>
            </li>
            <li v-if="isSelfCheckIn">
                <div class="features-svg-container">
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                >
                    <path
                        d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"
                    />
                </svg>
                </div>
                <div class="feature-text">
                    <span>Self check-in</span>
                    <p>Check yourself in with the lockbox.</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    name: 'special-features',
    props: {
        stay: Object
    },
    created() {
        this.getAmenities()
    },
    data() {
        return {
            isWifi: false,
            isSelfCheckIn: false
        }
    },
    methods: {
        getAmenities() {
            let amenities = this.stay.amenities 
            let wifiAmenity = amenities.find(amenity => amenity === 'Wifi')
            if (wifiAmenity) {
                this.isWifi = true;
            } else {
                this.isWifi = false;
            }
            let selfCheckInAmenity = amenities.find(amenity => amenity === 'Self check-in')
            if (selfCheckInAmenity) {
                this.isSelfCheckIn = true;
            } else {
                this.isSelfCheckIn = false;
            }
        }
    },
}
</script>