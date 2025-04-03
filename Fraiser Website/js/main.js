// Cart functionality
const cartButton = document.getElementById('cart-button');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCartButton = document.getElementById('close-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

// Toggle cart sidebar
cartButton.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !cartButton.contains(e.target)) {
        cartSidebar.classList.remove('open');
    }
});

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>$${item.price}</p>
            </div>
            <button class="remove-item" data-index="${index}">×</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove item from cart
cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCart();
    }
});

// Add to cart function
function addToCart(photo) {
    cart.push(photo);
    updateCart();
    cartSidebar.classList.add('open');
}

// Photo hover effect
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Initialize cart
updateCart(); 