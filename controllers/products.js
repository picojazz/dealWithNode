const Product = require('../models/product')

exports.getAddProduct = (req,res,next) => {
    console.log('add - product')
    res.render('add-product',
    {  pageTitle: 'Add - product',
       path: '/admin/add-product'
    })
  }

exports.postAddProduct = (req,res,next) => {
    product = new Product(req.body.title)
    product.save()
    res.redirect('/')
    
 }

exports.getProduct = (req,res,next) => {
    const products = Product.fetchAll()
    console.log('home')
    //console.log(adminData.products)
    res.render('shop',
    {   prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
    
 }