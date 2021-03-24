const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');


app = express();

// DB config
const db = require('./config/keys').MongoURI

// COnnect to mongo 
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// EJS
app.use(expressLayout)
app.set('view engine', 'ejs')

// BodyParser 
app.use(express.urlencoded({ extended : false }));

// Express session 
app.use(session({
    secret: 'secretKey123',
    resave: false,
    saveUninitialized: true,
}));

// connect flash
app.use(flash());

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

// Routes 
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')


app.use('/', indexRoutes)

app.use('/users', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started on PORT : ${PORT}`));