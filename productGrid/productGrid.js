const productDiv = document.getElementById("product-div");
const products = [
  {
  title: "Cat Bat Wings",
  price: "$6.99",
  image: "https://via.placeholder.com/150",
  alt: "an image of a cat in a bat costume",
  description: "Pet Cat Bat Wings for Halloween Party Decoration, cute Cat Dress Up Accessories"
},
]

function initilizeElements() {
  // create required elements
  
}

function populateProduct() {
  let cardTemplate = `
      <div class="div-container" id="product-div"><div class="div-card">
        <h2>${products[0].title}</h2>
        <p>$${products[0].price}</p>
        <img src="${products[0].image}" alt="${products[0].alt}" />
        <p>
        ${products[0].description}
        </p>
      </div>`
  
      productDiv.
}

populateProduct()