# Elevate Home Spaces | Premium Furniture & Home Decor

## Description

Transform your living spaces with Elevate Home Spaces. Discover our curated collections of premium furniture and stylish decor for your living room, dining area, and bedroom. Find the perfect pieces to create a cozy, elegant, and functional home that reflects your unique style. Shop now for free shipping on orders over $500!

## Technologies Used

- **Next.js 14**: A React framework for server-rendered applications.
- **I18n**: Internationalization for multi-language support.
- **Prisma**: ORM for database access.
- **MongoDB**: NoSQL database for data storage.

## Installation

To get started with Elevate Home Spaces, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/elevate-home-spaces.git
   cd elevate-home-spaces
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL="your_mongodb_connection_string"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set Up the Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Running the Application

1. **Development Mode**
   To run the application in development mode:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

2. **Production Build**
   To create a production build:

   ```bash
   npm run build
   ```

3. **Start Production Server**
   To start the production server:
   ```bash
   npm start
   ```

## Additional Commands

- **Lint the code**:

  ```bash
  npm run lint
  ```

- **Run tests**:
  ```bash
  npm test
  ```

## Contributing

We welcome contributions to Elevate Home Spaces! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
