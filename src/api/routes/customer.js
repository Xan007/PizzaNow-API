import { Router } from "express";

import { 
    getCustomerById, 
    getCustomers,
    getCustomerOrders

} from "../controllers/customerController.js"

import { validateId } from "../validations/customerSchemas.js";
import validateSchema from "../middleware/validateSchema.js";

const router = Router()

// Returns all customers
router.get("/", getCustomers)

// Returns customer by id
router.get("/:customerId", validateSchema(validateId, "params"), getCustomerById)

// Returns orders made by a customer
router.get("/:customerId/orders", validateSchema(validateId, "params"), getCustomerOrders)

export default router