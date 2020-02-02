import * as mongoose from "mongoose"


export interface Extras extends mongoose.Document{
    name: String,
    description: String,
    price: Number
}


export const extraSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        maxlength: 500
    },
    price: {
        type: Number,
        required: true
    }
} )
