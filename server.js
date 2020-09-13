require("dotenv").config();
const express = require("express");
const expressSession = require("express-session");
const PORT = process.env.PORT || 4201;

const app = express();

app.use(expressSession({ secret: process.env.sessionSecret, resave: false, saveUninitialized: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
app.use(express.static("client"));

app.get("*", (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});