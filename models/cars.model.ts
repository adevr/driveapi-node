import * as mongoose from "mongoose"
import { Extras, extraSchema } from "./extras.model";


export interface Cars extends mongoose.Document{
    brand: string,
    name: string,
    year: number,
    plate: string,
    tires: string,
    extras: Extras[]
}


const carSchema = new mongoose.Schema({
    brand: {
      type: String,
      required: true,
      maxlength: 80,
      minlength: 3
    },
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    year: {
        type: Number,
        required: true,
        maxlength: 4
    },
    plate: {
        type: String,
        required: false,
        unique: true,
    },
    tires: {
        type: String,
        required: true
    } ,
    extras : {
        type: [ extraSchema ],
        required: false,
        select: true,
        default: []
    }
} )

export const Cars = mongoose.model<Cars>("Cars", carSchema);
