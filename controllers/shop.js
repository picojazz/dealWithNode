const Product = require('../models/product')




exports.getProduct = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list',
    {   prods: products,
        pageTitle: 'Products',
        path: '/products'
    });
    })
    
    
    
 }

exports.getIndex = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/index',
    {   prods: products,
        pageTitle: 'Home Page',
        path: '/'
    });
    })
    console.log('home')
    //console.log(adminData.products)
    
    
 }

exports.getCart= (req,res,next) => {
    res.render('shop/cart',{pageTitle: 'Cart Page',path: '/cart'})

}

exports.getOrders= (req,res,next) => {
    res.render('shop/orders',{pageTitle: 'Orders Page',path: '/orders'})

 }

exports.getCheckout= (req,res,next) => {
    res.render('shop/checkout',{pageTitle: 'checkout Page',path: '/checkout'})

 }
