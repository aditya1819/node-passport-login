const express = require('express');
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')

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

// Routes 
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')


app.use('/', indexRoutes)

app.use('/users', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started on PORT : ${PORT}`));