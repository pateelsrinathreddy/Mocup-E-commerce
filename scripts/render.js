const selectedProductIds = [] ;


const productsElement = document.getElementById("products");

const productsModified = products.map(function(product) {
    product.priceModified = product.price.toFixed(2) ; 
    return product;
})

renderProductCards(productsModified);

function renderProductCards(products) {
    let productCards = "" ; 
    for (let i = 0; i < products.length; i++) {

        productCards = productCards + renderProductCard(products[i]) 
    
    }
    productsElement.innerHTML = productCards;
    captureFavoriteButtonClick();
}


function renderProductCard(product) { 
    return `<div class="col-12 col-md-4 col-lg-3">
    <div class="card ">
    <img src="${product.image}" alt="image"/>
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <strong><span class="material-symbols-outlined">
      currency_rupee
      </span>${product.priceModified}</strong>
      <div class="btn-group w-100" role="group" aria-label="Basic example">
        <button type="button" class="btn ">
            <span class="material-symbols-outlined">
                shopping_cart_checkout
            </span>
        </button>
        <button  type="button" class="btn btn-favorite" data-id="${product.id}">
            <span class="material-symbols-outlined">
                favorite
            </span>
        </button>
        <button type="button" class="btn ">
          <span class="material-symbols-outlined">
            share
            </span>
        </button>
      </div>
    </div>
</div>
</div>` 

} 