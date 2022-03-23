// import { utilService } from "./util.service.js";
// import { storageService } from "./async-storage.service.js";


// const ORDERS_KEY = 'ordersDB'
// import gUsers from '../../data/user.json'
// import gStays from '../../data/stay.json'

// export const orderService = {
//     query,
//     getById,
//     remove,
//     save,
//     getEmptyOrder
// }
// const gOrders = _createOrders()

// async function query() {
//     return await storageService.query(ORDERS_KEY)
// }

// async function getById(id) {
//     return await storageService.getById(ORDERS_KEY, id)
// }

// function remove(id) {
//     return storageService.delete(ORDERS_KEY, id)
// }

// async function save(order) {
//     return order._id
//         ? await storageService.put(ORDERS_KEY, order)
//         : await storageService.post(ORDERS_KEY, order)
// }

// function getEmptyOrder() {
//     return Promise.resolve({
//         location: '',
//         fromDate: new Date(),
//         toDate: new Date(),
//         capacity: null,
//         user: '',
//         host: '',
//         createdAt: new Date()
//     })
// }

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
//         user: gUsers.fullname,
//         host: gStays.host.fullname,
//         createdAt: new Date()
//     }
// }

