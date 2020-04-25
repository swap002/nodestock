const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
const path = require('path')

// Set PORT for application

const PORT = process.env.PORT || 5000;

// SET handlebard middleware

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set Handlebar routes

app.get('/', function (req, res) {
    res.render('home',{
    	stuff : "This is stuff...."
    });
});

// Set Static Folder

app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT, () => console.log("Server listening on port"+ " " + PORT));
