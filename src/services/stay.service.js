// import { storageService } from './async-storage.service.js';
// import { utilService } from './util.service.js';
import { httpService } from './http.service'


// const fs = require('fs')

// const STAYS_KEY = 'staysDB'
// import gStays from '../../data/stay.json'


export const stayService = {
    query,
    getById,
    // remove,
    // save,
    // getEmptyStay
}

// add filter 
async function query(filterBy = {}) {
    console.log('hi');
    return await httpService.get(`stay`, filterBy)

    // console.log(8888888 ,filterBy);
    // let stays = await storageService.query(STAYS_KEY)
    // if (!stays || !stays.length) {
    //     stays = [...gStays]
    //     utilService.saveToStorage(STAYS_KEY, stays)
    // }
    // if (filterBy.location) {
    //     let filteredStays = _filterStays(filterBy, stays)
    //     console.log(filteredStays)
    //     return filteredStays
    // } else {
    //     return stays
    // }   
}

async function getById(stayId) {
    return await httpService.get(`stay/${stayId}`)
    // return await storageService.getById(STAYS_KEY, id)
}

// host functions
// async function remove(stayId) {
//     return await httpService.delete(`stay/${stayId}`)
//     // return await storageService.remove(STAYS_KEY, id)
// }

// async function save(stay) {
//     return stay._id
//         ? await storageService.put(`stay/${stay._id}`, stay)
//         : await storageService.post(`stay`, stay)
// }


// when host adds stay
// async function getEmptyStay(){
//     return Promise.resolve({
//       name:'',

//     })
// }

// function _filterStays(filterBy, stays) {
//     console.log(filterBy, stays);
//     let searchedStays = []
//     if (filterBy.location) {
//         const regex = new RegExp(filterBy.location, 'i')
//         searchedStays = stays.filter((stay) => regex.test(stay.address.street))
//         console.log(searchedStays);
//     }
//     return searchedStays;
//     // return searchedStays = stays.filter((stay) => regex.test(stay.address.street))
// }