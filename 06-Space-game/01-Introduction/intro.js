// -Clases-

//La idea es usar classes junto con inheritance para lograr agregar un cierto comportamiento a una clase.

//configurar la clase GameObject
class GameObject {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.type = type;
    }
  }
  
  //esta clase extenderá las propiedades de clase inherentes del GameObject
  class Movable extends GameObject {
    constructor(x,y, type) {
      super(x,y, type)
    }
  
  //este objeto móvil se puede mover en la pantalla
    moveTo(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  //esta es una clase específica que extiende la clase Movable, por lo que puede aprovechar todas las propiedades que hereda
  class Hero extends Movable {
    constructor(x,y) {
      super(x,y, 'Hero')
    }
  }
  
  //esta clase, por otro lado, solo hereda las propiedades GameObject
  class Tree extends GameObject {
    constructor(x,y) {
      super(x,y, 'Tree')
    }
  }
  
  // un héroe puede moverse...
  const hero = new Hero();
  hero.moveTo(5,5);
  
  //pero un árbol no puede
  const tree = new Tree();

// -Composición-

//Una forma diferente de manejar la herencia de objetos es usando Composición. Entonces, 
//los objetos expresan su comportamiento así:

//crear un gameObject constante
const gameObject = {
    x: 0,
    y: 0,
    type: ''
  };
  
  //...y un movible constante
  const movable = {
    moveTo(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  //entonces la constante movableObject está compuesta por gameObject y constantes movibles
  const movableObject = {...gameObject, ...movable};
  
  //luego crea una función para crear un nuevo Hero que hereda las propiedades de movableObject
  function createHero(x, y) {
    return {
      ...movableObject,
      x,
      y,
      type: 'Hero'
    }
  }
  //...y un objeto estático que hereda solo las propiedades de gameObject
  function createStatic(x, y, type) {
    return {
      ...gameObject,
      x,
      y,
      type
    }
  }
  //crea el héroe y muévelo
  const hero2 = createHero(10,10);
  hero.moveTo(5,5);
  //y crea un árbol estático que solo se para alrededor
  const tree2 = createStatic(0,0, 'Tree'); 