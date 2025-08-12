# 🏠 Airbnb Clone - React Project

A beginner-friendly clone of Airbnb's interface with basic routing and authorization, built with modern React practices.

🔗 [Live App](https://proy-airbnbclone-introreact.vercel.app/)

## ✨ Features

### 🏠 **Accommodation Management**

- **Browse Accommodations**: View a curated list of unique places to stay
- **Detailed Views**: Click on any accommodation to see full details, pricing, and location
- **Search & Filter**: Filter accommodations by city and price range
- **Responsive Grid Layout**: Beautiful card-based display that works on all devices

### 🔐 **Authentication System**

- **User Registration**: Sign up with email and password
- **User Login**: Login with form validation
- **Session Management**: Persistent login using localStorage
- **Protected Routes**: Access to accommodations and profile requires authentication
- **Profile Management**: View and manage user profile information

### 🎨 **Modern UI/UX**

- **Tailwind CSS**: Modern, utility-first styling
- **Loading States**: Smooth loading spinners and transitions
- **Navigation**: Clean navigation bar with authentication status
- **Error Handling**: User-friendly error pages and validation

### 🛣️ **Routing & Navigation**

- **React Router**: Client-side routing with nested routes
- **Route Protection**: Automatic redirects for unauthenticated users
- **404 Handling**: Custom not-found page for invalid routes
- **Dynamic Routes**: Accommodation details with dynamic IDs

## 🛠️ Technologies Used

### **Frontend Framework**

- **React 19.1.0** - Modern React with hooks and functional components
- **React Router DOM 7.6.2** - Client-side routing and navigation

### **Styling & UI**

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### **Development Tools**

- **Vite 7.0.0** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **React Hooks ESLint Plugin** - Enforce React hooks rules

### **Data Management**

- **useState & useEffect** - React hooks for state management
- **localStorage** - Client-side session storage for authentication
- **JSON API Simulation** - Mock data for accommodations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd proy-airbnbclone-introreact
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AuthLayout.jsx   # Authentication page layout
│   ├── Card.jsx         # Accommodation card component
│   ├── NavBar.jsx       # Navigation bar
│   └── Spinner.jsx      # Loading spinner
├── pages/               # Page components
│   ├── Home.jsx         # Landing page with featured accommodations
│   ├── Accommodations.jsx # All accommodations listing
│   ├── Details.jsx      # Individual accommodation details
│   ├── LogIn.jsx        # Login form
│   ├── SignUp.jsx       # Registration form
│   ├── Profile.jsx      # User profile page
│   └── NotFound.jsx     # 404 error page
├── routes/              # Routing configuration
│   ├── AppRoutes.jsx    # Main routing setup
│   └── ProtectedRoute.jsx # Route protection component
├── utils/               # Utility functions
│   └── auth.js          # Authentication utilities
└── assets/              # Static assets
```

## 🎯 Learning Objectives

This project demonstrates:

- **React Fundamentals**: Components, props, state, and lifecycle
- **Modern React**: Hooks, functional components, and best practices
- **Routing**: Client-side navigation and route protection
- **Authentication**: User registration, login, and session management
- **API Integration**: Fetching and displaying data from external sources
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Error Handling**: User-friendly error states and validation

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- Report bugs or issues
- Suggest new features
- Improve documentation
- Enhance the UI/UX

## 📄 License

This project is created for educational purposes as part of a React learning journey.

---

**Happy coding! 🚀**
