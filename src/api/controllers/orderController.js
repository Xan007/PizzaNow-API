import orderService from "../services/orderService.js"

export const getAllOrders = async (req, res) => {
    res.send(await orderService.getOrders())
}

export const createOrder = async (req, res) => {
    const { pizza_id, customer_id } = req.body

    try {
        await orderService.createOrder(pizza_id, customer_id)

        res.send("Order created")
    } catch (err) {
        next(err)
    }
}

export const getOrder = async (req, res) => {
    const { orderId } = req.params

    try {
        res.send(await orderService.findOrderById(orderId))
    } catch (err) {
        next(err)
    }
}

export const updateOrder = async (req, res) => {
    const { orderId } = req.params
    const { new_state } = req.body

    try {
        await orderService.findAndUpdateOrder(orderId, new_state)
        res.send("Se actualizo el estado de la orden")
    } catch (err) {
        next(err)
    }
}

export const deleteOrder = async (req, res) => {
    const { orderId } = req.params

    try {
        await orderService.findAndDeleteOrder(orderId)
        res.send("Se elimino la orden correctamente")
    } catch (err) {
        next(err)
    }
}