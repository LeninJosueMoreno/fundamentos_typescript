(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product []= [];

  const addProduct = (data: Product) => {

  };

  addProduct({
    title: 'Pro1',
    createAt: new Date(1993, 1, 1),
    stock: 123,
  });

  products.push({
    title: 'Product2',
    createAt: new Date(1993, 1, 1),
    stock: 123,
    size: 'M'
  });

  console.log(products);
})();
