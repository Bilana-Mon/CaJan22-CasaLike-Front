import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

const STAYS_KEY = 'staysDB'
const gStays = '../data/stay.json'


export const stayService = {
    query,
    getById,
    remove,
    save,
    getEmptyStay
}

// add filter 
async function query(filterBy = {}) {
    const stays = await storageService.query(STAYS_KEY)
    if(!stays.length){
        stays = [...gStays]
        utilService.saveToStorage(STAYS_KEY,JSON.stringify(stays || null))
    }
    return stays
}

async function getById(id) {
    return await storageService.getById(STAYS_KEY, id)
}

// host functions
async function remove(id) {
    return await storageService.remove(STAYS_KEY, id)
}

async function save(stay) {
    return stay._id
        ? await storageService.put(STAYS_KEY, stay)
        : await storageService.post(STAYS_KEY, stay)
}


// when host adds stay
// async function getEmptyStay(){
//     return Promise.resolve({
//       name:'',
     
//     })
// }