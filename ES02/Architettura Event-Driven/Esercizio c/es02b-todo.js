const EventEmitter = require('events');

class Blog extends EventEmitter {
  constructor() {
    super();
    this.articoli = [];
  }

  pubblicaArticolo(titolo, autore) {
    const articolo = {
      id: this.articoli.length + 1,
      titolo,
      autore,
      data: new Date()
    };

    this.articoli.push(articolo);

    // TODO: Emetti l'evento 'nuovo-articolo' con i dati dell'articolo
    this.EventEmitter.on('nuovo-articolo', () => {
      console.log(`Id: ${this.articoli.id}\nTitolo: ${this.articoli.titolo}\nAutore: ${this.articolo.autore}\nData: ${this.articolo.data}`);
    });
    this.EventEmitter.emit('nuovo-articolo')
  }
}


// TODO: Crea un'istanza di Blog
const blog = new Blog();
// TODO: Aggiungi un listener che invia email
// blog.on('nuovo-articolo', (articolo) => { ... });
blog.on('nuovo-articolo', (articolo))
// TODO: Aggiungi un listener che aggiorna il contatore
// blog.on('nuovo-articolo', (articolo) => { ... });

// TODO: Aggiungi un listener che registra nel log
// blog.on('nuovo-articolo', (articolo) => { ... });

// TODO: Pubblica alcuni articoli ??????????????'''
