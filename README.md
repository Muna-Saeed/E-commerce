This `README.md` file for my e-commerce repository. This includes sections on project description, features, technologies used, setup instructions, and more. 

# E-commerce Website

This is a full-fledged e-commerce website built with React for the frontend and Node.js with Express for the backend. MongoDB is used as the database to store product and user information.

## Features

- User Authentication (Signup and Login)
- Product Listings
- Shopping Cart
- Order History
- Image Upload for Products
- Admin Panel for Product Management

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- File Upload: Multer
- State Management: React Context API

## Setup Instructions

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/yourusername/e-commerce-website.git
cd e-commerce-website
```

### Frontend Setup

1. Navigate to the `frontend` directory.

    ```bash
    cd ../frontend
    ```

2. Install Node.js and npm (if not already installed).

    ```bash
    sudo apt update
    sudo apt upgrade
    curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

    *If you encounter a package error, run:*

    ```bash
    sudo apt-get remove nodejs libnode72
    ```

3. Install frontend dependencies.

    ```bash
    npm install
    ```

4. Create a React app (if not already created).

    ```bash
    npx create-react-app .
    ```

    *If you encounter a network issue, run:*

    ```bash
    npx create-react-app . --network-timeout 100000
    ```

5. Install React Router DOM.

    ```bash
    npm install react-router-dom
    ```

6. Start the frontend development server.

    ```bash
    npm start
    ```

    The frontend server will run on `http://localhost:3000`.

### Backend Setup

1. Navigate to the `backend` directory.

    ```bash
    cd backend
    ```

2. Install backend dependencies.

    ```bash
    npm install express jsonwebtoken mongoose multer cors
    ```

3. Create a MongoDB Atlas database and update the connection string in your `index.js` file.

4. Start the backend server.

    ```bash
    node index.js
    ```

    The backend server will run on `http://localhost:4000`.


### Admin Panel Setup

1. Navigate to the `admin` directory.

    ```bash
    cd ../admin
    ```

2. Create a new Vite project.

    ```bash
    npm create vite@latest .
    ```

    Select the following options:
    - Framework: React
    - Variant: JavaScript

3. Install dependencies.

    ```bash
    npm install
    ```

4. Start the admin panel development server.

    ```bash
    npm run dev
    ```

    The admin panel server will run on `http://localhost:5173`.

## API Endpoints

### User Authentication

- **POST** `/signup` - Register a new user
- **POST** `/login` - Login a user

### Products

- **GET** `/getallproducts` - Retrieve all products
- **POST** `/addproduct` - Add a new product (Admin)
- **POST** `/removeproduct` - Remove a product (Admin)

### Cart

- **POST** `/addtocart` - Add a product to the cart
- **POST** `/removefromcart` - Remove a product from the cart
- **POST** `/getcart` - Retrieve user's cart data

## Project Structure

```plaintext
e-commerce-website/
├── backend/
│   ├── node_modules/
│   ├── upload/
│   ├── package-lock.json
│   ├── package.json
│   ├── index.js
│   
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   
│ 
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   
├── .gitignore
├── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
```

This `README.md` file provides an overview of my project, the technologies used, setup instructions, and other relevant information to help users and developers understand and contribute to my project. 