// Products
let products = [
  {
    id: 1,
    name: "Gold Ring",
    price: 60000,
    img: "https://kinclimg5.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIPN0725R22_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-62092.png"
  },
  {
    id: 2,
    name: "Diamond necklace",
    price: 100000,
    img: "https://ratnalayajewels.com/wp-content/uploads/2023/07/DN-137-61.jpg"
  },
  {
    id: 3,
    name: "Silver Earring",
    price: 30000,
    img: "https://psjewellery.in/cdn/shop/products/1oomIQnyus0fjRYVIkSrKaXLbwxP8utpm.jpg?v=1708677368"
  },
  {
    id: 4,
    name: "Gold Necklace",
    price: 45000,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvzcjGU77ZBzIF8kd-6JFxK6WVAAhDwFbx0YB8JqKkmnEH3l5tYnd8N9uyej0uoWQerKm54Yh7xL_UrvoOIP9d3jrcJzrBlQuooI1r9uc"
  },
  {
    id: 5,
    name: "Vanki",
    price: 40000,
    img: "https://i.pinimg.com/736x/b9/d3/ee/b9d3ee0fc021b35f8a53d09152f84d38.jpg"
  },
  {
    id: 6,
    name: "Bangles",
    price: 150000,
    img: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/469/1743592673_4fce07908496101bdc86.jpg"
  },
];

let cart = [];
let wishlist = [];
let discountPercent = 0;

// Search Products
function searchProducts() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let productCards = document.querySelectorAll(".product");

  productCards.forEach((card, index) => {
    let name = products[index].name.toLowerCase();

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ================= PRODUCTS =================
function displayProducts() {
  let productCards = document.querySelectorAll(".product");

  productCards.forEach((card, index) => {
    let p = products[index];

    let img = card.querySelector("img");
    let name = card.querySelector("h3");
    let price = card.querySelector("p");
    let cartBtn = card.querySelector(".cartBtn");
    let wishBtn = card.querySelector(".wishBtn");
    let buyBtn = card.querySelector(".buyBtn");

    img.src = p.img;
    img.setAttribute("data-name", p.name);

    name.innerText = p.name;
    price.innerText = "₹" + p.price;

    cartBtn.onclick = () => addToCart(p.id);
    buyBtn.onclick = () => buyNow(p.id);
    wishBtn.onclick = () => addToWishlist(p.id);
  });
}

// ================= EVENT =================
document.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    let name = e.target.getAttribute("data-name");
    if (name) {
      alert("You clicked on " + name);
    }
  }
});

// ================= CART =================
function addToCart(id) {
  let product = products.find(p => p.id === id);
  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  displayCart();
}

function displayCart() {
  let container = document.getElementById("cart");
  container.innerHTML = "";

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
      Qty: <input type="number" value="${item.qty}" min="1">
      <button>Remove</button>
    `;

    let input = div.querySelector("input");
    input.onchange = (e) => {
      cart[index].qty = Number(e.target.value);
      displayCart();
    };

    let removeBtn = div.querySelector("button");
    removeBtn.onclick = () => removeItem(index);

    container.appendChild(div);
  });

  calculateBill();
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

// buy now
function buyNow(id) {
  let product = products.find(p => p.id === id);

  alert("Proceeding to buy " + product.name + " for ₹" + product.price);
}

// ================= WISHLIST =================
function addToWishlist(id) {
  let product = products.find(p => p.id === id);

  if (!wishlist.find(item => item.id === id)) {
    wishlist.push(product);
  }

  displayWishlist();
}

function displayWishlist() {
  let container = document.getElementById("wishlist");
  container.innerHTML = "";

  wishlist.forEach((item, index) => {
    let div = document.createElement("div");

    div.innerHTML = `
      <h4>${item.name}</h4>
      <button>Remove</button>
    `;

    div.querySelector("button").onclick = () => {
      wishlist.splice(index, 1);
      displayWishlist();
    };

    container.appendChild(div);
  });
}

// ================= BILL =================
function calculateBill() {
  let subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  let discount = subtotal * discountPercent / 100;
  let afterDiscount = subtotal - discount;
  let gst = afterDiscount * 0.18;
  let total = afterDiscount + gst;

  document.getElementById("bill").innerText =
    `Subtotal: ₹${subtotal} | Discount: ₹${discount.toFixed(2)} | GST: ₹${gst.toFixed(2)} | Total: ₹${total.toFixed(2)}`;

  document.getElementById("finalBill").innerText =
    "Your Total Bill is ₹" + total.toFixed(2);
}

// ================= DISCOUNT =================
function applyDiscount() {
  let input = document.getElementById("discount").value;
  discountPercent = Number(input) || 0;
  calculateBill();
}

// ================= INIT =================
displayProducts();
displayCart();
displayWishlist();