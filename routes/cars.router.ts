import * as restify from "restify"
import { NotFoundError } from "restify-errors";
import { Cars, Car } from "../models/cars.model"
import {ModelRoutes} from "../common/model.routes";

class CarsRouter extends ModelRoutes<Cars>{
s
    constructor() {
        super(Car)
    }

    applyRoutes(application: restify.Server) {
        application.get("/cars", this.findAll)

        application.get("/cars/:id", this.findById)

        application.post("/cars", this.store)

        application.put("/cars/:id", this.findByIdAndUpdate)
    }
}

export const carsRouter = new CarsRouter()