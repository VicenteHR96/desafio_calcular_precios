//Elementos del DOM

const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const cantidad = document.querySelector(".cantidad");
const btnIncrease = document.querySelector("#btn-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const valorTotal = document.querySelector(".valor-total");

//Métodos

const increase = () => {
  const valorCantidad = Number(cantidad.innerHTML);
  cantidad.innerHTML = valorCantidad + 1;
  valorTotal.innerHTML = Number(precio) * cantidad.innerHTML;
};

const decrease = () => {
  const valorCantidad = Number(cantidad.innerHTML);
  if (valorCantidad >= 1) {
    cantidad.innerHTML = valorCantidad - 1;
  }
  valorTotal.innerHTML = Number(precio) * cantidad.innerHTML;
};

//Eventos

btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
