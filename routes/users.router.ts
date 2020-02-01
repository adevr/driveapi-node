import * as restify from "restify"
import { NotFoundError } from "restify-errors";
import { User } from "../models/users.model"
import {ModelRoutes} from "../common/model.routes";

class UsersRouter extends ModelRoutes<User> {

    constructor() {
        super(User);
        this.on( "beforeRender", document => {
            document.password = undefined
        } )
    }

    applyRoutes(application: restify.Server){
        
        application.get("/users", this.findAll )
        application.post("/users" , this.store )
        application.get("/users/:id", [ this.validateId, this.findById ])
        application.put("/users/:id", [ this.validateId, this.findByIdAndUpdate ])
        application.patch("/users/:id", [ this.validateId, this.findByIdAndUpdate ])
        application.del("/users/:id", [ this.validateId, this.findByIdAndDelete ])

    }
}

export const usersRouter = new UsersRouter()