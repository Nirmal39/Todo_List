const express = require('express');
const app = express()
const port = 8000;

const db = require('./config/mongoose')
const todo = require('./models/todo');


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./assets'))

app.use('/', require('./routes'))


app.set('view engine','ejs')
app.set('views','./views')


app.listen(port,function(err){
    if(err) console.log(`Error : ${err}`);

    console.log(`App is running on port : ${port}`)
})