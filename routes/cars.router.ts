import * as restify from "restify"
import { Cars } from "../models/cars.model"
import {ModelRoutes} from "../common/model.routes";

class CarsRouter extends ModelRoutes<Cars>{
    constructor() {
        super(Cars)
    }

    applyRoutes(application: restify.Server) {

        application.get("/cars", this.findAll )
        application.post("/cars" , this.store )
        application.get("/cars/:id", [ this.validateId, this.findById ])
        application.put("/cars/:id", [ this.validateId, this.findByIdAndUpdate ])
        application.patch("/cars/:id", [ this.validateId, this.findByIdAndUpdate ])
        application.del("/cars/:id", [ this.validateId, this.findByIdAndDelete ])

    }
}

export const carsRouter = new CarsRouter();