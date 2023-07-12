const fs = require('fs');
const path = require('path');

// const c = path.join(
//     path.dirname(require.main.filename),
//     "data",
//     "cart.json"
//   );

// module.exports = class Cart {
//     static addProduct(id, productPrice) {
//        fs.readFile(c, (err, fileContent) => {
//         let cart = {products: [], totalPrice: 0};
//         if (err) {
//             console.log('fileContent', fileContent);
//             cart = JSON.parse(fileContent);
//             console.log('cart', cart);
//         }
//         let updateProduct;
//         const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
//         const existingProduct = cart.products[existingProductIndex];

//         if (existingProduct) {
//             updateProduct = {...existingProduct};
//             updateProduct.qty = updateProduct.qty + 1;
//             cart.products= [...cart.products];
//             cart.products[existingProductIndex] = updateProduct;
//         } else {
//             updateProduct = { id: id, qty: 1};
//             cart.products = [...cart.products];
//         }
//         cart.totalPrice = cart.totalPrice + productPrice;
//         fs.writeFile(c, JSON.stringify(cart), err => {
//             console.log('err', err);
//         })
//        }) 
//     }
// }

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );
  
  module.exports = class Cart {
    static addProduct(id, productPrice) {
      // Fetch the previous cart
      fs.readFile(p, (err, fileContent) => {
        let cart = { products: [], totalPrice: 0 };
        if (!err) {
          cart = JSON.parse(fileContent);
        }
        // Analyze the cart => Find existing product
        const existingProductIndex = cart.products.findIndex(
          prod => prod.id === id
        );
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        // Add new product/ increase quantity
        if (existingProduct) {
          updatedProduct = { ...existingProduct };
          updatedProduct.qty = updatedProduct.qty + 1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
        } else {
          updatedProduct = { id: id, qty: 1 };
          cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p, JSON.stringify(cart), err => {
          console.log(err);
        });
      });
    }
  };