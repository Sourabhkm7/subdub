import express from "express";

const app = express();
import { PORT } from "./config/env.js";

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Subscription Tracker API!" });
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker API is running on port ${PORT}`);
});

export default app;