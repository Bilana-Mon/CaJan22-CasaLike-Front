import { orderService } from "../../services/order.service.js"

export default {
    state: {
        orders: []
    },
    getters: {
        orders({ orders }) {
            return orders
        }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        saveOrder(state, { order }) {
            const idx = state.orders.findIndex((currOrder) => currOrder._id === order._id)
            if (idx !== -1) state.orders.splice(idx, 1, order)
            else state.orders.push(order)
        },
        removeOrder(state, { orderId }) {
            const idx = state.orders.findIndex((currOrder) => currOrder._id === orderId)
            state.orders.splice(idx, 1)
        }
    },
    actions: {
        async loadOrders({ commit, state }) {
            const orders = await orderService.query()
            commit({ type: 'setOrders', orders })
        },
        async saveOrder({ commit }, { order }) {
            const order = await orderService.save(order)
            commit({ type: 'saveOrder', order })
        },
        async removeOrder({ commit }, { orderId }) {
            await orderService.remove(orderId)
            commit({ type: 'removeOrder', orderId })
        }
    }
}