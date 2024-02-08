import cors from "cors";
import express from "express";
import { connectToDb } from "./utils/dal";
import * as dotenv from "dotenv"

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());

// server.use('/oauth', authRouter);

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}...`);
    connectToDb();
})