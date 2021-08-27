const Shop = {
  name: "alia store",
  adress: "bd",
  profit: 1500,
  product: ["laptop", "mobile", "camera"],
  isExpensive: false,
};

// console.log(Shop);
const convertString = JSON.stringify(Shop);
// console.log(convertString);
// parse and push an array
let MultipleShop = [];

const prevShop = JSON.parse(convertString);
MultipleShop.push(prevShop);
console.log(MultipleShop[0].name);
console.log(MultipleShop);
