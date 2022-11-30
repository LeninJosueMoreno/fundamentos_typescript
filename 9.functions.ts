
(()=>{

  type Sizes = 'S'|'M'|'L'|'XL';

function createProductToJson(
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes

){
 return {
  title,
  createdAt,
  stock,
  size
 }
}

const product1= createProductToJson('P1', new Date(),12,'XL' );
console.log(product1);
console.log(product1.createdAt);
console.log(product1.stock);
console.log(product1.title);


const createProductToJsonV2 = (        // esta es una array funcion, el que remplazamos
                                       // la palabra reservada funcion por el nombre se la funcion
                                       // y el simbolo () => {}.
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes

)=> {
 return {
  title,
  createdAt,
  stock,
  size
 }
}

const product2= createProductToJsonV2('P1', new Date(),12 );
console.log(product2);
console.log(product2.createdAt);
console.log(product2.stock);
console.log(product2.title);


})();
