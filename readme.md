# 🛒 E-Commerce Web Application

Developed by **Divyanshu Mahajan**  
GitHub: [Divyanshu-Mahajan](https://github.com/Divyanshu-Mahajan)

A responsive and full-featured e-commerce platform built using the MERN stack. It supports secure user authentication, product browsing, cart and checkout functionality, order management.

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure user login, signup, and protected routes using tokens.
- 🛍️ **Product Management** – Add, update, delete, and list products (admin & user roles).
- 🛒 **Cart & Checkout** – Fully functional cart with quantity control and price calculation.
- 📦 **Order System** – Order placement with confirmation and basic order history.
- 📧 **Email Notifications** – Order confirmation and registration emails using Nodemailer.
- 🎨 **Modern UI** – Responsive design using Material UI with animations from Lottie and Framer Motion.
- 📡 **RESTful APIs** – Built with Express.js and connected to MongoDB via Mongoose.

---

## 🛠️ Tech Stack

### **Frontend**
- React
- Redux Toolkit
- React Router DOM
- Material UI (MUI)
- Framer Motion
- Lottie
- React Hook Form
- React Toastify

### **Backend**
- Node.js
- Express.js
- Mongoose
- dotenv
- bcryptjs
- JWT (JSON Web Token)
- Nodemailer

### **Database**
- MongoDB

### **Tools / Libraries**
- Axios
- Postman (for API testing)
- Git & GitHub
- Visual Studio Code

---


# **Project Setup**

### Prerequisites
- Node.js ( version v21.1.0 or later )
- MongoDB installed and running locally

### Clone the project

```bash
  git clone https://github.com/Divyanshu-Mahajan/ecommerce.git
```

### Navigate to the project directory

```bash
  cd ecommerce
```

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for both frontend and backend simultaneously, use split terminals.

Install frontend dependencies
```bash
cd frontend
npm install
```

Install backend dependencies

```bash
cd backend
npm install
```


### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values
```bash
# Database connection string
MONGO_URI="mongodb://localhost:27017/your-database-name"

# Frontend URL (adjust if needed)
ORIGIN="http://localhost:3000"

# Email credentials for sending password resets and OTPs
EMAIL="your-email@example.com"
PASSWORD="your-email-password"

# Token and cookie expiration settings
LOGIN_TOKEN_EXPIRATION="30d"  # Days
OTP_EXPIRATION_TIME="120000"  # Milliseconds
PASSWORD_RESET_TOKEN_EXPIRATION="2m"  # Minutes
COOKIE_EXPIRATION_DAYS="30"    # Days

# Secret key for jwt security
SECRET_KEY="your-secret-key"

# Environment (production/development)
PRODUCTION="false" # Initially set to false for development
```

**Frontend**
- Create a `.env` file in the `frontend` directory
- Add the following variable:
```bash
# Backend URL (adjust if needed)
REACT_APP_BASE_URL="http://localhost:8000" 
```

**Important**
- Replace all placeholders (e.g., your_database_name, your_email) with your actual values.
- Exclude the `.env` file from version control to protect sensitive information.

### Data seeding
- **Get started quickly with pre-populated data**: Populate your database with sample users, products, reviews, and carts, enabling you to test functionalities without manual data entry.

**Steps**:
- Open a new terminal window.
- Navigate to the `backend` directory: `cd backend`
- Run the seeding script: `npm run seed` ( This script executes the `seed.js` file within the `seed` subdirectory equivalent to running `node seed/seed.js` )
### Running Development Servers

**Important:**

- **Separate terminals**: Run the commands in separate terminal windows or use `split terminal` to avoid conflicts.
- **Nodemon required**: Ensure you have `nodemon` installed globally to run the backend development servers using `npm run dev`. You can install it globally using `npm install -g nodemon`.

#### Start the backend server
- Navigate to the `backend` directory: `cd backend`
- Start the server: `npm run dev` (or npm start)
- You should see a message indicating the server is running, usually on port 8000.
     
#### Start the frontend server:
- Navigate to the `frontend` directory: `cd frontend`
- Start the server: `npm start`
- You should see a message indicating the server is running, usually on port 3000.

### Login with demo account (Optional)
- After successfully seeding the database, you can now explore the application's functionalities using pre-populated sample data.
- here are the `login credentials`
```bash
  email: demo@gmail.com
  pass: helloWorld@123
```

**Please Note**: While the demo account provides a convenient way to explore many features, it has some limitations:
    - **Password Reset and OTP Verification**: Due to security reasons, the demo account uses a non-real email address. Therefore, password reset and OTP verification functionalities are not available for this account.

    **What this means**:
    - You cannot request a password reset or receive verification codes on the demo email address.
    - To test password reset and OTP verification flows, you need to create a genuine account with a valid email address.

    **What to do?**
    - If you're primarily interested in exploring other functionalities like wishlist, cart, and order history, the demo account is sufficient.
    - To test password reset and OTP verification, create a personal account with a valid email address.

### Accessing the Application
Once both servers are running, you can access them at the following URL's:
- Backend: http://localhost:8000
- Frontend: http://localhost:3000

