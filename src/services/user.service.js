import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const gUsers = '../data/user.json'
const USERS_KEY = 'usersDB'

export const userService = {
    login,
    signup,
    logout,
    // getGuestUser
}

async function login({ username, password }) {
    const users = await utilService.loadFromStorage(USERS_KEY)
    if (!users || !users.length) {
        users = gUsers
    }
    const loginUser = users.find(user => user.username === username && user.password === password)
    return loginUser;
}

async function signup({ username, password, fullname }) {
    const newUser = {
        username,
        password,
        fullname,
        imgUrl: "https://robohash.org/59985?set=set1"
    }
    return await storageService.post(USERS_KEY, newUser)
}

async function logout() {
    console.log('logged out');
}

// function getGuestUser() {
//     return {
//         fullname: 'Guest User',
//         username: 'guest',
//         password: 'guest'
//     }
// }