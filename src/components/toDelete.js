////////products////////////

//getAllProducts- get
var x1 = "https://community.leader.codes/api/products"

//getProductById- get
var x2 = "https://community.leader.codes/api/products/5fec64dc30a52709b05f4e77"

//newProduct- post
var x3 = "https://community.leader.codes/api/products/newProduct"
var body1 = {
        name: 'myProduct',
        description: 'very nice',
        SKU: '555',
        amount: 77,
        category: '5fec35431084868bcb07fa6f',
        price: 89.9
}

//deleteProduct- post
var x4 = "https://community.leader.codes/api/products/deleteProduct/5fec64dc30a52709b05f4e77"

////////categories////////////

//getAllCategories- get
var x1 = "https://community.leader.codes/api/categories"

//getCategoryById- get
var x2 = "https://community.leader.codes/api/categories/5fec35431084868bcb07fa6f"

//newCategory- post
var x3 = "https://community.leader.codes/api/categories/newCategoty"
var body2 = {
        categoryName: "glasses",
        image: "tyftfty",
        color: "silver"
}

//deleteProduct- post
var x3 = "https://community.leader.codes/api/products/deleteProduct/5fec64dc30a52709b05f4e77"