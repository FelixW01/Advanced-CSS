const productDiv = document.getElementById("product-div");
const products = [
  {
  title: "Cat Bat Wings",
  price: "$6.99",
  image: "https://via.placeholder.com/150",
  alt: "an image of a cat in a bat costume",
  description: "Pet Cat Bat Wings for Halloween Party Decoration, cute Cat Dress Up Accessories"
}, {
  title: "Product 2",
  price: "$6.99",
  image: "https://via.placeholder.com/150",
  alt: "an image of a cat in a bat costume",
  description: "Pet Cat Bat Wings for Halloween Party Decoration, cute Cat Dress Up Accessories"
},
]

function initializeElements() {
  // create required elements
  const cardDiv = document.createElement("div");
  const cardH2 = document.createElement("h2");
  const cardP = document.createElement("p");
  const cardImg = document.createElement("img");
}

function populateProduct() {
  initializeElements()
  for (let i = 0; i < products.length; i++) {
    let cardTemplate = `
        <div class="div-container" id="product-div">
        <div class="div-card">
          <h2>${products[i].title}</h2>
          <p>$${products[i].price}</p>
          <img src="${products[i].image}" alt="${products[i].alt}" />
          <p>
          ${products[i].description}
          </p>
        </div>`

        productDiv.innerHTML = cardTemplate;
      }
}

populateProduct()