const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.sendFile(
//     "C:/Users/vansh.arora/Vansh/node/Projects/task-manager/public/index.html"
//   );
// });

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.mongo);
    app.listen(8080, () => {
      console.log("Server Live...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
