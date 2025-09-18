let newArrivals = [
  {
    name: "Beige Floral Dress",
    price: "4,999",
    image: "./images/NewArrivals/beigefloraldress.avif",
  },
  {
    name: "Polo Shirt",
    price: "2,199",
    image: "./images/NewArrivals/poloshirts.avif",
  },
  {
    name: "Button up Shirt",
    price: "3,999",
    image: "./images/NewArrivals/Checkeredbuttonupshirt.avif",
  },
  {
    name: "Blue Denim Jeans",
    price: "3,499",
    image: "./images/NewArrivals/denimjeans.avif",
  },
  {
    name: "Dinasour Hoodie",
    price: "2,799",
    image: "./images/NewArrivals/dinasourhoodie.avif",
  },
  {
    name: "Floral dress",
    price: "5,499",
    image: "./images/NewArrivals/greyandwhitefloraldress.avif",
  },
  {
    name: "Checkered Shirt",
    price: "5,499",
    image: "./images/NewArrivals/blackandgreycheckereddressshirt.avif",
  },
  {
    name: "White Crew Tee",
    price: "3,199",
    image: "./images/NewArrivals/whitecrewlongnecksleeveshirt.avif",
  },
];
let mostLoved = [
  {
    name: "Black and White SKirt",
    price: "2,499",
    image: "./images/Bestsellers/Blackandwhite skirt.avif",
  },
  {
    name: "Bottom up Shirt",
    price: "1,999",
    image: "./images/Bestsellers/bluebottomupshirt.avif",
  },
  {
    name: "Brown and Orange Maxi",
    price: "4,499",
    image: "./images/Bestsellers/BrownandorangefloralMaxi.avif",
  },
  {
    name: "Floral Maxi",
    price: "4,299",
    image: "./images/Bestsellers/Floral Maxi.avif",
  },
  {
    name: "Checkered Button Up Shirt",
    price: "2,199",
    image: "./images/NewArrivals/Checkeredbuttonupshirt.avif",
  },
  {
    name: "Grey Knit Sweater",
    price: "5,499",
    image: "./images/Bestsellers/greyknitsweater.avif",
  },
  {
    name: "V Neck Shirt",
    price: "1,899",
    image: "./images/Bestsellers/Vneckshirt.avif",
  },
  {
    name: "Blue Denim Jacket",
    price: "5,999",
    image: "./images/Bestsellers/bluedenumbottomupjacket.avif",
  },
  {
    name: "White Crew Tee",
    price: "2,099",
    image: "./images/Bestsellers/premium_photo-1747932477534-535af1fac91a.avif",
  },
  {
    name: "Plaid Bottom Up Shirt",
    price: "2,499",
    image: "./images/Bestsellers/redandwhiteplaidbottupupshirt.avif",
  },
  {
    name: "Long Sleeve Dress",
    price: "4,999",
    image: "./images/Bestsellers/Redlongsleeve dress.avif",
  },
];
function renderProducts(products, productID) {
  let container = document.getElementById(productID);
  let html = "";
  products.forEach(function (item) {
    html += ` <div class="arrivalbox">
            <img src="${item.image}" alt="" />
            <div class="arrivalname">${item.name}</div>
            <div class="price">${item.price}</div>
            <button class="addcart" onclick="addtobag('${item.name}', '${item.price}', '${item.image}')">Add to Cart</button>
        </div>`;
  });
  container.innerHTML = html;
}
renderProducts(newArrivals, "NewArrivals");
renderProducts(mostLoved, "BestSellers");

let cartItems =JSON.parse(localStorage.getItem("item")) || [];
displaycount();

function addtobag(name,price,image) {
  let product = { name, price, image }; 
  cartItems.push(product);
  localStorage.setItem('item',JSON.stringify(cartItems));
  
  displaycount();
}
function displaycount() {
  let count = document.querySelector("#count");
  if (cartItems.length > 0) {
    count.style.visibility = "visible";
    count.innerText = cartItems.length;
  }
  else{
    count.style.visibility = 'hidden' ;
  }
}
