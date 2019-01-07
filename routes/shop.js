const path = require('path')

const express = require('express')
const router = express.Router()

const rootDir = require('../utils/path')

const adminData = require('./admin')

router.get('/',(req,res,next) => {

    console.log('home')
    //console.log(adminData.products)

    const products = adminData.products;
    res.render('shop',
    {   prods: products,
        docTitle: 'Shop',
        path: '/'
    });
    
 })



module.exports = router