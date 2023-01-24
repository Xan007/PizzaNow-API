import workerService from "../services/workerService.js"

export const getAllWorkers = async (req, res) => {
    res.send(await workerService.getWorkers())
}

export const getWorkerById = async (req, res) => {
    const { workerId } = req.params

    try {
        res.send(await workerService.findWorkerById(workerId))
    } catch (err) {
        next(err)
    }
}

export const getWorkersByJob = async (req, res) => {
    const { job } = req.params

    try {
        res.send(await workerService.getWorkersFromJob(job))
    } catch (err) {
        next(err)
    }
}

export const getWorkerOrders = async (req, res) => {
    const { workerId } = req.params

    try {
        const workerArr = await workerService.findWorkerById(workerId)

        if (workerArr.job && workerArr.job != "delivery")
            return next(new Error("Worker is not in delivery job"))

        return res.send(await workerService.getOrdersFromWorker(workerId))
    } catch (err) {
        next(err)
    }
}