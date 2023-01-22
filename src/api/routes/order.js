import { Router } from "express";

import {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
} from "../controllers/orderController.js"

const router = Router()

// Gets all orders existing
router.get("/", getAllOrders)

// Create an order
router.post("/create", createOrder)

// Update an order
router.put("/:orderId/", updateOrder)

// Delete an order
router.delete("/:orderId", deleteOrder)

export default router