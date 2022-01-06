const router = require("express").Router();
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
    const newNote = req.body;
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
