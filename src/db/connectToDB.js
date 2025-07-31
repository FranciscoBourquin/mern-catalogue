import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://franbourquin89:MLoSq22MsuxcVM7E@fran2024.2kbny0g.mongodb.net/mern-catalog?retryWrites=true&w=majority&appName=Fran2024");

        console.log("Base de datos conectada exitosamente");
        
    } catch (error) {
        throw new Error(`Error al conectarse a la base de datos: ${error.message}`);
        
    }
}