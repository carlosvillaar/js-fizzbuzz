// Inizio ciclo for
for ( i = 0; i < 100; i++){

  //Verifico se il numero e' divisibile sia per 3 che per 5
  if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz")

    //Verifico se il numero e' divisibile per 3
  } else if (!(i % 3)) {
    console.log("Fizz")

    //Verifico se il numero e' divisibile per 5
  } else if (!(i % 5)) {
    console.log("Buzz");

    //Se non e' divisibile stampo il numero
  } else {
    console.log(i)
  }
}