
const products = [
    { name: "Classic Beef Burger", price: 199 },
    { name: "Cheese Burst Burger", price: 249 },
    { name: "BBQ Chicken Burger", price: 229 },
    { name: "Double Patty Monster", price: 299 },
    { name: "Veg Supreme", price: 179 },
    { name: "Spicy Mexican Burger", price: 219 },
    { name: "Loaded Fries", price: 149 },
    { name: "Cheese Fries", price: 129 },
    { name: "Chicken Nuggets", price: 169 },
    { name: "Peri Peri Wings", price: 239 },
    { name: "Crispy Zinger", price: 259 },
    { name: "Paneer Tikka Burger", price: 209 }
    
   
];

let cart = 0;
let img = 0;

const list = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");

products.forEach(item => {
    img=img+1;
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="img/img${img}.png" alt="burger">
        <h3>${item.name}</h3>
        <p>Delicious & freshly made</p>
        <div class="price">₹${item.price}</div>
        <button>Add to Cart</button>
    `;

    const btn = card.querySelector("button");
    btn.onclick = () => {
        cart++;
        cartCount.textContent = cart;
        card.classList.add("added");
        setTimeout(() => card.classList.remove("added"), 400);
    };

    list.appendChild(card);
});