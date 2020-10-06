require("dotenv").config();
const express = require("express");
const expressSession = require("express-session");
// const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 4201;
const app = express();

app.use(expressSession({ secret: process.env.sessionSecret, resave: false, saveUninitialized: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    console.log("hello ------------------------------");
    app.use(express.static("client/dist"));
}
// app.use(routes);

// mongoose.connect(process.env.DB_URI || "mongodb://localhost/theatreofthemind", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.get("*", (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});