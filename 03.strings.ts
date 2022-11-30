(()=>{
let productTitle = 'My amazing product';
//productTitle = null;
//productTitle = ()=>{};
//productTitle = 123;
productTitle = 'My amazing prosuct changed' 
console.log('productTitle', productTitle)

const productDescription = "I'm bla bla bla";
console.log('productDescription', productDescription);

let productPrice = 100;
let isNew: Boolean = false;


const sumary = `
title:${productTitle} 
description: ${productDescription}
price: ${productPrice}
isNew: ${isNew}

`; 
})();