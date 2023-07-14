import express from "express";
import businessAreaRoutes from "./routes/businessAreaRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api", businessAreaRoutes);
app.use("/api", projectRoutes);
app.use("/api", taskRoutes);
app.use("/api", teamRoutes);

export default app;
