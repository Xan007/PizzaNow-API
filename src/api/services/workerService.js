import db from "../db/index.js"

export const getWorkers = async() => {
    return (await db.query("SELECT * FROM workers")).rows
}

export const findWorkerById = async(worker_id) => {
    const rowResult = (await db.query("SELECT * FROM workers WHERE worker_id=$1::INT", [worker_id])).rows[0]

    if (!rowResult)
        throw new Error("No worker with given id")

    return rowResult
}

export const getWorkersFromJob = async(job_name) => {
    return (await db.query("SELECT * FROM workers WHERE job = $1::VARCHAR", [job_name])).rows
}

export const getOrdersFromWorker = async(worker_id) => {
    const ordersResult = (await db.query("SELECT * FROM orders INNER JOIN workers USING(worker_id) WHERE worker_id = $1::INT", [worker_id])).rows

    return ordersResult
}

export default {
    getWorkers,
    findWorkerById,
    getWorkersFromJob,
    getOrdersFromWorker
}