const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static("./dist/dynamic-form-fields"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist/dynamic-form-fields/index.html"));
  console.log(
    "path",
    path.join(__dirname, "./dist/dynamic-form-fields/index.html")
  );
});

app.listen(process.env.PORT || 8080);
