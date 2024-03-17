import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import { usersRouter } from "./controller/users-controller";
import { connectToDb } from "./utils/dal";
dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.use('/user', usersRouter);
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}...`);
    connectToDb();
});
