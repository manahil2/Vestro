let cartItems = JSON.parse(localStorage.getItem("item")) || [];
const cartContainer = document.querySelector(".cart-container");
const clearBtn = document.getElementById("clearCart");

function renderCart() {
  cartContainer.innerHTML = "";
  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span class="remove-btn" onclick="removeItem(${index})">&times;</span>
      <img src="${item.image}" alt="">
      <h3>${item.name}</h3>
      <p>PKR ${item.price}</p>
    `;
    cartContainer.appendChild(div);
  });

  displaycount();
  updateSummary();
}

window.onload = function() {
  renderCart();

  // Clear cart
  clearBtn.addEventListener("click", () => {
    cartItems = [];
    localStorage.removeItem("item");
    renderCart();
  });
};

// Add item to cart
function addtobag(name, price, image) {
  const product = { name, price, image };
  cartItems.push(product);
  localStorage.setItem('item', JSON.stringify(cartItems));
  renderCart();
}

// Remove single item
function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem('item', JSON.stringify(cartItems));
  renderCart();
}

// Display cart count
function displaycount() {
  const count = document.querySelector("#count");
  if (cartItems.length > 0) {
    count.style.visibility = "visible";
    count.innerText = cartItems.length;
  } else {
    count.style.visibility = "hidden";
  }
}

// Update total items and price
function updateSummary() {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + Number(item.price.replace(/,/g, ''));
  }, 0);

  document.getElementById('totalItems').innerText = totalItems;
  document.getElementById('totalPrice').innerText = totalPrice.toLocaleString();
}
