import express from "express";
import connect from "./src/db/connect.js";

import studentRoute from "./src/router/student.router.js";
import coursesRoute from "./src/router/course.router.js";

const app = express();
const PORT = 3000;

connect();

app.use(express.json({ limit: "5000000mb" }));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/api", studentRoute, coursesRoute);

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
