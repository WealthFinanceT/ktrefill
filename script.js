// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                    950: '#2e1065',
                },
                accent: {
                    gold: '#fbbf24',
                    orange: '#f59e0b',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        }
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });

    // Prevent body scroll when mobile menu is open
    function toggleBodyScroll(disable) {
        if (disable) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    const toggleMenuBtn = document.querySelector('.md\\:hidden');
    if (toggleMenuBtn) {
        toggleMenuBtn.addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                toggleBodyScroll(true);
            } else {
                toggleBodyScroll(false);
            }
        });
    }
});

// FAQ Toggle
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');

    content.classList.toggle('active');
    icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
}

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.add('bg-brand-950/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('bg-brand-950/95');
    }

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Country Dropdown Functionality
function toggleCountryDropdown() {
    const dropdown = document.getElementById('country-dropdown');
    const arrow = document.getElementById('dropdown-arrow');

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdown.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
    }
}

function selectCountry(country, flag, code) {
    // Update selected country display
    document.getElementById('selected-flag').src = `https://flagcdn.com/w40/${flag}.png`;
    document.getElementById('selected-country').textContent = country;
    document.getElementById('country-code').textContent = code;

    // Close dropdown
    toggleCountryDropdown();

    // Update phone placeholder based on country
    const phoneInput = document.querySelector('input[type="tel"]');
    const placeholders = {
        '+234': '801 234 5678', // Nigeria
        '+233': '24 123 4567', // Ghana
        '+254': '712 345 678', // Kenya
        '+27': '71 123 4567', // South Africa
        '+1': '(555) 123-4567', // USA/Canada
        '+44': '7700 123456', // UK
        '+91': '98765 43210', // India
        '+880': '1812 345678', // Bangladesh
        '+92': '300 1234567', // Pakistan
        '+63': '917 123 4567', // Philippines
        '+55': '11 91234 5678', // Brazil
        '+61': '412 345 678', // Australia
        '+49': '170 1234567', // Germany
        '+33': '6 12 34 56 78', // France
        '+39': '312 345 6789', // Italy
        '+34': '612 345 678', // Spain
        '+31': '6 12345678', // Netherlands
        '+32': '470 12 34 56', // Belgium
        '+41': '79 123 45 67', // Switzerland
        '+43': '699 12345678', // Austria
        '+46': '70 123 45 67', // Sweden
        '+47': '412 34 567', // Norway
        '+45': '20 12 34 56', // Denmark
        '+358': '50 123 4567', // Finland
        '+48': '512 345 678', // Poland
        '+420': '602 123 456', // Czech Republic
        '+36': '30 123 4567', // Hungary
        '+351': '912 345 678', // Portugal
        '+30': '691 234 5678', // Greece
        '+90': '532 123 45 67', // Turkey
        '+7': '912 345 67 89', // Russia
        '+380': '50 123 45 67', // Ukraine
        '+20': '10 12345678', // Egypt
        '+212': '612 345678', // Morocco
        '+216': '20 123 456', // Tunisia
        '+213': '551 23 45 67', // Algeria
        '+966': '50 123 4567', // Saudi Arabia
        '+971': '50 123 4567', // UAE
        '+972': '50 123 4567', // Israel
        '+962': '79 123 4567', // Jordan
        '+961': '71 123 456', // Lebanon
        '+66': '81 234 5678', // Thailand
        '+84': '912 345 678', // Vietnam
        '+62': '812 3456 7890', // Indonesia
        '+60': '12 345 6789', // Malaysia
        '+65': '8123 4567', // Singapore
        '+81': '90 1234 5678', // Japan
        '+82': '10 1234 5678', // South Korea
        '+86': '139 1234 5678', // China
        '+52': '55 1234 5678', // Mexico
        '+54': '11 2345 6789', // Argentina
        '+56': '9 1234 5678', // Chile
        '+57': '300 123 4567', // Colombia
        '+51': '912 345 678', // Peru
        '+58': '412 123 4567', // Venezuela
        '+593': '99 123 4567', // Ecuador
        '+591': '7123 4567', // Bolivia
        '+598': '94 123 456', // Uruguay
        '+595': '981 123 456' // Paraguay
    };

    phoneInput.placeholder = placeholders[code] || '123 456 7890';
}

// Add event listeners to country options
document.addEventListener('DOMContentLoaded', function() {
    const countryOptions = document.querySelectorAll('.country-option');
    countryOptions.forEach(option => {
        option.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            const flag = this.getAttribute('data-flag');
            const code = this.getAttribute('data-code');
            selectCountry(country, flag, code);
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('country-dropdown');
        const selector = document.querySelector('.flex.items-center.gap-3.bg-white\\/5');

        if (!selector.contains(event.target)) {
            dropdown.classList.add('hidden');
            document.getElementById('dropdown-arrow').style.transform = 'rotate(0deg)';
        }
    });
    // Amount controls and currency toggle
    const amountButtons = document.querySelectorAll('.amount-button');
    const customAmountInput = document.getElementById('custom-amount');
    const currencyNairaBtn = document.getElementById('currency-naira');
    const currencyDollarBtn = document.getElementById('currency-dollar');
    const currencySymbol = document.getElementById('currency-symbol');

    let selectedCurrency = 'NGN';
    const nairaToDollarRate = 0.0025;

    function setActiveCurrency(currency) {
        const previousCurrency = selectedCurrency;
        selectedCurrency = currency;

        if (currency === 'NGN') {
            currencyNairaBtn.classList.add('bg-accent-gold', 'text-brand-900');
            currencyNairaBtn.classList.remove('bg-white/10', 'text-white');
            currencyDollarBtn.classList.add('bg-white/10', 'text-white');
            currencyDollarBtn.classList.remove('bg-accent-gold', 'text-brand-900');
        } else {
            currencyDollarBtn.classList.add('bg-accent-gold', 'text-brand-900');
            currencyDollarBtn.classList.remove('bg-white/10', 'text-white');
            currencyNairaBtn.classList.add('bg-white/10', 'text-white');
            currencyNairaBtn.classList.remove('bg-accent-gold', 'text-brand-900');
        }

        amountButtons.forEach(btn => {
            const nairaValue = Number(btn.getAttribute('data-value-naira'));
            const value = currency === 'NGN'
                ? nairaValue
                : Math.max(0.01, Number((nairaValue * nairaToDollarRate).toFixed(2)));
            btn.textContent = currency === 'NGN'
                ? `₦${nairaValue.toLocaleString()}`
                : `$${Number(value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            btn.setAttribute('data-value', value);
        });

        currencySymbol.textContent = currency === 'NGN' ? '₦' : '$';

        if (customAmountInput.value) {
            const parsed = parseFloat(customAmountInput.value.replace(/,/g, ''));
            if (!Number.isNaN(parsed)) {
                if (previousCurrency !== currency) {
                    const converted = previousCurrency === 'NGN'
                        ? Number((parsed * nairaToDollarRate).toFixed(2))
                        : Math.round(parsed / nairaToDollarRate);
                    customAmountInput.value = currency === 'NGN' ? converted : converted.toFixed(2);
                } else {
                    customAmountInput.value = parsed;
                }
            }
        }
    }

    function selectAmount(value) {
        customAmountInput.value = value;
        amountButtons.forEach(btn => btn.classList.remove('border-accent-gold', 'text-accent-gold', 'bg-accent-gold/20'));
        const selected = Array.from(amountButtons).find(btn => btn.getAttribute('data-value') === value.toString());
        if (selected) {
            selected.classList.add('border-accent-gold', 'text-accent-gold', 'bg-accent-gold/20');
        }
    }

    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            selectAmount(value);
        });
    });

    currencyNairaBtn.addEventListener('click', () => setActiveCurrency('NGN'));
    currencyDollarBtn.addEventListener('click', () => setActiveCurrency('USD'));

    const serviceTopupBtn = document.getElementById('service-topup');
    const serviceEsimBtn = document.getElementById('service-esim');
    const topupForm = document.getElementById('topup-form');
    const esimForm = document.getElementById('esim-form');

    function setService(service) {
        if (service === 'topup') {
            topupForm.classList.remove('hidden');
            esimForm.classList.add('hidden');
            serviceTopupBtn.classList.add('bg-accent-gold', 'text-brand-900');
            serviceTopupBtn.classList.remove('bg-white/10', 'text-gray-300');
            serviceEsimBtn.classList.remove('bg-accent-gold', 'text-brand-900');
            serviceEsimBtn.classList.add('bg-white/10', 'text-gray-300');
        } else {
            topupForm.classList.add('hidden');
            esimForm.classList.remove('hidden');
            serviceEsimBtn.classList.add('bg-accent-gold', 'text-brand-900');
            serviceEsimBtn.classList.remove('bg-white/10', 'text-gray-300');
            serviceTopupBtn.classList.remove('bg-accent-gold', 'text-brand-900');
            serviceTopupBtn.classList.add('bg-white/10', 'text-gray-300');
        }
    }

    serviceTopupBtn.addEventListener('click', () => setService('topup'));
    serviceEsimBtn.addEventListener('click', () => setService('esim'));

    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(btn => btn.classList.remove('border-accent-gold', 'text-accent-gold', 'bg-accent-gold/20'));
    });

    // Cart + sign-in flow
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const cartPage = document.getElementById('cart-page');
    const cartClose = document.getElementById('cart-close');
    const cartItemsWrapper = document.getElementById('cart-items');
    const cartAuthMessage = document.getElementById('cart-auth-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    const signInBtn = document.getElementById('sign-in-button');

    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const cart = [];

    function refreshCartUI() {
        cartCount.textContent = cart.length;
        cartItemsWrapper.innerHTML = '';

        if (cart.length === 0) {
            cartItemsWrapper.innerHTML = '<p class="text-gray-400">No items in cart yet.</p>';
        } else {
            cart.forEach((item, idx) => {
                const row = document.createElement('div');
                row.className = 'bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center';
                row.innerHTML = `<div><div class="font-semibold">${item.title}</div><div class="text-xs text-gray-300">${item.details}</div></div><div class="text-accent-gold">${item.price}</div>`;
                cartItemsWrapper.appendChild(row);
            });
        }

        cartAuthMessage.textContent = isLoggedIn
            ? 'You are signed in. You can checkout now.'
            : 'Please sign in to access the cart and checkout.';
    }

    // Check login status on page load
    isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        signInBtn.textContent = 'Sign Out';
    }

    signInBtn.addEventListener('click', () => {
        if (isLoggedIn) {
            // Sign out
            isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
            signInBtn.textContent = 'Sign In';
            cartPage.classList.add('hidden');
            alert('You have been signed out.');
        } else {
            // Go to auth page
            window.location.href = 'auth.html';
        }
    });

    cartButton.addEventListener('click', () => {
        if (!isLoggedIn) {
            alert('Please sign in to access your cart.');
            window.location.href = 'auth.html';
        }
        cartPage.classList.remove('hidden');
        refreshCartUI();
    });

    cartClose.addEventListener('click', () => cartPage.classList.add('hidden'));

    checkoutBtn.addEventListener('click', () => {
        if (!isLoggedIn) {
            alert('Sign in required to checkout.');
            return;
        }
        if (cart.length === 0) {
            alert('Your cart is empty. Add eSIM to cart first.');
            return;
        }
        alert('Proceeding to checkout...');
        // Future: redirect to checkout page
    });

    document.getElementById('esim-add-cart').addEventListener('click', () => {
        const quantity = Number(document.getElementById('esim-quantity').value) || 1;
        const item = {
            title: 'T-Mobile eSIM',
            details: `Qty: ${quantity}, Country: ${document.getElementById('selected-country').textContent}`,
            price: `$${(39 * quantity).toFixed(2)}`
        };
        cart.push(item);
        refreshCartUI();
        alert('eSIM added to cart. Go to cart to continue.');
    });

    setActiveCurrency('NGN');
    setService('topup');
});
