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
        }
    },
    getters: {
        stays({ stays }) {
            return stays
        },
        staysToShow({ stays }) {
            const copyStays = JSON.parse(JSON.stringify(stays))
            return copyStays
        },
        filter({filterBy}) {
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
        async loadStays({ commit, state }) {
            try {
                let stays = await stayService.query(state.filterBy)
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

