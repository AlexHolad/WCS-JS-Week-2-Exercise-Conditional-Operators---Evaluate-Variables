const a = 4;
const b = 4;
const c = 4;

if (a === b && b === c && c === a) {
    console.log("The three variables are the same");
  } else if (a !== b && b !== c && c !== a) {
    console.log("all variables are differents");
  } else { 
    console.log("Two of the variables are the same");
  }
