export const utilService = {
    loadFromStorage,
    saveToStorage,
    loadFromSessionStorage,
    saveToSessionStorage
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
