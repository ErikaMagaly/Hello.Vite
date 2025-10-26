let productos = [];


function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio });
  console.log(`✅ Producto agregado: ${nombre} - $${precio}`);
}

function mostrarProductos() {
  console.log("📦 Lista de productos:");
  productos.forEach(p => console.log(`- ${p.nombre}: $${p.precio}`));
}

function eliminarProducto(nombre) {
  productos = productos.filter(p => p.nombre !== nombre);
  console.log(`❌ Producto eliminado: ${nombre}`);
}

agregarProducto("Laptop", 5000);
agregarProducto("Mouse", 100);
agregarProducto("Teclado", 200);

mostrarProductos();

eliminarProducto("Mouse");
mostrarProductos();
