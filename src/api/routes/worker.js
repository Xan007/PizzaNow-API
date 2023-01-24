import { Router } from "express";

import {
    getAllWorkers,
    getWorkerById,
    getWorkersByJob,
    getWorkerOrders
} from "../controllers/workerController.js"
import { validateId } from "../validations/workerSchemas.js";
import validateSchema from "../middleware/validateSchema.js"

const router = Router()

// Returns all workers
router.get("/", getAllWorkers)

// Returns a worker by worker id
router.get("/:worker_id", validateSchema(validateId, "params"), getWorkerById)

// Returns workers with job given
router.get("/:job", getWorkersByJob)

// Returns orders that a worker with job delivery has
router.get("/:worker_id/orders", validateSchema(validateId, "params"), getWorkerOrders)

export default router