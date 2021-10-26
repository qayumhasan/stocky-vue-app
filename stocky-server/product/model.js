const db = require('./db')
const tableName = 'products';

const getProducts = async()=>{
    const sql = `SELECT * FROM ${tableName}`;
    const products = await db.query(sql)
    return products;
}


const StoreProduct = async (req) =>{
    const {product_name,product_code,category,brand,barcode,product_cost,price,unit,sale_unit,purchase_unit,stock_alert,order_tax,tax_type,note,images} = req.body;
    const sql = `INSERT INTO ${tableName} VALUES (null, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const product = await db.query(sql,[product_name,product_code,category,brand,barcode,product_cost,price,unit,sale_unit,purchase_unit,stock_alert,order_tax,tax_type,note,'images']);
    return product;
}

module.exports ={
    getProducts,
    StoreProduct
}