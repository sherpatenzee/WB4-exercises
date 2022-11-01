



let Candies = [
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

//$4 or less price
for (i = 0; i < Candies.length; i++){
  if (Candies[i].price < 4) {
  console.log("The Candy that is $4 or less is :" + Candies[i].product);
  }
}

//name m&m
for (i = 0; i < Candies.length; i++){
  let mm = (Candies[i].product).indexOf("M&Ms");
  if (mm > 0) {
   console.log("The M&M candy is :" + Candies[i].product)
  }
}


//sweedish fish 
for (i = 0; i < Candies.length; i++){
 if (Candies[i].product == "Swedish Fish") {
   console.log("Yes we carry Swedish Fish")
  }
}

