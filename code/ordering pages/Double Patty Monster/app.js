
let qty = 1;
const pricePerItem = 199;

function changeQty(value) {
    qty += value;
    if (qty < 1) qty = 1;
    document.getElementById("qty").innerText = qty;
    document.getElementById("price").innerText = pricePerItem * qty;
}

function addToCart() {
    alert("Item added to cart!");
}