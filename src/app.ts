import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/user",userRoutes);

app.get("/", (req, res) => {
    res.send("Working just fine");
});

app.listen(4000, () => {
    console.log("server is working");
});
