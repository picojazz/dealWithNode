const Product = require('../models/product')



exports.getAddProduct = (req,res,next) => {
    console.log('add - product')
    res.render('admin/add-product',
    {  pageTitle: 'Add - product',
       path: '/admin/add-product'
    })
  }

exports.postAddProduct = (req,res,next) => {
    let title = req.body.title;
    let imageUrl = req.body.imageUrl;
    let description = req.body.description;
    let price = req.body.price
    product = new Product(title,imageUrl,description,price)
    product.save()
    res.redirect('/')
    
 }

exports.getProducts = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        res.render('admin/products',
    {   prods: products,
        pageTitle: 'Products page',
        path: '/admin/products'
    });
    })
    
    
    
 }