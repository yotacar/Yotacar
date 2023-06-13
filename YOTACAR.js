// Manejo del carrito de compras
const carrito = document.querySelector("#carrito");
const agregarCarritoBtns = document.querySelectorAll(".agregar-carrito");

agregarCarritoBtns.forEach(btn => {
  btn.addEventListener("click", agregarAlCarrito);
});

function agregarAlCarrito() {
  // Lógica para agregar el producto al carrito
  // ...
  alert("Producto agregado al carrito");
}
