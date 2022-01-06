const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.port || 3001;

const app = express();

app.use("/api", api);

app.use(express.static("public"));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
