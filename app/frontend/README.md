# AuraBeauty - Curated Skincare & Cosmetics (Frontend)

AuraBeauty is a **luxurious, visually stunning, and highly functional React single-page application (SPA)** built for a premium beauty brand.  
The app allows users to **browse curated skincare, makeup, haircare, and fragrance products**, view details, add items to a cart, and simulate checkout.

---

## 🌟 Features

- **Elegant UI & UX** designed with [Chakra UI](https://chakra-ui.com/) and a custom theme.
- **Single Page Application** built with React and React Router DOM.
- **Redux Toolkit** for centralized state management.
- **Product Catalog**:
  - Local JSON/JS data (`src/data/products.js`, `src/data/brands.js`)
  - Filtering by category & brand
  - Sorting by price, rating, or name
  - Search functionality
- **Product Detail Page**:
  - Variants (shades, sizes, volumes)
  - Stock management
  - Quantity selector
- **Shopping Cart**:
  - Add/update/remove products
  - Dynamic totals & shipping calculation
- **Checkout Flow**:
  - Shipping details
  - Payment method (simulated)
  - Order confirmation
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **React 18**
- **Redux Toolkit**
- **React Router DOM**
- **Chakra UI**
- **JavaScript (ES6+)**
- Local data (`src/data/`)

---

## 📂 Project Structure



aurabeauty-app/
├── public/ # Static public files (index.html, favicon, etc.)
├── src/
│ ├── assets/ # Logos, product images, placeholders
│ ├── components/ # Reusable UI components
│ ├── data/ # Local product & brand data
│ ├── features/ # Redux slices (cart, products, order)
│ ├── layouts/ # Shared layouts (Navbar + Footer)
│ ├── pages/ # Main pages (Home, Shop, Cart, etc.)
│ ├── styles/ # Theme & global CSS
│ ├── utils/ # Helper functions
│ ├── App.js # Routes & top-level app
│ └── index.js # React entry point
└── package.json


---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/aurabeauty-app.git
cd aurabeauty-app

2. Install Dependencies
npm install

3. Run Development Server
npm start


App runs at http://localhost:3000

4. Build for Production
npm run build


🧩 Future Enhancements

User authentication (signup/login)

Real backend integration (Node.js/Express + MongoDB/PostgreSQL)

Payment gateway (Stripe/PayPal)

Product reviews & ratings

Admin dashboard for product management

📄 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute for personal or commercial projects.


