// Auth page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    }

    // Make toggleMobileMenu globally available
    window.toggleMobileMenu = toggleMobileMenu;

    // Auth form switching
    const loginBtn = document.getElementById('auth-login');
    const signupBtn = document.getElementById('auth-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    function setAuthMode(mode) {
        if (mode === 'login') {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            loginBtn.classList.add('bg-accent-gold', 'text-brand-900');
            loginBtn.classList.remove('bg-white/10', 'text-gray-300');
            signupBtn.classList.remove('bg-accent-gold', 'text-brand-900');
            signupBtn.classList.add('bg-white/10', 'text-gray-300');
        } else {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            signupBtn.classList.add('bg-accent-gold', 'text-brand-900');
            signupBtn.classList.remove('bg-white/10', 'text-gray-300');
            loginBtn.classList.remove('bg-accent-gold', 'text-brand-900');
            loginBtn.classList.add('bg-white/10', 'text-gray-300');
        }
    }

    loginBtn.addEventListener('click', () => setAuthMode('login'));
    signupBtn.addEventListener('click', () => setAuthMode('signup'));

    // Form validation and submission
    const loginSubmit = document.getElementById('login-submit');
    const signupSubmit = document.getElementById('signup-submit');

    // Login form validation
    loginSubmit.addEventListener('click', function(e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate login
        alert('Login successful! Redirecting to dashboard...');
        // In a real app, this would make an API call and set authentication tokens
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    });

    // Signup form validation
    signupSubmit.addEventListener('click', function(e) {
        e.preventDefault();

        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const phone = document.getElementById('signup-phone').value.trim();
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const termsAccepted = document.getElementById('signup-terms').checked;

        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!termsAccepted) {
            alert('Please accept the Terms of Service and Privacy Policy');
            return;
        }

        // Simulate signup
        alert('Account created successfully! Please check your email for verification.');
        // In a real app, this would make an API call
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    });

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Social login buttons (placeholders)
    document.querySelectorAll('.bg-white\\/10').forEach(btn => {
        if (btn.textContent.includes('Google') || btn.textContent.includes('Facebook')) {
            btn.addEventListener('click', function() {
                const provider = this.textContent.trim().split(' ')[0];
                alert(`${provider} login would be implemented here`);
            });
        }
    });

    // Initialize with login form
    setAuthMode('login');

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-950/95');
        } else {
            navbar.classList.remove('bg-brand-950/95');
        }
    });

    // Cart functionality (simplified for auth page)
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');

    cartButton.addEventListener('click', () => {
        alert('Please sign in first to access your cart');
        // Could redirect to login form, but since we're already on auth page, just show message
    });

    // Update cart count if items exist (from localStorage in real app)
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    cartCount.textContent = cartItems.length;
});