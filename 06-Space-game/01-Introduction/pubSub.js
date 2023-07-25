// -Pub/Sub-

//Pub/Sub significa publish-subscribe (publicar-suscribirse).

//configurar una clase EventEmitter que contenga oyentes
class EventEmitter {
    constructor() {
      this.listeners = {};
    }
  //cuando se recibe un mensaje, deje que el oyente maneje su carga útil
    on(message, listener) {
      if (!this.listeners[message]) {
        this.listeners[message] = [];
      }
      this.listeners[message].push(listener);
    }
  //cuando se envía un mensaje, envíelo a un oyente con alguna carga útil
    emit(message, payload = null) {
      if (this.listeners[message]) {
        this.listeners[message].forEach(l => l(message, payload))
      }
    }
  }
// Para usar el código anterior, podemos crear una implementación muy pequeña:

//configurar una estructura de mensaje
const Messages = {
    HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
  };
  //invocar el eventEmitter que configuró anteriormente
  const eventEmitter = new EventEmitter();
  //configurar un héroe
  const hero = createHero(0,0);
  //Informe al emisor de eventos que esté atento a los mensajes relacionados con el héroe 
  //que se mueve hacia la izquierda y actúe en consecuencia
  eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.move(5,0);
  });
  
  //configurar la ventana para escuchar el evento keyup, específicamente si se golpea la flecha izquierda,
  //emite un mensaje para mover al héroe a la izquierda
  window.addEventListener('keyup', (evt) => {
    if (evt.key === 'ArrowLeft') {
      eventEmitter.emit(Messages.HERO_MOVE_LEFT)
    }
  });