//Módulos:
import express from "express";
import "dotenv/config";
import cors from "cors";

//Importaciones propias:
import { manageError, notFound } from "./middlewares/index.js";
import { linkRouters, userRouters } from "./routes/index.js";

//Express:
const app = express();

//Middlewares de aplicación:
app.use(express.json());
app.use(cors());

//Rutas:
app.use(userRouters);
app.use(linkRouters);

//Middlewares
app.use(notFound);
app.use(manageError);

//Server:
app.listen(process.env.PORT, () => {
  console.log(`Servidor activo en el puerto ${process.env.PORT}`);
});
