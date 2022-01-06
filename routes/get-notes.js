const {
  readFromFile,
} = require("../../activities/28-Stu_Mini-Project/Main/helpers/fsUtils");

const notes = require("express").Router();

notes.get("/", (req, res) => {
  readFromFile("./db/db.json/", { params: id }).then((data) =>
    res.json(JSON.parse(data))
  );
});
