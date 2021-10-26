const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/',async (req,res)=>{
    const products = await model.getProducts();
    res.json(products);
})

router.post('/',async (req,res)=>{
    try {
        const products =await model.StoreProduct(req);
        return res.json(products);   
    } catch (error) {
        
    }
})

module.exports = router