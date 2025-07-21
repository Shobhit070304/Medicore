import dotenv from "dotenv";
dotenv.config();

import app from "./src/index.js";
import http from "http";

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
server.listen(PORT);
