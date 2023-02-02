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