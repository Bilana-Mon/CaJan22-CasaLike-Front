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
async function query(filterBy) {
    let stays = await storageService.query(STAYS_KEY)
    let filteredStays = []
    if (!stays || !stays.length) {
        stays = [...gStays]
        utilService.saveToStorage(STAYS_KEY, stays)
    }
    filteredStays = _filterStays(filterBy, stays)
    console.log(filteredStays)
    console.log(filterBy);
    console.log(stays);
    return filteredStays
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

function _filterStays(filterBy, stays) {
    let searchedStays = []
    if (filterBy.location) {
        const regex = new RegExp(filterBy.location, 'i')
        searchedStays = stays.filter((stay) => regex.test(stay.address.street))
        console.log(searchedStays);
    }
    return searchedStays;
    // return searchedStays = stays.filter((stay) => regex.test(stay.address.street))
}