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
