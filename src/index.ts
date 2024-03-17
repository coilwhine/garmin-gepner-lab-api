import cors from "cors";
import express from "express";
import * as dotenv from "dotenv"
import { garminRouter } from "./controller/garmin-controller";

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());

server.use('/garmin', garminRouter);

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}...`);
})