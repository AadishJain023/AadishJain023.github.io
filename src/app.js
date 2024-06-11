const path = require('path')
const express = require('express')
const hbs = require('hbs')
const stock = require('../src/utils/stock')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req, res) => {
    res.render('index', {
        title: 'STOCK APP', 
        name: 'Aadish Jain' 
    })
})

app.get('/about',(req, res) => {
    res.render('about', {
        title: 'ABOUT',
        name: 'Aadish Jain'
    })
})

app.get('/help',(req, res) => {
    res.render('help', {
        title: 'HELP',
        name: 'Aadish Jain',
        helpText: 'This is some helpful text'
    })
})

app.get('/stock', (req, res) => {
    if(!req.query.stockName){
        return res.send({
            error:"You must provide a stock"
        })
    }
    stock(req.query.stockName,(error,response) => {
        if(error){
            res.send({error})
        } 
        else{ 
            res.send(response)
        }
    })
})

app.get('/help/*',(req, res) => { 
    res.render('404', {
        title: '404',
        name: 'Aadish Jain',
        errorMessage: 'Enter Valid URL'
    })
})

app.get('/*',(req, res) => {
    res.render('404', {
        title: '404',
        name: 'Aadish Jain',
        errorMessage: 'Enter Valid URL'
    })    
})    

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})




