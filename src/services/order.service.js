// import { utilService } from "./util.service.js";
// import { storageService } from "./async-storage.service.js";
import { httpService } from "./http.service.js";


// const ORDERS_KEY = 'ordersDB'
// import gUsers from '../../data/user.json'
// import gStays from '../../data/stay.json'

export const orderService = {
    query,
    getById,
    save,
    getEmptyOrder
}

// _createOrders()

async function query() {
    return await httpService.get(`order`)
}

async function getById(orderId) {
    return await httpService.get(`order/${orderId}`)
}

// async function remove(id) {
//     return await storageService.delete(ORDERS_KEY, id)
// }

async function save(order) {
    console.log('orderFront', order);
    return await httpService.post(`order`, order)
}

function getEmptyOrder() {
    return Promise.resolve({
        nameOfStay: '',
        location: '',
        dates: {
            0: new Date(),
            1: new Date()
        },
        capacity: [],
        price: null,
        user: 'Fernanda',
        host: '',
        fees: ''
    })
}

// function _createOrders() {
//     let orders = utilService.loadFromStorage(ORDERS_KEY)
//     if (!orders || !orders.length) {
//         orders = [
//             _createOrder('Canada', new Date(2022, 2, 23), new Date(2022, 2, 25), 4, 'Edgar', 'Maria')
//         ]
//         utilService.saveToStorage(ORDERS_KEY, orders)
//     }
//     return orders
// }

// function _createOrder(location, fromDate, toDate, capacity, user, host) {
//     return {
//         // _id: utilService.makeId(),
//         location,
//         fromDate,
//         toDate,
//         capacity,
//         user,
//         host,
//         createdAt: new Date()
//     }
// }

