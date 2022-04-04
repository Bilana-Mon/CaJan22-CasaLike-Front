// import { storageService } from "./async-storage.service.js"
// import { utilService } from "./util.service.js"
import { httpService } from "./http.service.js"

const gUser = 'Bilana'
const gHost = 'Kyrill'

// const gUsers = '../data/user.json'
// const USERS_KEY = 'usersDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
    getLoggedinHost
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
    // let users = await utilService.loadFromStorage(USERS_KEY)
    // if (!users || !users.length) {
    //     users = gUsers
    // }
    // const loginUser = users.find(user => user.username === username && user.password === password)
    // return loginUser;
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
    // const newUser = {
    //     username,
    //     password,
    //     fullname,
    //     imgUrl: "https://robohash.org/59985?set=set1"
    // }
    // return await storageService.post(USERS_KEY, newUser)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    // return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
    return gUser
}

function getLoggedinHost() {
    return gHost
}