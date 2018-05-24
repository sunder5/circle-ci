const express = require('express');
let app = express();


app.use('/', (req, res) => {
    res.send("Welcome! Sunder")
});

app.listen(8081, () => {
   console.log("Server is running........")
});