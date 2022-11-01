 let myInfo = {

  name : "John" ,
  address : "6 abc Street" ,
  city : "New York City" ,
  zip : "11110"

};

function printContact(myInfo){

  console.log(myInfo.name)
  console.log(myInfo.address)
  console.log(myInfo.city + "," + myInfo.zip)

}

printContact(myInfo);