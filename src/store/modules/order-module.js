import { orderService } from "../../services/order.service.js"

export default {
    state: {
        orders: [],
        currOrder: {}
    },
    getters: {
        orders({ orders }) {
            return orders
        },
        order({ currOrder }) {
            console.log(currOrder);
            return currOrder;
        }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        saveOrder(state, { order }) {
            state.currOrder = order;
            console.log(state.currOrder);
            console.log(state.currOrder);
            // const idx = state.orders.findIndex((currOrder) => currOrder._id === order._id)
            // if (idx !== -1) state.orders.splice(idx, 1, order)
            // else state.orders.push(order)
        },
        setOrder(state, { order }) {
            state.currOrder = order;
            console.log('set order lala', order);
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
            let orders = await orderService.query();
            commit({ type: 'setOrders', orders })
        },
        async saveOrder({ commit, dispatch }, { order }) {
            await orderService.save(order)
            console.log('lala', order);
            commit({ type: 'saveOrder', order })
            dispatch({ type: 'loadOrders' });
        },
        async setOrder({ commit, dispatch }, { order }) {
            await orderService.save(order)
            console.log('lala', order);
            commit({ type: 'setOrder', order })
            dispatch({ type: 'loadOrders' });
        },
        async removeOrder({ commit }, { orderId }) {
            await orderService.remove(orderId)
            commit({ type: 'removeOrder', orderId })
        }
    }
}