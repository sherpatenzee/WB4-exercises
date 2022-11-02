let products = [
  {product: "Gummy Worms", price: 5.79},
  {product: "Plain M&Ms", price: 2.89},
  {product: "Peanut M&Ms", price: 2.89},
  {product: "Swedish Fish", price: 3.79},
  {product: "Snickers", price: 2.50},
  {product: "Mars", price: 2.79},
  {product: "Skittles", price: .50},
  {product: "Hersheys", price: 5.50},
  {product: "Gummy ", price: 4.79},
  {product: "Sugar Gum", price: 2.79},
]
//sort accending 

products.sort(function(a, b){
  if(a.product < b.product){
    return -1;
  }else if(a.product == b.product){
    return 0;
  }else{
    return 1;
  }

});

let num = products.length;

for (i = 0; i < num ; i++){
console.log(products[i].product);

}

console.log("-----------------")

//desending sort

products.sort(function(a, b){
  if(a.product > b.product){
    return -1;
  }else if(a.product == b.product){
    return 0;
  }else{
    return 1;
  }

});

let number = products.length;

for (i = 0; i < number ; i++){
  console.log(products[i].product);
  
}
