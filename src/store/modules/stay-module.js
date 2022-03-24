import { stayService } from "../../services/stay.service.js"

export default {
    state: {
        stays: [],
        filterBy: {
            location: ''
        }
    },
    getters: {
        stays({ stays }) {
            return stays
        },
        staysToShow({ stays }) {
            const copyStays = JSON.parse(JSON.stringify(stays))
            return copyStays
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
            try {
                let stays = await stayService.query(state.filterBy)
                console.log(stays)
                commit({ type: 'setStays', stays })
            } catch (err) {
                console.log('error', err);
            }

        },
        setFilter({ dispatch, commit }, { filterBy }) {
            console.log(filterBy);
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        }
    }
}

