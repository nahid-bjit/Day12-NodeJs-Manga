const product = require("./product");
const Product = require("./product");

const main = () => {
    // const total = Product.getAll();

    // Product.add ({
    //     name: "Naruto, Vol. 1",
    //     price: 9.99,
    //     stock: 42,
    //     author: "Masashi Kishimoto"
    // });

    // let singleProduct = Product.getOneById(10);
    // console.log(singleProduct)

    // let updatedSingleProduct = Product.updateOneById(10);
    // console.log(updatedSingleProduct)

//  let updatedObjectByIdAndObject = Product.updateOneByIdAndObject (50, { author: "Parvez"});

     product.deleteProduct(7)

};

main();