import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';


// const fs = require('fs')

const STAYS_KEY = 'staysDB'
import gStays from '../../data/stay.json'




export const stayService = {
    query,
    getById,
    remove,
    save,
    // getEmptyStay
}

// add filter 
async function query() {
    let stays = await storageService.query(STAYS_KEY)
    if(!stays || !stays.length){
       stays = [...gStays]
       console.log(stays)
       utilService.saveToStorage(STAYS_KEY, stays)
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

function _buileFilter() {

}