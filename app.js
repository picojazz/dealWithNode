const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const rootDir = require('./utils/path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop') 

const app = express()

app.set('view engine','pug')
//app.set('views','nom du dossier') pour utiliser un autre dossier pour les views

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir,'public')))


app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).render('404',{pageTitle: '404'})
})


app.listen(3000,() => {
    console.log('server start at port 3000')
})