// List of products
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 20.00,
        img: "https://imgs.search.brave.com/OFuv6efB-aSjrsBzC9plcnDcFLGZadSH5xqA4O8zGPM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ncS5jb20vcGhv/dG9zLzYwMWFmNTBj/NDFkZTQ4MWQ5YjQ0/N2VlZi8zOjQvd18z/MjAsY19saW1pdC9E/aWNraWVzLXJlZ3Vs/YXItZml0LXNpeC1w/b2NrZXQtamVhbi5q/cGc",
    },
    {
        id: 2,
        name: "Product 2",
        price: 35.00,
        img: "https://imgs.search.brave.com/ZJJCKGatMclLgtPYVw2h1NBuqYNO6xBnJyu2oegkWtU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ncS5jb20vcGhv/dG9zLzY2MWZmNzRk/MTA3NzI4N2ExMmE2/YTkxOS8zOjQvd183/NDgsY19saW1pdC9s/YXllcl8yMy5qcGc",
    },
    {
        id: 3,
        name: "Product 3",
        price: 50.00,
        img: "https://imgs.search.brave.com/DFlR4xVIZizEJJS-whqXFJsE9xYnkX9WoY98aCgFAW0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFqRWNmcXdJQ0wu/anBn",
    },
    {
        id: 4,
        name: "Product 4",
        price: 10.00,
        img: "https://imgs.search.brave.com/TgfDnOydnlrIc9EhJp5kOyHHs_cnnv5omFM92o-kFN4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzF0aFRHYzh0REwu/anBn",
    }
];

// Cart to store added products
let cart = [];

// DOM elements
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const productContainer = document.getElementById("products");

// Function to render products
function renderProducts() {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productHTML = `
            <div class="product" id="product-${product.id}">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

// Function to add products to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    // Check if the product is already in the cart
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Function to update cart count and total
function updateCart() {
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(product => {
        totalItems += product.quantity;
        totalPrice += product.price * product.quantity;
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Call renderProducts on page load
renderProducts();
