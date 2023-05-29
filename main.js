// Creo un header y le meto los tags que necesito.
const header = document.createElement("header");
header.innerHTML = `<img class="logo_img" src="./assets/logo.png" alt="Logo" />
<nav class="menu">
  <ul class="menu_options">
    <li><a class="menu_option" href="#">Nosotras</a></li>
//  <li><a class="menu_option" href="#">Tienda</a></li>
//  <li><a class="menu_option" href="#">Galería</a></li>
//  <li><a class="menu_option" href="#">Contacto</a></li>
  </ul>
</nav>`;
document.body.appendChild(header);

// Creo un article para los filtros y meto los tags que necesito.
const asideArticle = document.createElement("article");
asideArticle.className = "filter_options";
asideArticle.innerHTML = `<form id="filter-options">
<h3>Filtros de búsqueda</h3>
<div class="seller_filter">
  <label class="seller" for="seller">Vendedores</label>
  <select name="seller" id="seller">
    <option disabled selected>Filtrar por tienda</option>
    <option value="0">Maui</option>
    <option value="1">Elisa</option>
    <option value="2">Phoebo</option>
    <option value="3">Paula</option>
  </select>
</div>
<div class="price_filter">
  <p>Precio</p>
  <input class="price_input" placeholder="Precio máximo" type="number" name="price" id="price" min="3"/>
  <button id="submit" class="submit" type="button">Buscar</button>
</div>
<button class="filter_reset" type="reset">Limpiar filtros 🫧</button>
</form>`;
document.body.appendChild(asideArticle);

// Función reset del botón de limpiar filtros.

// Array de productos.
const products = [
  {
    name: "Alpargata Imán",
    price: 3,
    seller: "Maui",
    image: "./assets/alpargata.png",
  },
  {
    name: "Fofucha",
    price: 20,
    seller: "Elisa",
    image: "./assets/fofucha.png",
  },
  {
    name: "Tarta de pañales",
    price: 30,
    seller: "Phoebo",
    image: "./assets/tarta.png",
  },
  {
    name: "Lápices decorados",
    price: 3,
    seller: "Paula",
    image: "./assets/lapiz.png",
  },
  {
    name: "Juego",
    price: 10,
    seller: "Maui",
    image: "./assets/juego.png",
  },
  {
    name: "Cuaderno",
    price: 6,
    seller: "Elisa",
    image: "./assets/cuaderno.png",
  },
  {
    name: "Reloj",
    price: 10,
    seller: "Phoebo",
    image: "./assets/reloj.png",
  },
  {
    name: "Broche",
    price: 3,
    seller: "Paula",
    image: "./assets/broche.png",
  },
  {
    name: "Adorno navideño",
    price: 3,
    seller: "Maui",
    image: "./assets/adorno.png",
  },
  {
    name: "Horquilla",
    price: 3,
    seller: "Elisa",
    image: "./assets/clip pelo.png",
  },
];

const productsCopy = products;

// Divs para cada artículo de la tienda.
const productsArticle = document.createElement("article");
productsArticle.className = "container_products";
productsArticle.id = "productsSection";
function paintProducts() {
  for (let i = 0; i < products.length; i++) {
    productsArticle.innerHTML += `<div class="div_products">
  <img class="product_img" src="${products[i].image}" alt="${products[i].name}"/>
  <h3>${products[i].name}</h3>
  <p>${products[i].price}€</p>
  <p>${products[i].seller}</p>
  </div>`;
    document.body.appendChild(productsArticle);
  }
}
paintProducts();

function resetFilters() {
  productsArticle.innerHTML = "";
  paintProducts();
  document.getElementsByClassName("filter_options").reset();
}

// FILTROS.
// SELLER.
 function onOptionSelected() {
   let selectOpt = selectElement.selectedIndex;
   let opt = selectElement.options[selectOpt].innerHTML;

   productsArticle.innerHTML = "";

   const filteredProductsBySeller = productsCopy.filter((product) => {
     const filterSelectedOpt = product.seller === opt;
     return filterSelectedOpt;
   });

   for (let i = 0; i < filteredProductsBySeller.length; i++) {
     productsArticle.innerHTML += `<div class="div_products">
     <img class="product_img" src="${filteredProductsBySeller[i].image}" alt="${filteredProductsBySeller[i].name}"/>
     <h3>${filteredProductsBySeller[i].name}</h3>
     <p>${filteredProductsBySeller[i].price}€</p>
     <p>${filteredProductsBySeller[i].seller}</p>
     </div>`;
     document.body.appendChild(productsArticle);
   }
 }

// PRECIO.
let inputValue = "";

function onButtonClicked() {
  const filteredProductsByPrice = productsCopy.filter((product) => {
    return product.price <= inputValue;
  });

  productsArticle.innerHTML = "";
  
  for (let i = 0; i < filteredProductsByPrice.length; i++) {
    productsArticle.innerHTML += `<div class="div_products">
   <img class="product_img" src="${filteredProductsByPrice[i].image}" alt="${filteredProductsByPrice[i].name}"/>
   <h3>${filteredProductsByPrice[i].name}</h3>
   <p>${filteredProductsByPrice[i].price}€</p>
   <p>${filteredProductsByPrice[i].seller}</p>
   </div>`;
    document.body.appendChild(productsArticle);
  }
  
}

const onInputChanged = (event) => {
  inputValue = event.target.value;
};

const buttonElement = document.querySelector("#submit");
buttonElement.addEventListener("click", onButtonClicked);

const inputElement = document.querySelector('input[type="number"]');
inputElement.addEventListener("input", onInputChanged);

const selectElement = document.querySelector("#seller");
selectElement.addEventListener("change", onOptionSelected);

const btn2 = document.querySelector(".filter_reset");
btn2.addEventListener("click", resetFilters);