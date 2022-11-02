let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 89, 100, 100];


function getAverage(myScores) {

  let numMyScores = myScores.length;
  let sum = 0;
  let avg;

  for (let i = 0; i < numMyScores; i++) {
    sum += myScores[i];
    avg = sum / numMyScores;
  }
  return avg;
}
console.log(getAverage(myScores));
console.log(getAverage(yourScores));
console.log("------------")

//Median

function sort(a , b){
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  };
}
 myScores.sort(sort);

 console.log(yourScores)

 
 
function getMedian(myScores){
  
  if ((myScores.length) % 2 == 0) {
    let high = myScores.length / 2;
    let low = high - 1;
    let avg = (myScores[high] + myScores[low]) / 2
    console.log(avg);
}
else {
    let median = Math.floor(myScores.length / 2);
    console.log(myScores[median]);
}
}

getMedian(myScores);
getMedian(yourScores);



// myScores.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a == b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// console.log(myScores)
// console.log("------------")

// let median;
// let length = myScores.length

// if (length % 2 != 0) {
//   let middleIndex = Math.floor(length / 2);
//   median = myScores[middleIndex]
// } else {
//   let middleIndex = Math.floor(length / 2)
//   median = myScores[middleIndex] + myScores[middleIndex + 1]
// }
// console.log(median)
// console.log("------------")

// //yourScore median

// yourScores.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a == b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// console.log(yourScores)
// console.log("------------")

// let evenMedian;
// let len = yourScores.length

// if (len % 2 != 0) {
//   let middleIndex = Math.floor(len / 2);
//   evenMedian = yourScores[middleIndex]
// } else {
//   let middleIndex = Math.floor(len / 2)
//   evenMedian = (yourScores[middleIndex] + myScores[middleIndex - 1]) / 2
// }
// console.log(evenMedian)
// console.log("------------")





