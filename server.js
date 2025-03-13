import jsonServer from "json-server";
const server = jsonServer.create();
import { readFileSync } from "fs";
import { join } from "path";
const middlewares = jsonServer.defaults();

// Load src/jobs.json into memory
const data = JSON.parse(readFileSync(join(__dirname, "src", "jobs.json"), "utf-8"));
const router = jsonServer.router(data);

server.use(middlewares);
server.use(router);

// Export as a Vercel serverless function
export default server;