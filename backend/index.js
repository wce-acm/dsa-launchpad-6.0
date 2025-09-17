import dotenv from "dotenv";
import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from './db/db.js';
import launchpadRouter from "./routes/launchpad.router.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ ', (req, res) => {
    res.send('Hello World! The server is live!');
});

app.use("/api/ips", launchpadRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});