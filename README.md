# Delivaroo-clone

# Delivaroo Application Setup Guide

This guide will walk you through the steps to set up the Delivaroo application, which consists of two folders: `delivaroo-be` for the backend (Node.js) and `delivaroo-fe` for the frontend (React).

## Backend Setup

### Prerequisites

Before you begin, make sure you have the following installed on your system:

1. Node.js (version 14 or higher)
2. npm (Node Package Manager, should be installed with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Binuraowin/Delivaroo-clone.git
cd delivaroo-be
```

2. Install the dependencies:

```bash
npm install
```

### Configuration

To configure the backend, you need to set up the environment variables and the `connection.js` file.

#### Environment Variables

Please request the required environment variables by sending an email to `binura.owin1@gmail.com`. Once you receive the necessary configurations, follow the steps below:

1. Create a new file named `.env` in the root of the `delivaroo-be` folder.

2. Open the `.env` file and add the received configurations in the following format:

```
ENV_VARIABLE_NAME=VALUE
```

Replace `ENV_VARIABLE_NAME` with the actual name of the environment variable and `VALUE` with its corresponding value.

#### Connection Configuration

1. Inside the `delivaroo-be` folder, navigate to the `database` directory.

2. Locate the `connection.js` file and open it with a text editor.

3. Update the connection configurations as per the received details.

```javascript
// Update the connection configuration below
const connectionConfig = {
  host: 'YOUR_HOST',
  port: 'YOUR_PORT',
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'YOUR_DATABASE',
};

module.exports = connectionConfig;
```

Replace `YOUR_HOST`, `YOUR_PORT`, `YOUR_USERNAME`, `YOUR_PASSWORD`, and `YOUR_DATABASE` with the respective values provided in the email.

### Running the Backend

To start the backend server, use the following command:

```bash
npm start
```

The backend server will now be running at the specified host and port(default 3003), ready to handle incoming requests from the frontend.

## Frontend Setup

### Prerequisites

Before you begin, ensure you have the following installed:

1. Node.js (version 14 or higher)
2. npm (Node Package Manager, should be installed with Node.js)

### Installation

1. Navigate to the `delivaroo-fe` folder:

```bash
cd delivaroo-fe
```

2. Install the frontend dependencies:

```bash
npm install
```

### Configuration

The frontend of the Delivaroo application does not require any separate configuration. It will communicate with the backend once it's up and running.

### Running the Frontend

To start the frontend development server, use the following command:

```bash
npm run start
```

The React development server will start, and you can access the Delivaroo application by visiting the provided URL in your web browser.

## Conclusion

Congratulations! You have successfully set up the Delivaroo application with its backend and frontend components. The application is now ready for development and testing.

If you encounter any issues during the setup process, feel free to contact me at `binura.owin1@gmail.com` for further assistance. Happy coding!