# Cambia el estilo de tu extensión

## Instrucciones

El código base para esta extensión viene completo con estilos, pero no es necesario que los uses; haga suya su extensión al cambiarle el estilo editando su archivo css.

## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | -------------------------------------------- | --------------------- | ----------------- |
| | El código se envía con nuevos estilos funcionales | El estilo está incompleto | Los estilos tienen errores |

### Nuevos estilos para la extencion
Se modificaron algunos de los aspectos mínimos en los estilos como el color del fondo y el color de los botones que contiene la extensión.

<strong>Estilos originales</strong>

```CSS
:root {
	--sans: 1em/1.6 system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Droid Sans, Helvetica Neue, Fira Sans, sans-serif;
	--mono: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, 'Courier New', monospace;
	--c1: #0074d9;
	--c2: #eee;
	--c3: #fff;
	--c4: #000;
	--c5: #fff;
	--m1: 8px;
	--rc: 8px;
}

@media (prefers-color-scheme: dark) {
	:root {
		--c2: #1e1f20;
		--c3: #333;
		--c4: #fff;
	}
}
```
Vista de estilos originales:
![Alt text](./img/image.png)

<strong>Se hicieron los siguientes cambios a los estilos anteriores:</strong>

```CSS
:root {
	--sans: 1em/1.6 system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Droid Sans, Helvetica Neue, Fira Sans, sans-serif;
	--mono: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, 'Courier New', monospace;
	--c1: #345716;
	--c2: #eee;
	--c3: #fff;
	--c4: #000;
	--c5: #fff;
	--m1: 10px;
	--rc: 8px;
}

@media (prefers-color-scheme: dark) {
	:root {
		--c2: #333;
		--c3: #1e1f20;
		--c4: #fff;
	}
}
```

Vista de estilos modificados:

![Alt text](./img/image2.png)

Con este cambio se pueden apreciar mejor de manera visual los elementos de la interfaz de la extensión.

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/5-browser-extension/1-about-browsers/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/5-browser-extension/1-about-browsers/translations/README.es.md">Proyecto de extensión del navegador Parte 1: Todo sobre los navegadores</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.