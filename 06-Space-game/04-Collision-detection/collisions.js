// Una función de comparación, esta función puede verse así:
function intersectRect(r1, r2) {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
}

// Una forma de obtener una representación rectangular de un objeto de juego, algo como esto:
rectFromGameObject(); {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width
    }
}

// ocurrió la colisión
enemy.dead = true

// puede proceder a clasificar los objetos muertos antes de volver a pintar la pantalla, así:

gameObjects = gameObject.filter(go => !go.dead);

// implementar un llamado enfriamiento, un temporizador, que garantiza que un láser solo 
// se pueda disparar con cierta frecuencia.
class Cooldown {
    constructor(time) {
      this.cool = false;
      setTimeout(() => {
        this.cool = true;
      }, time)
    }
  }
  
  class Weapon {
    constructor() {}
    fire() {
      if (!this.cooldown || this.cooldown.cool) {
        // produce a laser
        this.cooldown = new Cooldown(500);
      } else {
        // do nothing - it hasn't cooled down yet.
      }
    }
}