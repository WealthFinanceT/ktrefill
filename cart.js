// Cart page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
        
        // Prevent body scroll when menu is open
        if (!mobileMenu.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Make toggleMobileMenu globally available
    window.toggleMobileMenu = toggleMobileMenu;

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });

    // Cart functionality
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCountDisplay = document.getElementById('cart-count-display');
    const cartSummary = document.getElementById('cart-summary');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const authRequired = document.getElementById('auth-required');
    const checkoutSection = document.getElementById('checkout-section');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');

    // Check login status
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    function updateCartDisplay() {
        cartCount.textContent = cart.length;
        cartCountDisplay.textContent = `${cart.length} item${cart.length !== 1 ? 's' : ''}`;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-8">
                    <i class="fas fa-shopping-cart text-4xl text-gray-600 mb-4"></i>
                    <p class="text-gray-400">Your cart is empty</p>
                    <p class="text-sm text-gray-500 mt-2">Add some eSIMs or top-ups to get started</p>
                </div>
            `;
            cartSummary.classList.add('hidden');
            checkoutSection.classList.add('hidden');
            if (!isLoggedIn) {
                authRequired.classList.add('hidden');
            }
            return;
        }

        // Display cart items
        let itemsHtml = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const price = parseFloat(item.price.replace('$', ''));
            subtotal += price;

            itemsHtml += `
                <div class="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                            <i class="fas fa-sim-card text-accent-gold"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold text-white">${item.title}</h3>
                            <p class="text-sm text-gray-400">${item.details}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-accent-gold font-bold">${item.price}</span>
                        <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300 transition-colors">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = itemsHtml;

        // Update summary
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;
        cartSummary.classList.remove('hidden');

        // Show appropriate section based on login status
        if (!isLoggedIn) {
            authRequired.classList.remove('hidden');
            checkoutSection.classList.add('hidden');
        } else {
            authRequired.classList.add('hidden');
            checkoutSection.classList.remove('hidden');
        }
    }

    // Remove item from cart
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (!isLoggedIn) {
            alert('Please sign in to proceed with checkout.');
            window.location.href = 'auth.html';
            return;
        }

        if (cart.length === 0) {
            alert('Your cart is empty. Add some items first.');
            return;
        }

        // Simulate checkout process
        alert('Proceeding to payment...');
        // In a real app, this would redirect to a payment processor
        // For now, just clear the cart and show success
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert('Order placed successfully! You will receive a confirmation email shortly.');
    });

    // Cart button (redirects to this page, but since we're already here, maybe refresh or do nothing)
    cartButton.addEventListener('click', function() {
        // Already on cart page, maybe just refresh
        updateCartDisplay();
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-950/95');
        } else {
            navbar.classList.remove('bg-brand-950/95');
        }
    });

    // Initialize cart display
    updateCartDisplay();
});
