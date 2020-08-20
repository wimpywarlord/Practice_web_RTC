const express = require("express");

var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "public"))); //  "public" off of current is root

app.get("/", function (req, res) {
	res.render("home.ejs");
});

app.listen(process.env.PORT || 8000, function () {
	console.log("SERVER 8000 HAS STARTED");
});
