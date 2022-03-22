export const storageService = {
    query,
    getById,
    post,
    put,
    remove,
}

async function query(entityType) {
    try {
        var entities = await JSON.parse(localStorage.getItem(entityType)) || []
        return new Promise((resolve) => {
            resolve(entities)
        })
    } catch (err) {
        console.log('error', err);
    }

}

async function getById(entityType, entityId) {
    try {
        const entities = await query(entityType)
        return entities.find((entity) => entity._id === entityId)
    } catch (err) {
        console.log('error', err);
    }
}
async function post(entityType, newEntity) {
    newEntity._id = _makeId()
    try {
        const entities = await query(entityType)
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    } catch (err) {
        console.log('error', err);
    }

}

async function put(entityType, updatedEntity) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    } catch (err) {
        console.log('error', err);
    }

}

async function remove(entityType, entityId) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex((entity) => entity._id === entityId)
        if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    } catch (err) {
        console.log('error', err);
    }

}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}