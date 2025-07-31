import mongoose from "mongoose";

const collection = "Product";

const productSchema = new mongoose.Schema ({
    
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    } 

});

export const productModel =   mongoose.model (collection, productSchema);
   

