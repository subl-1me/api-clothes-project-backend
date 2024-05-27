import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./src/routes/index";
dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api", router);
