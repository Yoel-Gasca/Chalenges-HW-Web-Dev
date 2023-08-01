// -Adding Motion-

//establecer la ubicación del héroe
hero.x += 5;
// limpia el rectángulo que alberga al héroe
ctx.clearRect(0, 0, canvas.width, canvas.height);
// vuelve a dibujar el fondo del juego y el héroe
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);

//Para manejar un evento, debe usar el método addEventListener() de la ventana y proporcionarle dos parámetros
//de entrada. El primer parámetro es el nombre del evento, por ejemplo, keyup. 
//El segundo parámetro es la función que debe invocarse como resultado del evento que tiene lugar.

//He aquí un ejemplo:
window.addEventListener('keyup', (evt) => {
  // `evt.key` = representación de cadena de la clave
  if (evt.key === 'ArrowUp') {
    // hacer algo
    console.log('UP!')
  }
});

//Las teclas * especiales * que afectan la ventana. Eso significa que si estás escuchando un evento keyup
// y se usan estas teclas especiales para mover al héroe o personaje, también realizará un desplazamiento horizontal.
let onKeyDown = function (e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 37:
      case 39:
      case 38:
      case 40: // Teclas de flecha
      case 32:
        e.preventDefault();
        break; // Space
      default:
        break; // no bloquee otras llaves
    }
  };
  
  window.addEventListener('keydown', onKeyDown);
// Movimiento inducido por el juego
// Podemos hacer que las cosas se muevan por sí mismas usando temporizadores como la función setTimeout() 
// o setInterval() que actualizan la ubicación del objeto en cada tic o intervalo de tiempo. 
// Esto es lo que puede parecer:
let id = setInterval(() => {
    //mover al enemigo en el eje y
    enemy.y += 10;
})

//El bucle del juego

// Es un concepto que es esencialmente una función que se invoca a intervalos regulares.
// Se llama bucle de juego, ya que todo lo que debería ser visible para el usuario se incluye en el bucle.

let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);



