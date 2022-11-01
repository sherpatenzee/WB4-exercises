let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
  }, {
    
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
      "What is Fred?", "Why Fred?"]
  }, {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
      "Cowboy Boots"]
  },
]

let length = academyMembers.length;


for (i = 0; i < length; i++){
  if (academyMembers[i].memID == 187) {
  console.log("The academy member with ID 187 is " + academyMembers[i].name);
 }
}

//3 films
for (i = 0; i < length; i++){
let filmLength = academyMembers[i].films.length;

 if (academyMembers[i].film = filmLength >= 3 ) {
  console.log("The academy member with 3 films is " + academyMembers[i].name);
 }
}


//name Bob
  
for (i = 0; i < length; i++){

  if ((academyMembers[i].name).slice(0 , 3) == "Bob")
   console.log(academyMembers[i].name + " has the name that starts with Bob. ")
  }

