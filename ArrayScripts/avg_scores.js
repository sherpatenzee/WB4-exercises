 let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100];


function getAverage(myScores){
  
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