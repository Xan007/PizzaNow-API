import customerService from "../services/customerService.js"

export const getCustomers = async(req, res) => {
    res.send(await customerService.getCustomers())
}

export const getCustomerById = async(req, res) => {
    const { customerId } = req.params

    try {
        res.send(await customerService.findCustomerById(customerId))
    } catch (err) {
        next(err)
    }
}

export const getCustomerOrders = async(req, res) => {
    const { customerId } = req.params

    try {
        res.send(await customerService.getOrdersFromCustomer(customerId))
    } catch (err) {
        next(err)
    }
}