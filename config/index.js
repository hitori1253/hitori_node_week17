import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const config = {
    port: process.env.PORT || 3000,
    // Add other configuration variables as needed
};

export default config;