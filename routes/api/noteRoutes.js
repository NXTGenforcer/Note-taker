const router = require("express").Router();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../../db/db.json"), "utf8", (err, data) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(JSON.parse(data));
  });
});

router.post("/", (req, res) => {
  console.log(req);
  fs.readFile(path.join(__dirname, "../../db/db.json"), "utf8", (err, data) => {
    if (err) {
      res.status(400).json(err);
    }
    const notes = JSON.parse(data);
    const { title, text } = req.body;
    const newNote = { id: uuidv4(), title, text };
    notes.push(newNote);

    fs.writeFile(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify(notes),
      (err) => {
        if (err) {
          res.status(400).json(err);
        }
      }
    );
    res.status(200).json(newNote);
  });
});

module.exports = router;
