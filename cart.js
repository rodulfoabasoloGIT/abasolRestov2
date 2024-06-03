const product = [
  {
    id: 0,
    image: "/images/image1.jpg",
    title: "first phone",
    price: 120.22,
  },
  {
    id: 1,
    image: "/images/image2.jpg",
    title: "second phone",
    price: 125.44,
  },
  {
    id: 2,
    image: "/images/image3.jpg",
    title: "third phone",
    price: 130.35,
  },
  {
    id: 3,
    image: "/images/image4.jpg",
    title: "third phone",
    price: 135.23,
  },
  {
    id: 4,
    image: "/images/image5.jpg",
    title: "second phone",
    price: 140.24,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.querySelector(".testButton").disabled = true;

let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    const { image, title, price } = item;
    return `<div class="box">
        <div class="img-box">
          <img class="images" src=${image}></img>
        </div>
  
        <div class="bottom">
          <p>${title}</p>
          <h2>$${price}</h2>
          <button onclick="addtocart(${i++})">Add to cart</button>
        </div>
      </div>`;
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart() {
  let j = 0;
  let total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length === 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is Empty";
    document.querySelector(".total").textContent = `$0.00`;
    document.querySelector(".testButton").disabled = true;
  } else {
    document.querySelector(".testButton").disabled = false;
    document.getElementById("cartItem").innerHTML = cart
      .map((items, index) => {
        var { image, title, price } = items;
        total += price;
        return `<div class="cart-item">
              <div class="img-box">
                <img class="images" src=${image}></img>
              </div>
              <div class="details">
                <p>${title}</p>
                <h2>$ ${price}</h2>
                <h2>Display Cart</h2>
                <button onclick='delElement(${index})'>Remove</button>
              </div>
            </div>`;
      })
      .join("");
    document.querySelector(".total").textContent = `$${total.toFixed(2)}`;
  }
}

function addtocart(a) {
  console.log(a);
}

document.querySelector(".container").innerHTML = `
  <button onclick="addtocart(${i++})">Increment</button>
  `;
