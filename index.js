// install express for us to run the project
// express allows us to create end-points to listen for incoming request

// implies that the code written here uses strict rules
'use strict';

const express = require("express");
const { request } = require("http");

// constants
const PORT = 8888;                  //  port address that app is listening for
const HOST = "127.0.0.1";           // default, http://127.0.0.1:8000
const OS = require("os");           // import the os env. library
const ENV = "DEV";                  // specifies that this is under development

// app

const app = express();
app.get("/", (request, response)=>{              // invoke express library
    response.statusCode = 200;               // listen for get request, callback function
    const msg = "Hello FSD learners";   // return 200 status code === success
    response.send(msg);                      // create the response
});

app.get("/test", (request, response)=>{ // listen for get request, http://127.0.0.1/test
    response.statusCode = 200;               // listen for get request, callback function
    const msg = "Hello from /test Node!";   // return 200 status code === success
    response.send(msg);                      // create the response
});

app.listen(PORT, HOST);                             // invoke listen() method for app, listen to port 8080
console.log(`Running on http://${HOST}:${PORT}`);   // log the start of the app to listen for requests