import { Router } from "express";
import { createProductController, deleteProductByIdController, getProductByIdController, getProductsController, updateProductByIdController } from "../controllers/products.controller.js";
import { validateMongoId } from "../middlewares/validateMongoId.js";


export const productsRouter = Router();

productsRouter.post("/", createProductController);

productsRouter.get("/", getProductsController)

productsRouter.get("/product/:id", validateMongoId,getProductByIdController)

productsRouter.put("/product/:id", validateMongoId, updateProductByIdController)

productsRouter.delete("/product/:id", validateMongoId,deleteProductByIdController);