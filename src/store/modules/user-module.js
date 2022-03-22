import { userService } from '../../services.user.service.js';
import { utilService } from '../../services/util.service.js';

export default {
    state: {
        loggedInUser: utilService.loadFromSessionStorage('user') || null,
    },
    getters: {
        user(state) {
            return state.loggedInUser
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user
        }
    },
    actions: {
        async login({ commit }, { cred }) {
            try {
                const user = await userService.login(cred)
                commit({ type: 'setUser', user })
                utilService.saveToSessionStorage('user', user)
            } catch (err) {
                console.log(err)
            }
        },
        async signup({ commit }, { cred }) {
            try {
                const user = await userService.signup(cred)
                commit({ type: 'setUser', user })
                utilService.saveToSessionStorage('user', user)
            } catch (err) {
                console.log(err)
            }
        },
        logout({ commit }) {

            userService.logout()
            commit({ type: 'setUser', user: null })
            sessionStorage.removeItem('user')

        },
    }
}