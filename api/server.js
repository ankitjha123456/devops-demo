const express = require("express");
const app = express();

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/api/hello", (req, res) => res.json({ message: "Hello from DevOps demo" }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on ${port}`));
