import pizzaService from "../services/pizzaService.js"

export const getAllPizzas = async(req, res) => {
    res.send(await pizzaService.getPizzas())
}

export const getPizzaType = async(req, res) => {
    const { pizzaType } = req.params

    try {
        res.send(await pizzaService.findPizzaByType(pizzaType))
    } catch (err) {
        res.status(400).send(err)
    }
    
}