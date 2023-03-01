
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {

    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = products.map(product => {
      return `
        <div class="col-md-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary view-full" data-id="${product.id}">View Full</a>
            </div>
          </div>
        </div>
      `;
    }).join('');


    const viewFullButtons = document.querySelectorAll('.view-full');
    viewFullButtons.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const productId = button.dataset.id;

        window.location.href = `details.html?id=${productId}`;
      });
    });
  })
  .catch(error => console.error(error));
