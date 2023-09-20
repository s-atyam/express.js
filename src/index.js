const express = require('express'); // here module actully exports a function

const app = express(); // return an instance of an express application
const port = 3001;

//  app will listen to this port number
app.listen(port,()=>{
    console.log(`Running Express server on port ${port}`);
}) 