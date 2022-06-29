let helloES6 = () => {
  console.log("hello world");
};

let hello = () => console.log("hello");

let multiply = (x, y) => {
  return x * y;
};

console.log(multiply(2, 4));

let getProduct = (id, name) => ({
  id: id,
  name: name,
});

console.log(getProduct(3, "Samsung S11"));

const phones = [
  { name: "Iphone 11", price: 11000 },
  { name: "Iphone 12", price: 20000 },
  { name: "Iphone 13", price: 30000 },
  { name: "Iphone 14", price: 40000 },
  { name: "Iphone 15", price: 50000 },
];

let priceES6 = phones.map((phone) => phone.price);

console.log(priceES6);
7;

let filter = phones.filter((phone) => {
  return phone.price > 20000;
});

console.log(filter);
