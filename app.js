const express = require('express');

app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server Started on PORT : ${PORT}`));