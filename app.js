const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(express.static("./public"));
app.use(express.json());

const port = process.env.PORT || 8080;

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.mongo);
    app.listen(port, () => {
      console.log(`Server Live on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
