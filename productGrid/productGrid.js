const productDiv = document.getElementById("product-div");
const products = [
 {
  title: "Cowboy Cat Costume",
  price: "$13.49",
  image: "public/images/cat-cowboy.jpg",
  alt: "an image of a cat in a cowboy costume",
  link:"https://www.amazon.com/NACOCO-Costume-Clothes-Halloween-Costumes/dp/B06XVY9G39/ref=sr_1_15?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat+halloween+costumes&qid=1729132437&sprefix=cat+halloween+costumes%2Caps%2C131&sr=8-15",
  description: "NACOCO Cowboy Cat Costume with Hat Cat Clothes Halloween Costumes for Cat"
}, {
  title: "Lion Cat Costume",
  price: "$10.99",
  image: "public/images/cat-lion.jpg",
  alt: "an image of a cat in a lion costume",
  link:"https://www.amazon.com/OMG-Adorables-Lion-Mane-Costume/dp/B01N24ASL3/ref=sr_1_17?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat%2Bhalloween%2Bcostumes&qid=1729132437&sprefix=cat%2Bhalloween%2Bcostumes%2Caps%2C131&sr=8-17&th=1",
  description: "Lion Mane Costume for Cats"
}, {
  title: "Puss in Boots Cat Costume",
  price: "$22.99",
  image: "public/images/cat-puss.jpg",
  alt: "an image of a cat in a puss in boots costume",
  link:"https://www.amazon.com/EOILFM-Costume-Cosplay-Halloween-Accessories/dp/B0D59PHSZW/ref=sr_1_24?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat%2Bhalloween%2Bcostumes&qid=1729132437&sprefix=cat%2Bhalloween%2Bcostumes%2Caps%2C131&sr=8-24&th=1",
  description: "Pet Cat Dog Puss in Boot Costume Cosplay Halloween Cute Kitten"
}, {
  title: "Dinosaur Cat Costume",
  price: "$13.99",
  image: "public/images/cat-dino.jpg",
  alt: "an image of a cat in a dinosaur costume",
  link:"https://www.amazon.com/Anelekor-Dinosaur-Clothes-Christmas-Halloween/dp/B0CPSFH2NV/ref=sr_1_25?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat%2Bhalloween%2Bcostumes&qid=1729132437&sprefix=cat%2Bhalloween%2Bcostumes%2Caps%2C131&sr=8-25&th=1",
  description: "Funny Cat Dinosaur Costume for Christmas Halloween"
}, {
  title: "Sailor Cat Costume",
  price: "$7.99",
  image: "public/images/cat-sailor.jpg",
  alt: "an image of a cat in a sailor costume",
  link:"https://www.amazon.com/NAMSAN-Pet-Costumes-Halloween-Cosplay/dp/B00LY2QQLA/ref=sr_1_29?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat%2Bhalloween%2Bcostumes&qid=1729132437&sprefix=cat%2Bhalloween%2Bcostumes%2Caps%2C131&sr=8-29&th=1",
  description: "Pet Sailor Costume for Cats Small Dogs Halloween"
}, {
  title: "Red Cloak Cat Costume",
  price: "$19.99",
  image: "public/images/cat-cloak.jpg",
  alt: "an image of a cat in a red cloak",
  link:"https://www.amazon.com/Lovelyshop-Halloween-Costumes-Princess-Cosplay-S/dp/B0B92WMPWD/ref=sr_1_33?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat%2Bhalloween%2Bcostumes&qid=1729132437&sprefix=cat%2Bhalloween%2Bcostumes%2Caps%2C131&sr=8-33&th=1",
  description: "Fur Red Cat Cloak for Halloween Costumes, King Queen Prince and Princess Cosplay"
}, {
  title: "Hoodie Cat Costume",
  price: "$13.99",
  image: "public/images/cat-hoodie.jpg",
  alt: "an image of a cat in a hoodie",
  link:"https://www.amazon.com/QWINEE-Apparel-Necklace-Sunglasses-Multicolor/dp/B0BC9FBM1Q/ref=sr_1_40?crid=1URP88VH0VR1Z&dib=eyJ2IjoiMSJ9.McS7jXO4Wg_XrD4A9MihNjModgoTZOBl1dKGeHxIix8AkNHrsQjIjTU47ZSmg4xfr915767X7HWNbwlxNUqjRVm2Z0sNrQNpB6uXPbUzwuEYoJ5uUez7wcwJ94YftwCZkDl7wQIhkdsgCc5SS_-8SOylvR_1hNChrSaVef4e4jh2JudlcIUdXPJA_aftiRkzc8LQUlO2TjUKTak4C2xHhNH1krc6Z1DKpno5rEmHLX4YvDrY9L7TIIhFi6_3RK7abCcSZa0yyWQ_uIiy-RbggA4BacwYs15zcNmqiquhxFo.WBhuxzEXZjI0jKbgPOwNWa1MnRVDPqybBatVKWd3tLQ&dib_tag=se&keywords=cat%2Bhalloween%2Bcostumes&qid=1729132437&sprefix=cat%2Bhalloween%2Bcostumes%2Caps%2C131&sr=8-40&th=1",
  description: "Dog Hoodie Cat Apparel Dog Custume Set with Necklace and Sunglasses"
},

]

function populateProduct() {
  for (let i = 0; i < products.length; i++) {
    let cardTemplate = `
        <div class="div-card">
          <h2>${products[i].title}</h2>
          <p>$${products[i].price}</p>
          <a href="${products[i].link}"><img src="${products[i].image}" alt="${products[i].alt}" /></a>
          <p>
          ${products[i].description}
          </p>
        </div>`

        productDiv.innerHTML += cardTemplate;
      }
}

populateProduct()