import { stayService } from "../../services/stay.service.js"

export default {
    state: {
        stays: [],
        filterBy: {}
    },
    getters: {
        stays({ stays }) {
            return stays
        },
        staysToShow({ stays, filterBy }) {
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
        }
    },
    actions: {
        async loadStays({ commit, state }) {
            try {
               let stays = await stayService.query()
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

