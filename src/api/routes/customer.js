import { Router } from "express";

import { 
    getCustomerById, 
    getCustomers,
    getCustomerOrders

} from "../controllers/customerController.js"

const router = Router()

// Returns all customers
router.get("/", getCustomers)

// Returns customer by id
router.get("/:customerId", getCustomerById)

// Returns orders made by a customer
router.get("/:customerId/orders", getCustomerOrders)

export default router