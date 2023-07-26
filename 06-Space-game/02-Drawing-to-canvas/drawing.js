// dibuja un rectángulo rojo
// 1. obtener la referencia del lienzo
canvas = document.getElementById("myCanvas");

// 2. establecer el contexto en 2D para dibujar formas básicas
ctx = canvas.getContext("2d");

// 3. rellénalo con el color rojo
ctx.fillStyle = 'red';

// 4. y dibuja un rectángulo con estos parámetros, configurando la ubicación y el tamaño
ctx.fillRect(0,0, 200, 200) // x, y, ancho, alto

//Cargar activos
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}

//Cargar patrón de activos
async function loadAsset(path) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        // imagen cargada y lista para ser utilizada
      }
      resolve(img);
    })
  }
  
  // usar así
  async function run() {
    const heroImg = await loadAsset('hero.png')
    const monsterImg = await loadAsset('monster.png')
  
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
    ctx.drawImage(monsterImg, 0,0);
  }