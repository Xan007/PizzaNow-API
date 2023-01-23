import workerService from "../services/workerService.js"

export const getAllWorkers = async(req, res) => {
    res.send(await workerService.getWorkers())
}

export const getWorkerById = async(req, res) => {
    const { workerId } = req.params
    
    try {
        res.send(await workerService.findWorkerById(workerId))
    } catch (err) {
        res.status(400).send(`${err}`)
    }
}

export const getWorkersByJob = async(req, res) => {
    const { job } = req.params

    try {
        res.send(await workerService.getWorkersFromJob(job))
    } catch (err) {
        res.status(400).send(`${err}`)
    }
}

export const getWorkerOrders = async(req, res) => {
    const { workerId } = req.params
    
    try {
        res.send(await workerService.getOrdersFromWorker(workerId))
    } catch (err) {
        res.status(400).send(`${err}`)
    }
}