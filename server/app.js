require("dotenv").config();
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
const cors = require("cors");

const Router = require("./src/routes/index");

//const Notes = require("./src/models/notes.model");
const connectMysql = require("./src/configs/db.config");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,DELETE,POST",
  })
);

Router(app);

// Notes.sync().then(() => {
//   console.log("Notes Table Created");
// });

const port = process.env.APP_PORT;
app.listen(port, async () => {
  try {
    await connectMysql.authenticate();
    console.log("connect mysql successfully");
    console.log(`server running on port http://localhost:${port}`);
  } catch (error) {
    console.log("err", error);
  }
});
