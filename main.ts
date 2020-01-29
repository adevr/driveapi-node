import { Server } from "./server/server"
import { usersRouter } from "./routes/users.router"
import { carsRouter } from "./routes/cars.router";

const routes = [
    usersRouter,
    carsRouter
]

const server = new Server()
server.bootstrap(routes).then( server => {
    console.log("Server is listening on: ", server.application.address())
} ).catch( error => {
    console.log("Server Failed to start")
    console.error(error)
    process.exit(1)
} )