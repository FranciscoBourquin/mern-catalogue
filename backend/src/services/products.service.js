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

        return products;

    } catch (error) {
        throw new Error(error.message);
        
    }

}


export const getProductByIdService = async (id) => {

    try {
        const product = await productModel.findById(id);
        if (!product) return product;

        return product;

    } catch (error) {
        throw new Error(error.message);
        
    }
}

export const updateProductByIdService = async (id, productInfo) => {
  try {
    const product = await productModel.findById(id);
    if (!product) return product;

    Object.assign(product, productInfo);

    if (typeof product.stock === 'number') {
      product.availability = product.stock === 0 ? 'Agotado' : 'Disponible';
    }

    const updatedProduct = await product.save(); 
    return updatedProduct;

  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProductByIdService = async (id) => {
    const deleteProduct = await productModel.findByIdAndDelete(id);

    try {

        if (!deleteProduct) return deletedProduct;
         
        return deleteProduct;

    } catch (error) {
        throw new Error(error.messaage); 
    }
    
}

