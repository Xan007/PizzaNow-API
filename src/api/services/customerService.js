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

export default {
    findCustomerById
}