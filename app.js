const express = require('express');
const expressLayout = require('express-ejs-layouts')

app = express();

// EJS
app.use(expressLayout)
app.set('view engine', 'ejs')

// Routes 

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')


app.use('/', indexRoutes)

app.use('/users', userRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server Started on PORT : ${PORT}`));