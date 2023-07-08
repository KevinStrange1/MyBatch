# MyBatch

MyBatch is a web application that helps users manage recipes and provides a convenient way to search and organize their favorite recipes. This application is built with a frontend using React.js and a backend using Express.js and Node.js. The data is stored in a database.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate into the project folder and install dependencies in both the frontend and backend directories:

   ```bash
   cd MyBatch/client
   npm install
   ```

   ```bash
   cd MyBatch/server
   npm install
   ```

3. Start both the frontend and backend servers. Open two terminal windows, one for each:

   ```bash
   # Terminal window 1
   cd MyBatch/client
   npm start
   ```

   ```bash
   # Terminal window 2
   cd MyBatch/server
   npm start
   ```

   The frontend server will run on port 3000, and the backend server will run on port 3001.

4. To populate the database with data, you can use Postman or an equivalent tool to send data to the "/our-recipes" endpoint. The data can be found in the "server/models/recipes.json" file.

## Tech Stack

The core technologies used in this project are:

- Frontend:
  - React.js
- Backend:
  - Express.js
  - Node.js
- Database:
  - [Specify your database technology]

## Usage

Once the server is running and the database is populated with data, you can use the MyBatch website. Visit http://localhost:3000 in your browser to access the application. Explore the features, such as searching for recipes and organizing them.

## Running Tests

To run tests, you have two options:

1. Backend tests: Use the following command to run tests for the backend:

   ```bash
   cd MyBatch/server
   npm test
   ```

2. Full-stack tests: Use Cypress to run the full-stack tests. Execute the following command to open Cypress:

   ```bash
   npx cypress open
   ```

   This will open the Cypress Test Runner, where you can run the full-stack tests.

---
