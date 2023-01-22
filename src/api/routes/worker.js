import { Router } from "express";

import {
    getAllWorkers,
    getWorkerById,
    getWorkersByJob,
    getWorkerOrders
} from "../controllers/workerController.js"

const router = Router()

// Returns all workers
router.get("/", getAllWorkers)

// Returns a worker by worker id
router.get("/:workerId", getWorkerById)

// Returns workers with job given
router.get("/:job", getWorkersByJob)

// Returns orders that a worker with job delivery has
router.get("/:workerId/orders", getWorkerOrders)

export default router