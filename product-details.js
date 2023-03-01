
let urlSearchParams = new URLSearchParams(window.location.search);
let productId = urlSearchParams.get('id');


fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {

        let productTitle = document.querySelector('.card-title');
        let productDescription = document.querySelector('.card-text');
        let productCategory = document.querySelector('.category');
        let productPrice = document.querySelector('.price');
        let productRating = document.querySelector('.rating');
        let productImage = document.querySelector('.card-img-top');

        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productCategory.textContent = product.category;
        productPrice.textContent = `$${product.price}`;
        productRating.textContent = `${product.rating.rate} (${product.rating.count} ratings)`;
        productImage.src = product.image;
        productImage.alt = product.title;
    })
    .catch(error => console.error(error));
