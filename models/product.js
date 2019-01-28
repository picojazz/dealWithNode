const fs = require('fs')
const path = require('path')
const dir = require('../utils/path')

const p = path.join(dir,'data','products.json')


module.exports = class Product{

    constructor(title,imageUrl,description,price){
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    save() {
        console.log(p)
        let products = [];
        fs.readFile(p, (err,data) => {
            if(err) console.log(err);
            products = JSON.parse(data);
            products.push(this)
            console.log(products)
            fs.writeFile(p,JSON.stringify(products),(err) =>{
                    console.log(err)
                })
        });
        

            
                
            
        
    }

    static fetchAll(cb) {

        fs.readFile(p, (err,data) => {
            if(err) return cb([])
            return cb(JSON.parse(data))
        });
        
       
        
    }
}