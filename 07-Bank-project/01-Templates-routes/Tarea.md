# Mejorar el enrutamiento

## Instrucciones

La declaración de rutas contiene actualmente solo el ID de plantilla a usar. Pero cuando se muestra una página nueva, a veces se necesita un poco más. Mejoremos nuestra implementación de enrutamiento con dos características adicionales:

- Dé títulos a cada plantilla y actualice el título de la ventana con él cuando cambie la plantilla.
- Agregue una opción para ejecutar código después de que cambie la plantilla. Queremos imprimir `'Se muestra el panel'` en la consola del desarrollador cada vez que se muestra la página del panel.

## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | --------- | -------- | ----------------- |
| | Las dos características están implementadas y funcionando. La adición de título y código también funciona para una nueva ruta agregada en la declaración de `routes`. | Las dos características funcionan, pero el comportamiento está codificado y no se puede configurar a través de la declaración de `routes`. Agregar una tercera ruta con la adición de título y código no funciona o funciona parcialmente. | Una de las funciones falta o no funciona correctamente.

En este código actualizado, se han añadido los dos cambios que se han indicado:

1. Títulos de plantilla: se agrego un campo <strong>'title'</strong> en el objeto de ruta para cada ruta. Ahora, cuando cambies de plantilla, el título de la ventana se actualizará según la plantilla correspondiente.

```JavaScript
// Se agregan el atributo del titulo a las rutas de las plantillas
const routes = {
    '/login': { templateId: 'login', title: 'Inicio de Sesión' },
    '/dashboard': { templateId: 'dashboard', title: 'Tablero' },
    '/404': { templateId: '404', title: 'Página no encontrada' },
};

function updateRoute(templateId) {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        return navigate('/');
    }

    // Actualizar el título de la ventana
    document.title = route.title;

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
}
```
2. Ejecución de código personalizado: Tambien se ha agregado un bloque condicional en la función updateRoute para verificar si la plantilla actual es la del panel. Si es así, se imprimirá "Se muestra el panel" en la consola del desarrollador. Esto cumple con tu solicitud de ejecutar código después de cambiar la plantilla.

```JavaScript
function updateRoute(templateId) {
    const path = window.location.pathname;
    const route = routes[path];

    ...

    // Ejecutar código después de cambiar la plantilla
    if (templateId === 'dashboard') {
        console.log('Se muestra el panel');
    }
}
```
Estos cambios ayudan a mejorar la implementación de enrutamiento de plantillas con las características adicionales mencionadas.

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/7-bank-project/1-template-route/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/7-bank-project/1-template-route/translations/README.es.md">Proyecto de Construir un banco, parte 1: Plantillas HTML y rutas en una aplicación web</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.