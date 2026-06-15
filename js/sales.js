let products = [];

let cart = [];

let grandTotal = 0;

/* LOAD PRODUCTS */

async function loadProducts(){

const { data } =
await supabaseClient
.from("products")
.select("*");

products = data;

const select =
document.getElementById("productSelect");

data.forEach(product=>{

select.innerHTML += `

<option value="${product.id}">

${product.name}
(Stock:${product.stock})

</option>

`;

});

}

loadProducts();

/* ADD CART */

function addToCart(){

const productId =
Number(
document.getElementById(
"productSelect"
).value
);

const qty =
Number(
document.getElementById(
"qty"
).value
);

const product =
products.find(
p=>p.id===productId
);

if(!product){

alert("Select Product");

return;

}

if(qty > product.stock){

alert("Not enough stock");

return;

}

const itemTotal =
qty * product.price;

cart.push({

productId,
name:product.name,
qty,
price:product.price,
total:itemTotal

});

renderCart();

}

/* RENDER CART */

function renderCart(){

const body =
document.getElementById(
"cartBody"
);

body.innerHTML="";

grandTotal=0;

cart.forEach(item=>{

grandTotal += item.total;

body.innerHTML += `

<tr>

<td>${item.name}</td>

<td>${item.qty}</td>

<td>₹${item.price}</td>

<td>₹${item.total}</td>

</tr>

`;

});

document.getElementById(
"grandTotal"
).innerText =
"₹"+grandTotal;

}
