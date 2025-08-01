import { productModel } from "../models/product.model.js"

export const createProductService = async (product) => {
    const {name, price, image, description, availability, stock} = product;
    try {
        const newProduct = await productModel.create({ name, price, image, description, availability, stock});
        return newProduct;
    } catch (error) {
        throw new Error(`Error al crear producto: ${error.message}`);
        
    }
}

export const getProductsService = async () => {
    
    try {
        const products = await productModel.find();
        if (!products){
            return "Error al traer productos"
        }

        return products

    } catch (error) {
        throw new Error(error.message);
        
    }
}

export const getProductByIdService = async (id) => {

    try {
        const product = await productModel.findById({_id: id});

        if(!product) {
            return `Producto con ID ${id} no encontrado`
        }

        return product;

    } catch (error) {
        throw new Error(error.message);
        
    }
}

export const updateProductByIdService = async (id, productInfo) => {
    try {
        const product = await productModel.findByIdAndUpdate(id, productInfo, {new: true});
        if (!product) return "Producto no encontrado";
        return product;


    } catch (error) {
        throw new Error(error.message);
        
    }

}

export const deleteProductByIdService = async (id) => {
    const deleteProduct = await productModel.findByIdAndDelete({_id: id});

    try {

        if (!deleteProduct) return "Producto no encontrado";
        return deleteProduct;

    } catch (error) {
        return error.messaage
    }
    
}

