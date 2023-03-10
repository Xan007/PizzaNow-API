require("dotenv").config()

module.exports = {
    "server": {
        "host": "localhost",
        "port": process.env.PORT
    },

    "postgreSQL": {
        "user": process.env.DB_USER,
        "host": "localhost",
        "database": "pizza_now",
        "password": process.env.DB_PASSWORD
    }
}