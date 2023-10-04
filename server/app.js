require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const Router = require("./src/routes/index");

Router(app);

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log("connect mysql successfully");
  console.log(`server running on port http://localhost:${port}`);
});
