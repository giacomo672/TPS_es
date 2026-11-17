const { argv } = require('node:process');

// argv[2] = num1
// argv[3] = func
// argv[4] = num2

let x = parseFloat(argv[2])
let y = parseFloat(argv[4])
let z;
if (isNaN(y)) {
  z = "secondo numero non definito o impostato male";
} else if (isNaN(x)) {
  z = "primo numero non definito o impostato male";
} else {

  if (argv[3] == "add") {
    z = (x + y)
  }
  else if (argv[3] == "sub") {
    z = (x - y)
  }
  else if (argv[3] == "mul") {
    z = (x * y)
  }
  else if (argv[3] == "div") {
    if (y != 0) {
      z = (x / y)
    } else {
      z = "impossibile";
    }
  }
  else {
    z = "argomento non valido";
  }
}

console.log(z)
