import { Router } from "./router";
import * as mongoose from "mongoose"


export abstract class ModelRoutes<D extends mongoose.Document> extends Router
{

    constructor( protected  model: mongoose.Model<D> ) {
        super();
    }

    findAll = ( req, resp, next ) => {
        this.model.find().then( this.render( resp, next ) ).catch( next )
    }

    findById = (req, resp, next) => {
        this.model.findById(req.params.id).then( this.render(resp, next) ).catch( next )
    }

    store = (req, resp, next) => {
        let model = new this.model(req.body)
        model.save().then( this.render(resp, next) ).catch( next )
    }

    findByIdAndUpdate = (req, resp, next) => {
        const options = { runValidators: true, new: true }
        this.model.findByIdAndUpdate(req.params.id, { $set: req.body }, options ).then( this.render(resp, next) ).catch( next )
    }

}