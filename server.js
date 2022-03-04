const path = require('path');
require('dotenv').config();

const express = require('express');

const routes = require('./controllers/');

const sequelize = require('./config/connection');

const exphbs = require('express-handlebars')

const session = require('express-session')

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');


const hbs = exphbs.create({ helpers });

// Initialize sessions
const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: { maxAge: 7200000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

// Initialize the server
const app = express();
// Define the port for the server
const PORT = process.env.PORT || 3001;

// Give the server a path to the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Set handlebars as the template engine for the server
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Have Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell the app to use Express Session for the session handling
app.use(session(sess));


app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });