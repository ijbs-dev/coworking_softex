import "reflect-metadata";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { AppDataSource } from "./database/data-source";
import { routes } from "./app/routes/routes";
import swaggerDocs from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(routes);

AppDataSource.initialize().then(async () => {
    console.log("Database connected");
    app.listen(8000, () => {
        console.log("Server started on port 8000");
    })
})