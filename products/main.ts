import {addProduct,calcStock,products} from './product.service';

addProduct({
  title:'Pro1',
  createAt: new Date (1993,1,1),
  stock: 5
});

addProduct({
  title:'Pro2',
  createAt: new Date (1993,1,1),
  stock: 8,
  size:'M'
})

console.log(products);
const total = calcStock();
console.log(total);
