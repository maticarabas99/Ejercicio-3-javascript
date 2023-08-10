const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById('form')
const container = document.getElementById('container')
const inputnumber = document.getElementById('input-number')
const error = document.getElementById(`error`)

const guardarUltimaBusqueda =
  JSON.parse(localStorage.getItem("ultimaBusqueda")) || {};

const saveToLocalStorage = (busqueda) => {
  localStorage.setItem("ultimaBusqueda", JSON.stringify(busqueda));
};



const searchPizza = (e) =>{
  e.preventDefault()
  if(inputnumber.value == ""){
    container.innerHTML = "Por favor ingrese un numero"
    error.textContent = ""
    return;
  }

  const pizza = pizzas.find((pizza) => pizza.id == inputnumber.value)
  
  if(!pizza){
   container.innerHTML = "No hay pizzas con ese ID"
   error.textContent = ""
    return;
}
  if(pizza){
    error.textContent = ""
    container.innerHTML = `
    <div>
    <h2>${pizza.nombre}</h2>
    <img src="${pizza.imagen}"/>
    <p>Precio: ${pizza.precio}<p/>
    <div/>`;
    saveToLocalStorage({ tipo: "pizza_encontrada", pizza });
  }
}

const init = () => {
  form.addEventListener("submit", searchPizza);
  if (guardarUltimaBusqueda.tipo == "pizza_encontrada") {
    const pizza = guardarUltimaBusqueda.pizza;
    if(pizza){
      error.textContent = "";
      container.innerHTML = `
      <div>
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}"/>
      <p>Precio: ${pizza.precio}<p/>
      <div/>`
    }
  }
}

init()