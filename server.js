// require('dotenv').config();
// const express = require('express');
// const expressSession = require('express-session');
// const mongoose = require('mongoose');
// const routes = require('./routes');
// const passport = require('./config/passport')

// const PORT = process.env.PORT || 4201;
// const app = express();

// app.use(expressSession({ secret: process.env.sessionSecret, resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(__dirname + '/client/dist/client'));
// }
// app.use(routes);

// mongoose.connect(process.env.DB_URI || 'mongodb://localhost/theatreofthemind', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/client/dist/client/index.html');
// });

// app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongoose = require('mongoose');

const passport = require('./config/passport');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4201;

mongoose.connect(process.env.DB_URI || 'mongodb://localhost/theatreofthemind',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressSession(
    {
        secret: process.env.sessionSecret,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.get('*', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
})