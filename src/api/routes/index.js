import customer from "./customer.js"
import order from "./order.js"
import pizza from "./pizza.js"
import worker from "./worker.js"

export default (app) => {
    app.use((err, req, res, next) => {
        res.status(400).send(err)
    })

    app.use("/api/customers", customer)
    app.use("/api/orders", order)
    app.use("/api/pizzas", pizza)
    app.use("/api/workers", worker)
}