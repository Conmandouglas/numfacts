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

// TODO:
// (be sure to include dates and documentation)
// (when coding, be sure to use comments and explain the code)
// [10/10/24 3:55pm] Set up basic HTML & CSS
// [10/10/24 4:24pm] Set up basic express application
// [] Set up axios & get the fact
// [] Post the fact into the fact box
// [] Handle errors in the error box
// [] Make different buttons for different facts (math, trivia, date)
// [] Finalize the styling for the website, use flexbox, grid, or anything that is necessary
// [] Push to github repository, make public, maybe use github pages