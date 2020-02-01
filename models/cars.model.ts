import * as mongoose from "mongoose"


export interface Cars extends mongoose.Document{
    brand: string,
    name: string,
    year: number,
    plate: string,
    tires: string
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
    },
    tires: {
        type: String,
        required: true
    }
} );

export const Car = mongoose.model<Cars>("Car", carSchema);
