


let students = [
  {name: "Zephaniah", scores: [100, 96, 99, 92]},
  {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
  {name: "Siddalee", scores: [86, 72, 92]},
  {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
  {name: "Elisha", scores: [89, 100]},
  {name: "Ezra", scores: [100, 99, 100, 87]}
];
let studentsNum = students.length;


for ( let i = 0; i < studentsNum; i ++){

  let score = students[i].scores;
  let lengthScore = score.length;
  let average = 0; 
  let sum = 0;

  for ( let a = 0; a < lengthScore; a++ ){
    sum += score[1]

    average = sum / lengthScore
  }
  console.log(average)
}
