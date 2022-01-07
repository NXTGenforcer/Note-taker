const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("../../db/db.json", "utf8", (err, data) => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(JSON.parse(data));
  });
});

router.post("/", (req, res) => {
  fs.readFile("../../db/db.json", "utf8", (err, data) => {
    if (err) {
      res.status(400).json(err);
    }
    const notes = JSON.parse(data);
    let newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);

    fs.writeFile("../../db/db.json", JSON.stringify(notes), (err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
    res.status(200).json(newNote);
  });
});

module.exports = router;
