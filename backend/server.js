import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import portfolioRouter from "./router/portfolioRouter.js";

const app = express();

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/abdulmazed", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/api/skills", (req, res) => {
  res.send(data.skills);
});

app.use("/api/portfolios", portfolioRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
