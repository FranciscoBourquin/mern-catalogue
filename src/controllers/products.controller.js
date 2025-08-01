
import { createProductService, getProductsService, getProductByIdService, deleteProductByIdService, updateProductByIdService } from "../services/products.service.js";

export const createProductController = async (req, res) => {
    const product = req.body;
    try {
         const newProduct = await createProductService(product);
         return res.status(201).json({
            message: "Producto creado exitosamente",
            product: newProduct

         });

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getProductsController = async (req, res) => {
    try {
        const products = await getProductsService();
        res.status(200).json({
            message: "Productos encontrados:",
            products
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getProductByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductByIdService(id);
        res.status(200).json({
            message:`Producto con ID ${id} encontrado`,
            product
        })

    } catch (error) {
        res.status(500).json({message: error.message});
    }

    
}

export const updateProductByIdController = async (req, res) => {
  const { id } = req.params;
  const productInfo = req.body;

  try {
    const updatedProduct = await updateProductByIdService(id, productInfo);
    res.status(200).json({
      message: `Producto con ID ${id} actualizado exitosamente`,
      updatedProduct
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProductByIdController = async (req, res) => {
    const {id} = req. params;

    try {
        const deleteProduct = await deleteProductByIdService(id); 
        res.status(200).json({
            message: `Producto con ID ${id} eliminado exitosamente`,
            deleteProduct
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}