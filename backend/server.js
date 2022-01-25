const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usersRoute = require("./routes/usersRoute");
const indexRoute = require("./routes/indexRoute");

//to crete server
const app = express();
const port = process.env.PORT || 4500;

//middleware
app.use(cors()); //cors middleware
app.use(express.json()); //allow us to pass json. because our server sending and receiving JSON
// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });

//index route
app.use("/", indexRoute);
//users route
app.use("/users", usersRoute);

app.use((req, res, next) => {
  res.sendFile(__dirname + "/views/notfound.html");
});

app.use((err, req, res, next) => {
  //if there is an error show this status and message
  //this message and status are coming from userRouter.js
  //we created error and error object has message and status

  res.status(err.status || 500).send({ success: false, message: err.message });
});

app.listen(port, () => console.log(`server is running on :${port}`));
