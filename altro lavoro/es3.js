const EventEmitter = require('events');

class Semaforo extends EventEmitter {
  constructor() {
    super();
    this.stato = 'rosso';
  }
  
  cambiaColore(nuovoColore) {
    
    const vecchioStato = this.stato;
    if(nuovoColore != null){
      this.stato = nuovoColore;
    }
    switch(this.stato){
      case 'giallo':
        this.stato = 'rosso';
        break;
      case 'verde':
        this.stato = 'giallo'
        break;
      default:
        this.stato = 'verde'
        break;
    }
		    //rosso', 'giallo', 'verde'
  }
  
  avviaSequenza() {
    // TODO: Implementa la sequenza automatica: verde -> giallo -> rosso -> verde...
    // Usa setInterval con intervalli di 3 secondi
  }
}

// TODO: Crea istanza e aggiungi listener
const semaforo = new Semaforo();

// TODO: Listener per ogni cambio colore

// TODO: Listener specifico per 'rosso' che avvisa "STOP!"

// TODO: Listener che conta i cambi (usa once per il primo cambio)

// TODO: Avvia la sequenza automatica
