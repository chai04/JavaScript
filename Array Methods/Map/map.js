const products = [
  {
    name: "laptop",
    price: "1000",
    count: 5,
  },
  {
    name: "desktop",
    price: "1500",
    count: 3,
  },
  {
    name: "phone",
    price: "500",
    count: 10,
  },
];

const totalProductsValue = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
  count: item.count,
}));

console.log(totalProductsValue);

// ------------------------------------------------------------------------------------
/* const numbers = [1, 2, 3, 4, 5];

const numberDouble = numbers.map(multiply);

function multiply(value, index, arr){
    return value * index;
}

console.log(numbers);

console.log(numberDouble); */

// -----------------------------------------------------------------------------------

/* var myMap = new Map();

myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");

console.log(myMap);

/* for (let key of myMap.keys()) {
  console.log(`key is ${key}`);
}

for (let value of myMap.values()) {
  console.log(`value is ${value}`);
} */

/* myMap.delete(2);

for (let [key, value] of myMap) {
  console.log(`Key is: ${key} & Value is: ${value}`);
}

myMap.forEach((value, key) =>
  console.log(`Key is: ${key} & Value is: ${value}`)
);
 */
