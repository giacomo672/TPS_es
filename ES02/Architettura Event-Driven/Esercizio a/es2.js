const hoFinito = ()=>{ return "Lavoro completato!" };
const nonRiesco = () => { return "Non sono capace!" };

const pippo = (callback) => {
  for (let i = 0; i < 10; i++){
    console.log(i);
  }
  console.log(callback());
}

pippo(nonRiesco)
pippo(hoFinito)
