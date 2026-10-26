const operazioni = {
  descrizione: "oggetto operazioni",
  somma: (x,y) => { return x+y },
  sottrazione: (x,y) => { return x-y },
  moltiplicazione: (x,y) => { return x*y },
  divisione: (x, y) => {
    if (y != 0) {
      return x / y
    }
    return "impossibile";
  }
}


console.log(operazioni.descrizione)
console.log(operazioni.somma(100, 100))
console.log(operazioni.sottrazione(100, 7))
console.log(operazioni.moltiplicazione(5, 5))
console.log(operazioni.moltiplicazione(100, 5))
