const express = require('express');

app = express();

// Routes 

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')


app.use('/', indexRoutes)

app.use('/user', userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server Started on PORT : ${PORT}`));