const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({status:"Working"});
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});