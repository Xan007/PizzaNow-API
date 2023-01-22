import customerService from "../services/customerService.js"

export const getCustomers = async(req, res) => {
    customerService.getCustomers()
}

export const getCustomerById = async(req, res) => {
    const { customerId } = req.params

    try {
        res.send(await customerService.findCustomerById(customerId))
    } catch (err) {
        res.status(400).send(`${err}`)
    }
}

export const getCustomerOrders = async(req, res) => {
    const { customerId } = req.params

    try {
        res.send(await customerService.getOrdersFromCustomer(customerId))
    } catch (err) {
        res.status(400).send(`${err}`)
    }
}