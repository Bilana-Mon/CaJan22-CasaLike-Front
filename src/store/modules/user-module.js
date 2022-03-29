import { userService } from '../../services/user.service.js';
// import { utilService } from '../../services/util.service.js';

export default {
    state: {
        loggedInUser: userService.getLoggedinUser(),
    },
    getters: {
    loggedinUser({ loggedinUser }) { return loggedinUser },
    },
    mutations: {
        setLoggedinUser(state, { user }) {
            state.loggedinUser = (user) ? {...user} : null;
        }
    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred);
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }

        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
    }
}