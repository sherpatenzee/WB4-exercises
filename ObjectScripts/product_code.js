

function parsePartCode(product){
  let colon = partCode1.indexOf(":");
  let code = partCode1.slice(0,colon);

  let dash = partCode1.indexOf("-");
  let number = partCode1.slice(colon + 1, dash );

  let size = partCode1.slice(dash + 1 );

  let part = {
    productCode: code,
    productNumber :number,
    productSize : size
  }
  return part;
}

  

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.productCode +
              " Product Number: " + part1.productNumber +
              " Size: " + part1.productSize);
