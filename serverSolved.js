
const dotenv = require('dotenv');   //Always good practice to require the .env from the start. 
dotenv.config();                    //Config the .env to project
const express = require('express'); //Require Express
const app = express();              //simplify your callback with a const or var

/**************************************************/
//Don't forget to run
//Npm init
//Npm install express dotenv
/**************************************************/

//creating a call back function for when the server is listening
app.get('/',function (req, res){
    res.end('Hello everyone! Up in the localhost bar.... add /info after your port number and then press enter. Your 404 should return' ); //response
});

//creating a use case for if or when user calls in a route that isn't configured in the server. This can also be distributed for errors.
//This is simple 404 redirect. There are some extremely creative ways you can go about your own 404 page. Check out this article for inspiration in your own 404 https://en.ryte.com/magazine/why-should-you-configure-404-error-pages
app.use(function(req, res) {
    res.status(404).end('<h1>Oops! Looks like something broke!</h1>'); //response
});

//making the server listen
app.listen(process.env.PORT);
console.log("Server is listening!");