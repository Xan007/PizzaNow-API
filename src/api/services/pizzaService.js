import db from "../db/index.js"

export const getPizzas = async() => {
    return await db.query("SELECT * FROM pizzas")
}

export const findPizzaById = async(pizza_id) => {

}

export const findPizzaByType = async(pizza_type) => {
    return await db.query("SELECT * FROM pizzas WHERE type=$1::VARCHAR", [pizza_type])
}

export default {
    getPizzas,
    findPizzaById,
    findPizzaByType
}