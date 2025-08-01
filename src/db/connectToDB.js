import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Base de datos conectada exitosamente");
        
    } catch (error) {
        throw new Error(`Error al conectarse a la base de datos: ${error.message}`);
        
    }
}