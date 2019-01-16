const fs = require('fs')
const path = require('path')
const dir = require('../utils/path')

const p = path.join(dir,'data','products.json')


module.exports = class Product{

    constructor(t){
        this.title = t
    }

    save() {
        console.log(p)
        const products = JSON.parse(fs.readFileSync(p))
            products.push(this)
                fs.writeFile(p,JSON.stringify(products),(err) =>{
                    console.log(err)
                })
            
        
    }

    static fetchAll() {
        
       return JSON.parse(fs.readFileSync(p))
        
    }
}