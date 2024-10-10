import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://numbersapi.com/";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Fun Fact: This is a fact... waiting to be a fact." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
