// Tarea 1: Conceptos básicos de JavaScript: tipos de datos


/* 1. Objetos: Puedes utilizar objetos para representar los productos en el carrito de 
      compras. Cada objeto puede tener propiedades como el nombre del producto, la 
      descripción, el precio, la cantidad, etc.*/
      const producto = {
            nombre: "Camisa",
            descripcion: "Una camisa de algodón",
            precio: 29.99,
            cantidad: 2
      };

/* 2. Números: Los números son útiles para representar precios, descuentos, cantidades y 
      totales en el carrito de compras.*/
      const precio = 29.99;
      const cantidad = 2;
      const total = precio * cantidad;

/* 3. Cadenas de texto: Las cadenas de texto pueden ser utilizadas para mostrar 
      el nombre del producto, la descripción, el estado del carrito, etc.*/
      const nombreProducto = "Camisa";
      const descripcion = "Una camisa de algodón";
      const estadoCarrito = "Carrito vacío";

/* 4. Arreglos: Los arreglos son útiles para almacenar una lista de productos en el carrito de 
      compras. Puedes agregar, eliminar y modificar elementos en el arreglo según sea necesario.*/
      const carrito = [
            { nombre: "Camisa", precio: 29.99, cantidad: 2 },
            { nombre: "Pantalón", precio: 39.99, cantidad: 1 },
            { nombre: "Calcetines", precio: 9.99, cantidad: 3 }
        ];

/* 5. Booleanos: Los booleanos pueden ser utilizados para indicar si un producto 
      está en stock, si el carrito está vacío o si se ha aplicado un descuento, entre 
      otros estados.*/
    const enStock = true;
    const carritoVacio = false;
    const aplicarDescuento = true;

/* 6. Funciones: Las funciones son útiles para realizar operaciones en el carrito de compras, 
      como agregar productos, calcular el total o aplicar descuentos.*/
      function agregarAlCarrito(producto) {
        // Código para agregar el producto al carrito
      }
      
      function calcularTotal(carrito) {
        // Código para calcular el total del carrito
      }
      
      function aplicarDescuentos(carrito) {
        // Código para aplicar descuentos al carrito
      }