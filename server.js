const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(htmlRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});