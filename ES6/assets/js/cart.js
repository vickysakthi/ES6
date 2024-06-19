let list = []
function std() {
        return fetch('assets/student.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.students);
                list = data.students;
                return list;
            })
    }

let cart = [];
let col2card;

let loginpage = document.getElementById('login-page');
let userpage = document.getElementById('user-list');
let cartpage = document.getElementById('cart-list');

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  loginpage.style.display = 'none';
  userpage.style.display = 'block';
  std().then(displayProducts)
//   displayProducts(products);
});

function displayProducts(products) {
  userpage.innerHTML = '';
  let buttonCard = document.createElement('div');
  buttonCard.className = 'card mt-4 bg-info';

  let userName = document.getElementById('name');
  let userHeader = document.createElement('h4');
  userHeader.className = 'text-white text-center';
  userHeader.textContent = userName.value;
  userName.value = '';
  buttonCard.appendChild(userHeader);

  let button = document.createElement('div');
  button.className = 'd-flex justify-content-between p-4';
  button.innerHTML = `<span class='btn btn-danger text-white'>
<a href="./main.html"><i class="fa-solid fa-arrow-left"></i></a>
  </span>
  <span class='btn btn-primary text-white' id='cart-list-page' onclick='displayCart()'>Cart Page</span>`;
  buttonCard.appendChild(button);

  let searchInput = document.createElement('input');
  searchInput.className = "form-control me-2 w-25";
  searchInput.type = "search";
  searchInput.placeholder = "Search";
  searchInput.setAttribute('aria-label', 'Search');
  searchInput.id = 'searchTerm';
  buttonCard.appendChild(searchInput);

  let mainDiv = document.createElement('div');
  mainDiv.className = 'row mt-4 ';

  let col1 = document.createElement('div');
  col1.className = 'col-lg-6 border bg-white';
  let col1card = document.createElement('div');
  // col1card.className = 'card border border-1 border-secondary';
  let col1Text = document.createElement('p');
  col1Text.className='text-center fs-4'
  col1Text.innerText = 'Product List';

  col1card.appendChild(col1Text);
  col1.appendChild(col1card);
  mainDiv.appendChild(col1);

  let col2 = document.createElement('div');
  col2.className = 'col-lg-6 border bg-white';
  col2card = document.createElement('div'); 
  // col2card.className = ' border border-1 border-secondary ';
  let col2Text = document.createElement('p');
  col2Text.className='text-center fs-4'
  col2Text.innerText = 'Cart';

  col2.appendChild(col2Text);
  col2.appendChild(col2card);
  mainDiv.appendChild(col2);

  products.forEach((e) => {
      let productDiv = document.createElement('div');
      productDiv.className = 'border p-2 ';
      productDiv.innerHTML = `<div class='d-flex justify-content-between p-2 fw-bold fs-4'>${e.name} 
                              <button class='btn btn-outline-warning btn-sm ms-2' onclick='addToCart(${e.id})'>Add</button></div>`;
      col1card.appendChild(productDiv);
  });

  buttonCard.appendChild(mainDiv);
  userpage.appendChild(buttonCard);
  displayCart();
}

function addToCart(productId) {
        console.log(productId)
        let productToAdd = list.find(product => product.id == productId);
        if (productToAdd) {
          cart.push(productToAdd);
          displayCart();
        } else {
          console.error('Product not found');
        }
      }
      

function displayCart() {
  col2card.innerHTML = ''; 

  cart.forEach(product => {
      let productDiv2 = document.createElement('div');
      productDiv2.className = 'border p-2 mb-2';
      productDiv2.innerHTML = `<div class='d-flex justify-content-between p-2 fw-bold fs-4'>${product.name}
                  <button class='btn btn-outline-danger btn-sm ms-2' onclick='removeFromCart(${product.id})'>Remove</button>
              </div>`;
      col2card.appendChild(productDiv2);
  });
}

function removeFromCart(productId) {
  let index = cart.findIndex(product => product.id == productId);
  if (index !== -1) {
      cart.splice(index, 1);
      displayCart();
  }
}
function displayCheckout(){
  cartpage.style.display = 'block';
  userpage.style.display = 'none';

  let checkoutDiv = document.getElementById('checkout-products');
  checkoutDiv.innerHTML = '';

  cart.forEach((product)=>{
    let productDiv = document.createElement('div');
    productDiv.className = 'border p-2 mb-2';
    productDiv.innerHTML = `<div class='d-flex justify-content-between p-2 fw-bold fs-4'>${product.product} - $${product.price}</div>`;
    checkoutDiv.appendChild(productDiv);
  })
}
