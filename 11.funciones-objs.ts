(()=>{

const login =(data:{email: string,password: string})=>{
console.log(data.email,data.password);
}
//login('lenin@gmail.com','123456');
login({
  email:'lenin@gmail.com',
  password:'123456'

});

type Sizes = 'S'|'M'|'L'|'XL';

const products: any[] = [];

const addProduct = (data: {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
} ) => {


  products.push(data);
}
addProduct({
  title: 'Pro1',
  createAt: new Date (1993,1,1),
  stock: 123,
})

console.log(products);

})();
