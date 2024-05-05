import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());
