import { stayService } from "../../services/stay.service.js"

export default {
    state: {
        stays: [],
        filterBy: {
            location: '',
            dates: {
                end: new Date(),
                start: new Date().getTime() - 3600 * 1000 * 24 * 7,
            },
            countOfGuests: {
                adults: 1,
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
        setStays(state, { stays }) {
            state.stays = stays;
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
            console.log(state.filterBy);
        }
    },
    actions: {
        async loadStays({ commit, state }) {
            console.log('fuck');
            console.log(state.filterBy);
            try {
                console.log(state.filterBy)
                let stays = await stayService.query(state.filterBy)
                console.log(stays)
                commit({ type: 'setStays', stays })
            } catch (err) {
                console.log('error', err);
            }

        },
        setFilter({ commit, dispatch }, { filterBy }) {
            console.log('me');
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        }
    }
}

