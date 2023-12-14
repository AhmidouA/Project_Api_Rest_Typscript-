import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from 'dotenv';



dotenv.config({ path: 'config/.env' });
const app = express();

app.use(cors({
    credentials: true
}));


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server running on localhost:3000");
});

