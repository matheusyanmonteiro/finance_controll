import "reflect-metadata";
import "express-async-errors";
import express from "express";

import "./shared/container";
import "./database";
import { router } from "./routes";


const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server Up 🤖👾👾"));