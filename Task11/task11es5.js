'use strict';

function Product(name, price) { name = "Book Southern frontier ", price = "350"
    this.name = name;
    this.price = price;
     }
Product.prototype.show = function() {
    alert(this.name);
    alert(this.price);
};
let name = new Product('Book Southern frontier ');
let price = new Product('350');
name.show();
price.show();