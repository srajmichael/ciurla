const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 3000; 

//helpful paths
const publicRoot = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set up views and view engine
app.set('views', viewPath);//used to customize view path/ view directory
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use(express.static(publicRoot));






app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
});