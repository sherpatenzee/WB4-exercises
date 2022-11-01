let lunch = [
  {item: "Steak Fajitas", price: 9.95},
  {item: "Chips and Guacamole", price: 5.25},
  {item: "Sweet Tea", price: 2.79}
];

function getMealCost(lunch){
  let subTotal = 0;
  let numOrders = lunch.length;

  for (i = 0; i < numOrders; i++){
    subTotal += lunch[i].price;
  }
  return subTotal;
 
}
let sub = getMealCost(lunch)

let tax = 0.08 * sub;
let tip = 0.18 * sub;

let total = sub + tax + tip;


console.log(sub)
console.log(tax)
console.log(tip)
console.log(total)