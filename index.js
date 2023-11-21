import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/bruh", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 8181, () => {
    console.log(`Server listening on port ${process.env.PORT || 8181}...`);
});