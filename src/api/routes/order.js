import { Router } from "express";

import {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder
} from "../controllers/orderController.js"

const router = Router()

// Gets all orders existing
router.get("/", getAllOrders)

// Create an order
router.post("/", createOrder)

//Gets order from orderId
router.get("/:orderId", getOrder)

// Update an order
// body: { new_state: "" }
router.put("/:orderId/", updateOrder)

// Delete an order
router.delete("/:orderId", deleteOrder)

export default router