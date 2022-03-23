export const utilService = {
    loadFromStorage,
    saveToStorage,
    loadFromSessionStorage,
    saveToSessionStorage,
    makeId
}


function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return val ? JSON.parse(val) : null
}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val)
}

function loadFromSessionStorage(key) {
    var val = sessionStorage.getItem(key)
    return val ? JSON.parse(val) : null
}

function saveToSessionStorage(key, val) {
    sessionStorage[key] = JSON.stringify(val)
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}