import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://numbersapi.com";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/*app.get("/", (req, res) => {
  res.render("index.ejs", { fact: "Fun Fact: This is a fact... waiting to be a fact." });
});*/

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random"); // not an array no need to stringify
    res.render("index.ejs", { 
      fact: result.data
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
    res.render("index.ejs", { 
      error: error.message
    });
  }
});

app.post("/post-fact", async (req, res) => {
  try {
    const factType = req.body.factType;
    const numb = req.body.num;
    console.log(factType);
    console.log(numb);

    if (factType === "trivia") {
      const result = await axios.get(API_URL + "/" + numb);
      res.render("index.ejs", {
        fact: result.data
      });
    } else if (factType === "math") {
      const result = await axios.get(API_URL + "/" + numb + "/math")
      res.render("index.ejs", {
        fact: result.data
      });
    } else {
      res.status(400).send("Invalid fact type");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500);
    res.render("index.ejs", { 
      error: error.message
    });
  }
});

/*app.post("/post-datefact", async (req, res) => {
  try {
    const numb = req.body.num;
    console.log(numb);
    const result = await axios.get(API_URL + "/" + numb + "/d");
    res.render("index.ejs", { 
      fact: result.data
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
    res.status(500);
    res.render("index.ejs", { 
      error: error.message
    });
  }
});*/

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