import { Router } from "express";

import {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder
} from "../controllers/orderController.js"

import { postOrder, validateId, validateState } from "../validations/orderSchemas.js";
import validateSchema from "../middleware/validateSchema.js"

const router = Router()

// Gets all orders existing
router.get("/", getAllOrders)

// Create an order
router.post("/", validateSchema(postOrder, "body"), createOrder)

//Gets order from orderId
router.get("/:orderId", validateSchema(validateId, "params"), getOrder)

// Update an order
// body: { new_state: "" }
router.put("/:orderId/", validateSchema(validateId, "params"), validateSchema(validateState, "body"), updateOrder)

// Delete an order
router.delete("/:orderId", validateSchema(validateId), deleteOrder)

export default router