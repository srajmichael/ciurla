const path = require('path');
const express = require('express');
const hbs = require('hbs');
const projects = require('./utils/projects');

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



app.get('', (req,res)=>{
    res.render('index', {
        title: 'Nate Ciurla',
        projects: projects.getProjects()
    })
})

app.get('/projects', (req,res)=>{
    res.send(
        {
            projects: projects.getProjects()
        }    
    )
})


app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
});