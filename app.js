const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const rootDir = require('./utils/path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop') 

const errorController = require('./controllers/error')

const app = express()

app.set('view engine','ejs')
//app.set('views','nom du dossier') pour utiliser un autre dossier pour les views

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir,'public')))


app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404Page)


app.listen(3000,() => {
    console.log('server start at port 3000')
})