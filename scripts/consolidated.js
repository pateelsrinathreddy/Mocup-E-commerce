
const products = [
    {
        id : 1,
        title : "Macbook" ,
        image : "macbook.jpg",
        description : "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1.." ,
        price : 600
    },
    {
        id : 2,
        title : "Iphone" ,
        image : "iphone.jpg",
        description : "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam.." ,
        price : 123
    },
    {
        id : 3,
        title : "Apple Cinema" ,
        image : "apple_cinema.jpg" ,
        description : "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
        price : 110
    },
    {
        id : 4,
        title : "Canon" ,
        image : "canon_eos_5d.jpg" ,
        description : "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r.." ,
        price : 98
    }

];






function captureFavoriteButtonClick() {
    const products$ = document.getElementById("products") ;
    const favoriteButton$ = products$.querySelectorAll(".btn-favorite") ;
    favoriteButton$.forEach(function(btn$) {
       btn$.addEventListener("click", function(event) {
        const target = event.target; 
        const favoriteBtn$ = target.closest(".btn-favorite");
        const selectedId = favoriteBtn$.getAttribute("data-id"); 
        console.log(selectedId) 
        const selectedProductIndex = selectedProductIds.indexOf(selectedId)
        if (selectedProductIndex != -1) { 
            // means product is already selected 
            selectedProductIds.splice(selectedProductIndex,1) ;

        } else {
            // means product is not selected 
            selectedProductIds.push(selectedId) ;
        } 
        console.log(selectedProductIds) ;
        const wishlistCounter$ = document.getElementById("wishlistCounter") ;
        wishlistCounter$.innerText = selectedProductIds.length ; 
        const icon$ = btn$.querySelector("ma")

       })
   })
} 

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

// // search logic 

const search$ = document.getElementById("search") ; 

search$.addEventListener("keyup",function(event) {
    //console.log(event); 
     const term = search$.value
     //console.log(term);
    //console.log(event.key)

    const termLowercase = term.toLowerCase() ;
    //console.log(termLowercase); 

    const productFiltered = productsModified.filter(function(product) {
        const titleLowerCased = product.title.toLowerCase() ; 
        return titleLowerCased.indexOf(termLowercase) != -1;
    });
    renderProductCards(productFiltered) 
})
