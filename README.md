# KTRefill - eSIM & Mobile Top-up Service

A modern, responsive web application for purchasing eSIM cards and mobile top-ups with support for multiple countries and currencies.

## 🌟 Features

### Core Functionality
- **eSIM Purchase**: Buy digital SIM cards for international travel
- **Mobile Top-up**: Recharge mobile accounts in multiple countries
- **Multi-Currency Support**: USD and NGN (Nigerian Naira) payments
- **Country Selection**: 50+ countries supported with flags and dialing codes
- **Shopping Cart**: Persistent cart with localStorage
- **User Authentication**: Login/signup system with form validation

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean design with Tailwind CSS and custom animations
- **Interactive Forms**: Real-time validation and feedback
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
kt/
├── index.html          # Main landing page
├── auth.html           # Authentication page (login/signup)
├── cart.html           # Shopping cart page
├── styles.css          # Custom CSS styles and animations
├── script.js           # Main JavaScript functionality
├── auth.js             # Authentication page logic
├── cart.js             # Cart page functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. **Clone or Download** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Start browsing** - no build process required!

### Usage
1. **Select Service**: Choose between eSIM or Mobile Top-up
2. **Choose Country**: Pick your destination from the dropdown
3. **Select Amount**: Use preset buttons or enter custom amount
4. **Add to Cart**: Items are saved automatically
5. **Sign In**: Required for checkout (demo authentication)
6. **Checkout**: Complete your purchase

## 🎨 Design System

### Colors
- **Primary**: Brand purple (#8B5CF6)
- **Secondary**: Accent gold (#F59E0B)
- **Background**: Dark theme (#0F0F23)
- **Text**: White and gray variants

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: Regular, Medium, Semi-bold, Bold

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Custom styled inputs with focus states
- **Cards**: Glassmorphism effect with subtle borders
- **Navigation**: Responsive navbar with mobile menu

## 🛠️ Technologies Used

### Frontend Framework
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family

### JavaScript
- **Vanilla JS**: No frameworks - pure JavaScript
- **localStorage**: Client-side data persistence
- **DOM Manipulation**: Dynamic content updates

### Development Tools
- **VS Code**: Recommended code editor
- **Live Server**: For local development (optional)
- **Browser DevTools**: For debugging and testing

## 📱 Supported Countries

The application supports 50+ countries including:
- United States, United Kingdom, Canada
- European countries (Germany, France, Italy, Spain, etc.)
- Asian countries (Japan, South Korea, Singapore, etc.)
- African countries (Nigeria, South Africa, Kenya, etc.)
- And many more...

Each country includes:
- Country flag emoji
- International dialing code
- Currency preference (USD/NGN)

## 💳 Payment & Checkout

### Current Implementation
- **Demo Mode**: Simulated checkout process
- **Cart Persistence**: Items saved in browser storage
- **Authentication Required**: Must sign in before checkout

### Future Enhancements
- Payment gateway integration (Stripe, PayPal)
- Order confirmation emails
- Purchase history
- Refund processing

## 🔐 Authentication

### Features
- **Sign Up**: Create new account with validation
- **Sign In**: Login with existing credentials
- **Form Validation**: Real-time error checking
- **Demo Accounts**: Pre-configured test accounts

### Demo Credentials
```
Email: demo@ktrefill.com
Password: demo123
```

## 📊 Cart Management

### Features
- **Add Items**: Multiple eSIMs and top-ups
- **Remove Items**: Delete unwanted cart items
- **Price Calculation**: Automatic subtotal and total
- **Persistent Storage**: Cart survives browser refresh
- **Empty State**: Friendly message when cart is empty

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- **GitHub Pages**: Free hosting for public repos
- **Netlify**: CDN hosting with form handling
- **Vercel**: Fast deployment with preview URLs
- **Firebase Hosting**: Google's hosting platform

### Deployment Steps
1. Upload all files to your hosting provider
2. Ensure `index.html` is set as the default file
3. Test all functionality in production
4. Configure custom domain (optional)

## 🐛 Troubleshooting

### Common Issues

**Page not loading correctly**
- Clear browser cache
- Check internet connection
- Ensure all files are in the same directory

**Cart not persisting**
- Check if localStorage is enabled
- Clear browser data if corrupted
- Try incognito/private mode

**Forms not working**
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled
- Try different browser

**Styling issues**
- Check if Tailwind CDN is loading
- Verify Font Awesome icons are loading
- Test on different devices

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Clone your fork locally
3. Make changes in your preferred editor
4. Test thoroughly in multiple browsers
5. Submit a pull request

### Code Style
- Use consistent indentation (4 spaces)
- Add comments for complex logic
- Follow HTML5 semantic structure
- Use meaningful variable names

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or issues:
- Check the troubleshooting section above
- Review browser console for errors
- Test on different devices/browsers

## 🔄 Version History

### v1.0.0 (Current)
- Initial release with full eSIM and top-up functionality
- Responsive design with dark theme
- Cart system with localStorage persistence
- Authentication system
- Multi-country and multi-currency support

---

**Built with ❤️ for seamless international connectivity**