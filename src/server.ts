import "reflect-metadata";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { AppDataSource } from "./database/data-source";
import { routes } from "./app/routes/routes";
<<<<<<< HEAD
import swaggerUi from "swagger-ui-express";
=======
>>>>>>> 6c93ba85d5272da7e0f806279282a6255a101c34
import swaggerDocs from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
=======

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

>>>>>>> 6c93ba85d5272da7e0f806279282a6255a101c34
app.use(routes);

// Adicionando swagger docs 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = 8000;
AppDataSource.initialize().then(async () => {
    console.log("Database connected");
    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}/`);
    })
})