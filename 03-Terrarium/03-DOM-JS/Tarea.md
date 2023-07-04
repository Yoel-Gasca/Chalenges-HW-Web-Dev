# Trabaja un poco más con DOM

## Instrucciones

Investigue el DOM un poco más 'adoptando' un elemento DOM. Visite la [lista de interfaces DOM de MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) y elija una. Encuéntrelo en un sitio web en la web y escriba una explicación de cómo se usa.

## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | --------------------------------------------- | ------------------------------------------------ | ----------------------- |
| | Se presenta la redacción del párrafo, con ejemplo | Se presenta la redacción del párrafo, sin ejemplo | No se presenta ninguna reseña |

### Elementos DOM
Se escogieron tres elementos de interfaces DOM de la anterior [lista de interfaces DOM de MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) los cuales son:
- CustomEvent
- Range
- TimeRanges

Un ejemplo de un sitio web muy conocido donde se aplican estas interfaces DOM podría ser un reproductor de video en línea como YouTube.

Esto es un ejemplo conceptual de cómo se podrían utilizar las interfaces DOM mencionadas en un reproductor de video como YouTube o alguno similar:

1. <strong>CustomEvent:</strong> YouTube podría utilizar CustomEvent para crear eventos personalizados relacionados con la reproducción de videos, como "videoIniciado", "videoPausado" o "videoFinalizado". Estos eventos personalizados permitirían a los desarrolladores de YouTube implementar funciones personalizadas y desencadenar acciones específicas cuando ocurran ciertos eventos en el reproductor de video.

```JavaScript

// Crear el evento personalizado
const videoIniciadoEvent = new CustomEvent('reproduccionIniciada', { detail: { videoId: 'video1' } });

// Despachar el evento en el elemento del reproductor de video
const reproductor = document.getElementById('reproductor');
reproductor.dispatchEvent(videoIniciadoEvent);

// Crear el evento personalizado
const videoPausadooEvent = new CustomEvent('reproduccionPausada', { detail: { videoId: 'video1' } });

// Despachar el evento en el elemento del reproductor de video
const reproductor = document.getElementById('reproductor');
reproductor.dispatchEvent(videoPausadoEvent);

// Crear el evento personalizado
const videoFinalizadoEvent = new CustomEvent('reproduccionTerminada', { detail: { videoId: 'video1' } });

// Despachar el evento en el elemento del reproductor de video
const reproductor = document.getElementById('reproductor');
reproductor.dispatchEvent(videoFinalizadoEvent);
```

2. <strong>Range:</strong> YouTube podría utilizar la interfaz Range para permitir la selección y manipulación de texto en los comentarios de los videos. Esto permitiría a los usuarios resaltar y copiar partes específicas de los comentarios.

 ```JavaScript
 // Obtener el párrafo objetivo
const parrafo = document.getElementById('parrafo');

// Crear un rango que abarque todo el contenido del párrafo
const rango = document.createRange();
rango.selectNodeContents(parrafo);

// Obtener la selección actual
const seleccion = window.getSelection();

// Vaciar cualquier selección existente
seleccion.removeAllRanges();

// Agregar el rango a la selección
seleccion.addRange(rango);
 ```

 3. <strong>TimeRanges:</strong> YouTube utiliza la interfaz TimeRanges para gestionar la barra de progreso y los controles de tiempo en el reproductor de video. Esto permite mostrar la duración total del video, mostrar el progreso actual de reproducción y permitir que los usuarios salten a un punto específico en el video.

 ```JavaScript
 // Obtener el elemento de video
const video = document.getElementById('video');

// Obtener las TimeRanges del video
const rangosDeTiempo = video.buffered;

// Obtener la duración total del video sumando los rangos de tiempo
const duracionTotal = 0;
for (var i = 0; i < rangosDeTiempo.length; i++) {
  duracionTotal += rangosDeTiempo.end(i) - rangosDeTiempo.start(i);
}
console.log('Duración total del video: ' + duracionTotal + ' segundos');

 ```

Estos ejemplos mencionados anteriormente son especulativos y basados en la funcionalidad comúnmente utilizada en sitios web de reproductores de video como YouTube. Los detalles exactos de implementación pueden variar y están sujetos a los desarrolladores y el diseño específico del sitio web.

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/3-intro-to-DOM-and-closures/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/3-intro-to-DOM-and-closures/translations/README.es.md">Terrarium Project Part 3: DOM Manipulación y cierre</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.