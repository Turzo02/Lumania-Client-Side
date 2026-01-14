# Lumania - Minimalist Lighting E-Commerce

A modern, minimalist lighting e-commerce platform built with Next.js 16, React 19, and Tailwind CSS. Features a complete authentication system, smooth scrolling, and a curated collection of avant-garde lighting fixtures.

## 🎯 Project Description

Lumania showcases premium, architectural lighting designs with a focus on minimalist aesthetics and brutalist-inspired forms. Each piece is carefully selected to represent the pinnacle of contemporary lighting design, from gravity-defying pendants to industrial table lamps.

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Turzo02/Lumania-Client-Side.git
   cd Lumania-Client-Side
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your credentials:
   ```env
   # Authentication Credentials
   ADMIN_EMAIL=your-email@example.com
   ADMIN_PASSWORD=your-secure-password
   
   # Public variables (accessible on client side)
   NEXT_PUBLIC_ADMIN_EMAIL=your-email@example.com
   
   # Next.js Configuration
   NODE_ENV=development
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗺️ Route Summary

### Public Routes
- `/` - Homepage with featured products
- `/about` - About page with brand story
- `/items` - Product catalog/grid
- `/items/[id]` - Individual product details
- `/login` - Authentication page

### Protected Routes (Authentication Required)
- `/profile` - User profile with account management
- `/dashboard` - User dashboard (redirects to profile)

### API Routes
- `GET /api/auth/status` - Check authentication status
- `POST /api/login` - User authentication
- `POST /api/logout` - User logout

## ✨ Implemented Features

### 🔐 Authentication System
- **Complete login/logout flow** with session management
- **Protected routes** using middleware
- **Dynamic navbar** that updates based on auth state
- **Session-based authentication** with HTTP-only cookies
- **Demo credentials button** for easy testing

### 🎨 User Interface
- **Responsive design** with mobile-first approach
- **Dark theme** with zinc color palette
- **Smooth scrolling** using Lenis library
- **Loading states** and skeleton screens
- **Mobile hamburger menu** with smooth animations
- **Profile dropdown** with logout functionality

### 🛍️ Product Features
- **Product catalog** with filtering by category
- **Product detail pages** with specifications
- **Image optimization** using Next.js Image component
- **Category-based navigation** (Ceiling, Table, Wall, Floor)
- **Product ratings** and pricing display

### 🎯 Technical Features
- **Next.js 16** with App Router
- **React 19** with modern hooks
- **Tailwind CSS 4** for styling
- **Environment variable** configuration
- **Error handling** and validation
- **SEO optimization** with metadata

## 🧭 Feature Explanations

### Authentication Flow
1. **Login**: User enters credentials → API validates → Session cookie set → Redirect to profile
2. **Session Check**: Navbar fetches auth status on mount and route change
3. **Protected Routes**: Middleware checks session cookie → Redirects to login if missing
4. **Logout**: API clears session cookie → Redirect to login page

### Smooth Scrolling
- Uses **Lenis** library for buttery-smooth scroll animations
- Configured with custom easing function for natural feel
- Touch scrolling disabled for mobile performance
- Automatic cleanup on component unmount

### Responsive Design
- **Desktop**: Full navigation with profile dropdown
- **Mobile**: Hamburger menu with slide-in animation
- **Tablet**: Adaptive layout with touch-friendly controls
- **Consistent UX** across all device sizes

## 🛠️ Development Notes

### Environment Variables
- `ADMIN_EMAIL` / `ADMIN_PASSWORD`: Server-side only, for authentication
- `NEXT_PUBLIC_ADMIN_EMAIL`: Client-side, for demo button hints
- Never commit real credentials to version control

### Project Structure
```
src/
├── app/
│   ├── (public)/          # Route groups
│   ├── api/               # API routes
│   │   ├── auth/
│   │   │   └── status/
│   │   ├── login/
│   │   └── logout/
│   ├── profile/            # Protected route
│   └── items/             # Product pages
├── components/
│   └── global/            # Shared components
├── hooks/                 # Custom React hooks
└── Data/                  # Static data
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Setup
1. Set production environment variables
2. Configure domain and SSL
3. Update NEXT_PUBLIC_ADMIN_EMAIL for production

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**