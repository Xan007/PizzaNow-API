import db from "../db/index.js"

export const getCustomers = async () => {
    return await db.query("SELECT * FROM customers").rows
}

export const findCustomerById = async (customer_id) => {
    const rowResult = (await db.query("SELECT * FROM customers WHERE customer_id=$1::INT", [customer_id])).rows[0]

    if (!rowResult)
        throw new Error("No customer with given id")

    return rowResult
}

export const getOrdersFromCustomer = async (customer_id) => {
    const rowsResult = (await db.query("SELECT * FROM orders INNER JOIN customers USING(customer_id) WHERE customer_id = $1::INT", [customer_id])).rows

    return rowsResult
}

export default {
    findCustomerById,
    getCustomers,
    getOrdersFromCustomer
}