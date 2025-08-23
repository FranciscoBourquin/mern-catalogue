// importar express
import express, { urlencoded } from "express";
import { productsRouter } from "./routes/products.routes.js";
import { connectToDB } from "./db/connectToDB.js";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use("/", productsRouter);

//Conexión a la base de datos
connectToDB();

// levantamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
})