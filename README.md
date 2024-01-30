# M-Pesa API Integration

## Overview

This repository contains a simple implementation of an M-Pesa API integration using Node.js for the backend and React with Vite for the frontend. This integration allows you to seamlessly integrate M-Pesa payment functionality into your web application.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: [Download and Install npm](https://www.npmjs.com/get-npm)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/isaac-kiplangat/mpesa-api.git
   ```

   ```
   cd mpesa-api
   ```

2. Install dependencies for both the backend and frontend:

   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies in another terminal
   cd client
   npm install
   ```

3. Configure your M-Pesa API credentials:

   - Open `backend/.env` file and provide your M-Pesa API credentials.

4. Run the application:

   ```bash
   # Run the backend server
   cd server
   npm start

   # Run the frontend server in another terminal
   cd client
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to access the application.

## Usage

### Backend

- The backend server exposes API endpoints for initiating M-Pesa transactions. Refer to the API documentation for more details on the available endpoints.

### Frontend

- The frontend provides a simple interface for users to make M-Pesa payments. Customize the frontend as needed to fit your application's design and requirements.

## API Documentation

Refer to the API documentation for detailed information on the available endpoints and their usage. The documentation can be found in the `docs` in` daraja api` directory.

##### For refeence check out  this video by victor [here](https://www.youtube.com/watch?v=ojMx87Scrzc)


## License

This project is licensed under the [MIT License](LICENSE).
