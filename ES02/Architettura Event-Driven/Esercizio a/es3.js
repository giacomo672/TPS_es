const func = [
  function (){ return "Lavoro Completato"; },
  function() { return "Non sono capace!"; }
]

func.forEach(callbackfn => console.log(callbackfn()))
