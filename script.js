// 1. Array Array Containing 12 Product Objects
const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", price: 49.99, rating: "⭐⭐⭐⭐★", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Smart Fitness Watch", price: 79.95, rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Mechanical Gaming Keyboard", price: 59.99, rating: "⭐⭐⭐⭐★", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Ergonomic Wireless Mouse", price: 24.99, rating: "⭐⭐⭐★★", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "4K Ultra HD Action Camera", price: 119.99, rating: "⭐⭐⭐⭐★", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Designer Leather Backpack", price: 89.00, rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Stainless Steel Water Bottle", price: 19.99, rating: "⭐⭐⭐⭐★", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60" },
    { id: 8, name: "Portable Bluetooth Speaker", price: 34.99, rating: "⭐⭐⭐⭐★", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "Minimalist Coffee Maker", price: 65.50, rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1517256064527-09c53b2d0c6b?w=500&auto=format&fit=crop&q=60" },
    { id: 10, name: "Premium Ceramic Mug Set", price: 28.00, rating: "⭐⭐⭐★★", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60" },
    { id: 11, name: "Studio Microphone Kit", price: 145.00, rating: "⭐⭐⭐⭐⭐", image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=500&auto=format&fit=crop&q=60" },
    { id: 12, name: "Professional Electric Drone", price: 299.99, rating: "⭐⭐⭐⭐★", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&auto=format&fit=crop&q=60" }
];

let cartCount = 0;

// DOM Element Selectors
const productsGrid = document.getElementById('products-grid');
const cartCountDisplay = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// 2. Function to Render Products to Grid
function displayProducts(productsList) {
    productsGrid.innerHTML = ""; // Clear grid content before refreshing
    
    if(productsList.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; font-size:18px; margin-top:20px;">No products match your search.</p>`;
        return;
    }

    productsList.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div>
                <h3 class="product-title" title="${product.name}">${product.name}</h3>
                <div class="product-rating">${product.rating}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
        `;
        productsGrid.appendChild(card);
    });
}

// 3. Cart Increment Logic
function addToCart() {
    cartCount++;
    cartCountDisplay.textContent = cartCount;
}

// 4. Client-side Search / Filtering Logic
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
}

// Search Listeners
searchBtn.addEventListener('click', filterProducts);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') filterProducts();
});

// Initial Render invocation when page mounts
displayProducts(products);