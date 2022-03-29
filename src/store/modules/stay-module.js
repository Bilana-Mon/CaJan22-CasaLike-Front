import { stayService } from "../../services/stay.service.js"

export default {
    state: {
        stays: [],
        filterBy: {
            location: undefined,
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
    getters: {
        stays({ stays }) {
            console.log(stays);
            return stays
        },
        staysToShow({ stays }) {
            const copyStays = JSON.parse(JSON.stringify(stays))
            return copyStays
        },
        filter({ filterBy }) {
            return filterBy
        }
    },
    mutations: {
        setStays(state, stays) {
            state.stays = stays;
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
            console.log(state.filterBy);
        }
    },
    actions: {
        async loadStays({ commit }) {
            try {
                let stays = await stayService.query()
                console.log(stays)
                commit({ type: 'setStays', stays })
            } catch (err) {
                console.log('error', err);
            }

        },
        setFilter({ dispatch, commit }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        }
    }
}

