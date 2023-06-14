# Tarea: Conceptos básicos de JavaScript: tipos de datos
Imagina que estás construyendo un carrito de compras. Escriba documentación sobre los tipos de datos que necesitaría para completar su experiencia de compra. ¿Cómo llegó a sus elecciones?

### Rúbrica

Criterios | Ejemplar | Adecuado | Necesita mejorar
--- | --- | --- | - |
|| Los seis tipos de datos se enumeran y exploran en detalle, documentando su uso | Se exploran cuatro tipos de datos | Se exploran dos tipos de datos |

En la construcción de un carrito de compras para una tienda en linea, se pueden usar distintos tipos de datos.
1.	<strong>Objetos:</strong> Un tipo de dato que se puede utilizar son los objetos que van a representar los productos en el carrito de compras. Cada objeto puede tener propiedades como el nombre del producto, la descripción, el precio, la cantidad, etc.
```JavaScript
const producto = {
    nombre: "Camisa",
    descripcion: "Una camisa de algodón",
    precio: 29.99,
    cantidad: 2
};
```
2.	<strong>Números:</strong> Los números son útiles para representar precios, descuentos, cantidades y totales en el carrito de compras.
```JavaScript
const precio = 29.99;
const cantidad = 2;
const total = precio * cantidad;
```

3. <strong>Cadenas de texto:</strong> Las cadenas de texto pueden ser utilizadas para mostrar el nombre del producto, la descripción, el estado del carrito, etc.
```JavaScript
const nombreProducto = "Camisa";
const descripcion = "Una camisa de algodón";
const estadoCarrito = "Carrito vacío";
```
4. <strong>Arreglos:</strong> Los arreglos son útiles para almacenar una lista de productos en el carrito de compras. Puedes agregar, eliminar y modificar elementos en el arreglo según sea necesario.
```JavaScript
const carrito = [
    { nombre: "Camisa", precio: 29.99, cantidad: 2 },
    { nombre: "Pantalón", precio: 39.99, cantidad: 1 },
    { nombre: "Calcetines", precio: 9.99, cantidad: 3 }
];
```

5.	<strong>Booleanos:</strong> Los booleanos pueden ser utilizados para indicar si un producto está en stock, si el carrito está vacío o si se ha aplicado un descuento, entre otros estados.
```JavaScript
const enStock = true;
const carritoVacio = false;
const aplicarDescuento = true;
```

6. <strong>Funciones:</strong> Las funciones son útiles para realizar operaciones en el carrito de compras, como agregar productos, calcular el total o aplicar descuentos.
```JavaScript
function agregarAlCarrito(producto) {
    // Código para agregar el producto al carrito
}
      
function calcularTotal(carrito) {
    // Código para calcular el total del carrito
}
      
function aplicarDescuentos(carrito) {
    // Código para aplicar descuentos al carrito
}
```

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/README.es.md">Conceptos básicos de JavaScript: tipos de datos</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.
