const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use('/', require('./routes/indexroute'))

app.listen(3000, ()=>{
    console.log('listening on', 3000)
})