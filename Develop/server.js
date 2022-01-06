const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.port || 3001;

const app = express();

app.use("/api", api);

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../db/{}")));

app.get("*", (req, res) => res(err));

app.post("/save");

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
