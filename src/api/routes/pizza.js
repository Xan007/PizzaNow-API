import { Router } from "express";

import {
    getAllPizzas,
    getPizzaType
} from "../controllers/pizzaController.js"

const router = Router()

// Returns all pizzas
router.get("/", getAllPizzas)

// Returns info about a Pizza type
router.get("/:pizzaType", getPizzaType)

export default router