import db from "../db/index.js"

export const getOrders = async() => {
    return (await db.query("SELECT * FROM orders")).rows
}

//Crea la orden a partir de la pizza y el cliente
//Estado automático a requested
export const createOrder = async(pizza_id, customer_id) => {
    return (await db.query("INSERT INTO orders(pizza_id, customer_id, state) VALUES($1::INT, $2::INT, 'Requested')", [pizza_id, customer_id]))
}

export const setWorkerToOrder = async(order_id, worker_id) => {
    //Verificar si worker_id es un trabajador valido
}

export const findOrderById = async(order_id) => {
    const orderResult = await db.query("SELECT * FROM orders WHERE order_id = $1::INT", [order_id]).rows

    if (!orderResult)
        throw new Error("No order with given id")

    return orderResult
}

export const findAndUpdateOrder = async(order_id, new_state) => {
    return await db.query("UPDATE orders SET state = $1::VARCHAR WHERE order_id=$2::INT", [new_state, order_id])
}

export const findAndDeleteOrder = async(order_id) => {
    return await db.query("DELETE FROM orders WHERE order_id=$1::VARCHAR", [order_id])
}

export default {
    getOrders,
    createOrder,
    setWorkerToOrder,
    findOrderById,
    findAndUpdateOrder,
    findAndDeleteOrder
}