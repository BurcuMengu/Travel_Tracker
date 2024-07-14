import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db_password = process.env.DB_PASSWORD;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "db_password",
    port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});