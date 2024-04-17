

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});


function findProducts()
{
  fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
              data.forEach((product) => {
                console.log(product);
                let title = product.title;
                let desc = product.description;
                let price = product.price;
                let category = product.category;
                let productImage = product.image;
                let rating = product.rating.rate;
                let card = document.createElement('article');
                card.className = 'card';
                card.innerHTML = `<div class="card__preview">` +
                `<div class="card__image">` +
                `<img src=` + productImage + `>`+ 
                `<div class="card__price">` 
                + "$" + price + " $USD" + `</div>` + `</div>` + `</div>` +
                `<div class="card__content">` +
                `<h2 class="card__title">` + title + `</h2>` +
                `<p class="card_category">` + category + `</p>` +
                `<p class="card__description">` + desc + `</p>` + 
                `</div class="card_bottom">` + 
                `<div class="card__rating">` + " Rating del producto actual: " + rating + `</div>`;
                document.getElementById("cards_div").appendChild(card);
              })
            })
            .then(json=>console.log(json))
            .catch(err => console.log(err));
}

function findSpecificProduct(id)
{
  fetch('https://fakestoreapi.com/products/' + id)
    .then(res => res.json())
    .then(product => {
        console.log(product);
        let title = product.title;
        let desc = product.description;
        let price = product.price;
        let category = product.category;
        let productImage = product.image;
        let rating = product.rating.rate;
        let card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `<div class="card__preview">` +
        `<div class="card__image">` +
        `<img src=` + productImage + `>`+ 
        `<div class="card__price">` 
        + "$" + price + " $USD" + `</div>` + `</div>` + `</div>` +
        `<div class="card__content">` +
        `<h2 class="card__title">` + title + `</h2>` +
        `<p class="card_category">` + category + `</p>` +
        `<p class="card__description">` + desc + `</p>` + 
        `</div class="card_bottom">` + 
        `<div class="card__rating">` + " Rating del producto actual: " + rating + `</div>`;
        document.getElementById("cards_div").appendChild(card);
    })
    .then(json=>console.log(json))
    .catch(err => console.log(err));
}


function callTheRightAPI(){
  let productId = document.getElementById("productId").value;
  console.log(productId);
  if(productId == "")
    findProducts();
  else
    findSpecificProduct(productId);
}


