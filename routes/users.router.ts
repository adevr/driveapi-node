import * as restify from "restify"
import { NotFoundError } from "restify-errors";
import { User } from "../models/users.model"
import {ModelRoutes} from "../common/model.routes";

class UsersRouter extends ModelRoutes<User> {

    constructor() {
        super(User)
        this.on( "beforeRender", document => {
            document.password = undefined
        } )
    }

    applyRoutes(application: restify.Server){
        
        application.get("/users", this.findAll )

        application.get("/users/:id", this.findById )

        application.post("/users" , this.store )

        application.put("/users/:id", (req, resp, next) => {
            const options = { runValidators: true, new: true }
            User.findByIdAndUpdate(req.params.id, { $set: req.body }, options).then( user => {
                resp.json({ user: user, message: "Updated Sucessfully" })
                return next()
            } ).catch( err => {
                throw new NotFoundError(`Provided id was not found: ${req.params.id}`)
            } )
        } )

        /**
         * PATCH
         * O Método patch possibilita fazer diferentes coisas num pedido só
         * é possível eliminar, alterar e remover recursos
         * com o json na nova meta:
         *   1. se a propriedade não existir, é adicionada
         *   2. se a propriedade existir é alterada
         *   3. para remover a propriedade basta atribuir NULL
         */
        application.patch("/users/:id", (req, resp, next) => {
            const options = { runValidators:true, new: true }
            User.findByIdAndUpdate(req.params.id, { $set: req.body }, options).then( this.render(resp, next) ).catch( next )
        } )

        application.del("/users/:id", (req, resp, next) => {
            User.findByIdAndRemove(req.params.id).then( user => {
                if ( user ){
                    resp.json({ user: user, message: "Deleted Sucessfully" })
                    return next()
                }else{
                    throw new NotFoundError(`Provided id was not found: ${req.params.id}`)
                }
            } )
        } )

    }
}

export const usersRouter = new UsersRouter()