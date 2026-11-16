
const EventEmitter = require('events');

class Semaforo extends EventEmitter {
  constructor() {
    super();
    this.stato = 'rosso';
  }

  cambiaColore(nuovoColore) {
    const coloriValidi = ['rosso', 'giallo', 'verde'];

    if (coloriValidi.indexOf(nuovoColore) == -1) {
      throw new Error('Colore ' + nuovoColore + ' non valido');
    }

    const vecchioStato = this.stato;

    if (nuovoColore == vecchioStato) return;

    this.stato = nuovoColore;

    this.emit('cambio-colore', vecchioStato, nuovoColore);
    this.emit(nuovoColore);
  }

  avviaSequenza() {

    setInterval(() => {
      if (this.stato == 'rosso') {
        this.cambiaColore('verde');
      } else if (this.stato == 'verde') {
        this.cambiaColore('giallo');
      } else {
        this.cambiaColore('rosso');
      }
    }, 3000);
  }
}

const semaforo = new Semaforo();

semaforo.on('cambio-colore', (vecchioStato, nuovoStato) => {
  console.log(vecchioStato + ' -> ' + nuovoStato);
});

semaforo.on('rosso', () => {
  console.log('STOP!');
});

let numeroCambi = 0;

semaforo.on('cambio-colore', () => {
  numeroCambi++;
  console.log(`Cambi totali: ${numeroCambi}`);
});

semaforo.once('cambio-colore', () => {
  console.log('Primo cambio di colore');
});

semaforo.on('verde', () => console.log('Vai!'));
semaforo.on('giallo', () => console.log('Stai attento!'));

semaforo.avviaSequenza();
