const express = require("express");
const routes = require("./server/routes/book");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Static Files
app.use(express.static("public"));

app.use("/api/books", routes);

app.listen(port, () => console.log(`listening on port ${port}`));
