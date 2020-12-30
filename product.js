var Product = require('../models/product.model');
var Category = require('../models/category.model')
var mongoose = require('mongoose');

// await Product.findById("5fdf4dd23f9cfbd9d5613bf2").populate({ path: 'category' })
// .then(products => {res.json(products);console.log(products);})

const getAllProducts = async (req, res) => {
         Product.find().populate('category')
                .then(products => res.json(products))
          .catch(err => res.status(400).json('Error: ' + err));
}

const getProductById = (req, res) => {
        Product.findById(mongoose.Types.ObjectId(req.params.id))
                .then(product => res.json(product))
        // .catch(err => res.status(400).json('Error: ' + err));
}


const newProduct = async (req, res) => {
        console.log("inside");
        const { name, description, color, amount, SKU, qty, category, price, images } = req.body;
        const product = new Product({
                name,
                description,
                color,
                amount,
                SKU,
                category,
                price,
                images
        })
        await product.save().then(() => {
                console.log(product)
                return res.status(201).json({
                        product
                })
        })
                .catch(console.log("can't create new product"));
}


        
const updateUser = async (req, res) => {
        let user;
        try {
            //req.params.id את מה שרוצים לשנות
            //req.body במה לשנות
            user = await User.findByIdAndUpdate(req.params.id, req.body)
            await user.save()
            res.send("the user is update")
        }
        catch (err) {
            res.status(500).json({ err: err.massage })
        }
    
    }
const editProduct = async (req, res) => {
        
let p;
console.log("XXXXXXXXXXXXXX")
console.log( req.params.id);
console.log( req.body);

        await Product.updateOne({ _id: req.params.id }, req.body).then(() => {
                console.log("update");
                // await Product.findById({ _id: req.params.id }).then((p) => {
                //        p.SKU=req.body.body.SKU;
                //        p.save().then(()=>{
                //         console.log("update");
})
                return res.status(201).json({
                        "messege": "update product"
               
        }).catch(error => {
                console.log('err 500 update pro')
        })

// try {
//         console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU")
//         //req.params.id את מה שרוצים לשנות
//         //req.body במה לשנות
//         p = await Product.findByIdAndUpdate(req.params.id, req.body)
//         await Product.save()
//         res.send("the product is update")
//     }
//     catch (err) {
//         res.status(500).json({ err: err.massage })
//     }

}

const deleteProduct = async (req, res) => {
        await Product.deleteOne({ "_id": req.params.id }, function (err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
                res.status(201).json({
                        "messege": "deleted"
                })
        });
}

const getProductsByCategory = async (req, res) => {

        const category = await Category.findById(req.params.categoryId).populate("products");
        var products = category.products;
        return products;
}

module.exports = {
        newProduct,
        editProduct,
        deleteProduct,
        getAllProducts,
        getProductById,
        getProductsByCategory
}

