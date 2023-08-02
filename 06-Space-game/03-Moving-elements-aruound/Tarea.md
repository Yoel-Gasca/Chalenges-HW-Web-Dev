# Comente su código

## Instrucciones

Revisa tu archivo /app.js actual en la carpeta de tu juego y busca formas de comentarlo y ordenarlo. Es muy fácil que el código se salga de control y ahora es una buena oportunidad para agregar comentarios para asegurarse de que tiene un código legible para que pueda usarlo más tarde.

## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | ---------------- | ------------------------------------- | ------------ |
| | El código `app.js` está completamente comentado y organizado en bloques lógicos | El código `app.js` está adecuadamente comentado | El código `app.js` está algo desorganizado y carece de buenos comentarios |

<strong>Comentando el codigo del archivo `app.js`</strong>

Los comentarios que se pueden observar dentro del código del archivo `app.js` indican de manera simple el funcionamiento del código que esta debajo.

```JavaScript
// -Add Motion-
// @ts-check
// Crea una clase EventEmitter para publicar y suscribirse a mensajes
class EventEmitter {
	constructor() {
		this.listeners = {};
	}

	on(message, listener) {
		if (!this.listeners[message]) {
			this.listeners[message] = [];
		}
		this.listeners[message].push(listener);
	}

	emit(message, payload = null) {
		if (this.listeners[message]) {
			this.listeners[message].forEach((l) => l(message, payload));
		}
	}
}

// Agrega objetos dedicados 
class GameObject {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dead = false;
		this.type = '';
		this.width = 0;
		this.height = 0;
		this.img = undefined;
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}
}

// GameObject para crear el héroe y los enemigos.
class Hero extends GameObject {
	constructor(x, y) {
		super(x, y);
		(this.width = 99), (this.height = 75);
		this.type = 'Hero';
		this.speed = { x: 0, y: 0 };
	}
}

// Crear enemigos
class Enemy extends GameObject {
	constructor(x, y) {
		super(x, y);
		(this.width = 98), (this.height = 50);
		this.type = 'Enemy';
		let id = setInterval(() => {
			if (this.y < canvas.height - this.height) {
				this.y += 5;
			} else {
				console.log('Stopped at', this.y);
				clearInterval(id);
			}
		}, 300);
	}
}

// -Drawing to canvas-
function loadTexture(path) {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = path;
		img.onload = () => {
			resolve(img);
		};
	});
}

// Agrega constantes y configura el EventEmitter:
const Messages = {
	KEY_EVENT_UP: 'KEY_EVENT_UP',
	KEY_EVENT_DOWN: 'KEY_EVENT_DOWN',
	KEY_EVENT_LEFT: 'KEY_EVENT_LEFT',
	KEY_EVENT_RIGHT: 'KEY_EVENT_RIGHT',
};

let heroImg,
	enemyImg,
	laserImg,
	canvas,
	ctx,
	gameObjects = [],
	hero,
	eventEmitter = new EventEmitter();

// EVENTS
// @ts-ignore
let onKeyDown = function (e) {
	console.log(e.keyCode);
	switch (e.keyCode) {
		case 37:
		case 39:
		case 38:
		case 40: // Arrow keys
		case 32:
			e.preventDefault();
			break; // Space
		default:
			break; // do not block other keys
	}
};

window.addEventListener('keydown', onKeyDown);

// Agrega un detector de eventos en la ventana:
// TODO make message driven
window.addEventListener('keyup', (evt) => {
	if (evt.key === 'ArrowUp') {
		eventEmitter.emit(Messages.KEY_EVENT_UP);
	} else if (evt.key === 'ArrowDown') {
		eventEmitter.emit(Messages.KEY_EVENT_DOWN);
	} else if (evt.key === 'ArrowLeft') {
		eventEmitter.emit(Messages.KEY_EVENT_LEFT);
	} else if (evt.key === 'ArrowRight') {
		eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
	}
});

// Mover enemigos en un cierto intervalo
function createEnemies() {
	const MONSTER_TOTAL = 5;
	const MONSTER_WIDTH = MONSTER_TOTAL * 98;
	const START_X = (canvas.width - MONSTER_WIDTH) / 2;
	const STOP_X = START_X + MONSTER_WIDTH;

	for (let x = START_X; x < STOP_X; x += 98) {
		for (let y = 0; y < 50 * 5; y += 50) {
			const enemy = new Enemy(x, y);
			enemy.img = enemyImg;
			gameObjects.push(enemy);
		}
	}
}

// Proceso similar para el héroe.
function createHero() {
	hero = new Hero(canvas.width / 2 - 45, canvas.height - canvas.height / 4);
	hero.img = heroImg;
	gameObjects.push(hero);
}

// función para comenzar el dibujo
function drawGameObjects(ctx) {
	gameObjects.forEach((go) => go.draw(ctx));
}

// Inicializa el juego
function initGame() {
	gameObjects = [];
	createEnemies();
	createHero();

	eventEmitter.on(Messages.KEY_EVENT_UP, () => {
		hero.y -= 5;
	});

	eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
		hero.y += 5;
	});

	eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
		hero.x -= 5;
	});

	eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
		hero.x += 5;
	});
}

// Configura el bucle del juego
window.onload = async () => {
	canvas = document.getElementById('canvas');
	// @ts-ignore
	ctx = canvas.getContext('2d');
	heroImg = await loadTexture('assets/player.png');
	enemyImg = await loadTexture('assets/enemyShip.png');
	laserImg = await loadTexture('assets/laserRed.png');

	initGame();
	let gameLoopId = setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		drawGameObjects(ctx);
	}, 100);
};

```

El comentar código está catalogado como una buena práctica al momento de desarrollar un proyecto de programación ya que ayuda a que nuestro código que sea comprensible y mantenible tanto para uno mismo como para otros desarrolladores que puedan trabajar en el proyecto en el futuro.

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/6-space-game/3-moving-elements-around/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/6-space-game/3-moving-elements-around/translations/README.es.md">Construye un juego espacial Parte III: Agregar movimiento</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.