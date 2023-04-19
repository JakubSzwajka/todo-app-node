# Todo App

A simple Todo app built with Node.js, Express, TypeScript, and Prisma for learning purposes.

## Features

- Create, read, update, and delete Todo items
- RESTful API with Express.js
- PostgreSQL database
- Prisma ORM for database interaction
- TypeScript for better type safety and developer experience

## Getting Started

### Prerequisites

- Node.js (v14+)
- PostgreSQL (v12+)
- npm (v6+)

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/todo.git
```

2. Change into the project directory:

```
cd todo

```

3. Install the dependencies:

```
npm install
```

4. Set up your environment variables:

Copy the `.env.example` file to a new file named `.env` and replace the placeholders with your actual values:

```
cp .env.example .env

```

5. Run the development server:
   
```
npm run start
```

Your Todo app is now running on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | /api/todos       | Get all Todo items  |
| POST   | /api/todos       | Create a new Todo   |
| GET    | /api/todos/:id   | Get a specific Todo |
| PUT    | /api/todos/:id   | Update a Todo       |
| DELETE | /api/todos/:id   | Delete a Todo       |

## License

This project is licensed under the ISC License.

## Author

Jakub Szwajka - szwajkajakub@gmail.com