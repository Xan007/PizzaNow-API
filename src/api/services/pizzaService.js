import db from "../db/index.js"

export const getPizzas = async() => {
    return await db.query("SELECT * FROM pizzas")
}

export const getPizzaFromType = async(pizzaType) => {
    return await db.query("SELECT * FROM pizzas WHERE type=$1::VARCHAR", [pizzaType])
}

export default {
    getPizzas,
    getPizzaFromType
}