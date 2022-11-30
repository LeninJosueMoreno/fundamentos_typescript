(()=>{
let prices = [1,2,3,4,5,6, 'hola', true];
// prices.push('asus');
// prices.push(true);
// prices.push({});
prices.push(12121212);

let products = ['hola', true];
products.push(false);
 let mixed: (number|string|boolean| Object)[] = ['hola', true];
 mixed.push(12);
 mixed.push('as');
 mixed.push(true);
 mixed.push([]);
 mixed.push({});

 let number = [1,2,3,4,5]
 number.map(item=> item * 2);

})();