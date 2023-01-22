import customerService from "../services/customerService.js"

export const getCustomers = async(req, res) => {

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
    
}