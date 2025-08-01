import { Router } from "express";
import { createProductController, deleteProductByIdController, getProductByIdController, getProductsController, updateProductByIdController } from "../controllers/products.controller.js";


export const productsRouter = Router();

productsRouter.post("/", createProductController);

productsRouter.get("/", getProductsController)

productsRouter.get("product/:id", getProductByIdController)

productsRouter.put("product/:id", updateProductByIdController)

productsRouter.delete("product/:id", deleteProductByIdController);