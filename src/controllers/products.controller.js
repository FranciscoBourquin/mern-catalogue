
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

        if (products.length === 0) return res.status(200).json({
            message:"No hay productos en el catálogo", 
            products})

        res.status(200).json({products});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getProductByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductByIdService(id);
        if (!product) return res.status(404).json({
            message:`Producto con ID ${id} no encontrado`,
            product
        })
        res.status(200).json({product});

    } catch (error) {
        res.status(500).json({message: error.message});
    }

    
}

export const updateProductByIdController = async (req, res) => {
  const { id } = req.params;
  const productInfo = req.body;

  try {
    const updatedProduct = await updateProductByIdService(id, productInfo);
    if (!updatedProduct) return res.status(404).json({
        message: `Producto con ID ${id} no encontado`,
        updatedProduct
    });
    
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
        
        if (!deleteProduct) return res.status(404).json({
            message: `Producto con ID ${id} no encontrado`,
            deleteProduct
        });

        res.status(200).json({
            message: `Producto con ID ${id} eliminado exitosamente`,
            deleteProduct
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}