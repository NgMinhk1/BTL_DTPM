import express from "express"
import cors from "cors";
// import cookieParser from "cookie-parser";
import ticketRoutes from "./routes/ve.js";
import filmRoutes from "./routes/phim.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
app.get("/", (req, res) => {
    res.json("hello");
})

app.use("/api/ticket", ticketRoutes);
app.use("/api/film", filmRoutes);

app.listen(8800, () => {
    console.log("Connect to backend!");
})