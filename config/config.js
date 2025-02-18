/* eslint-disable no-undef */
import dotenv from "dotenv";

dotenv.config(); 

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST ,
    dialect: process.env.DB_DIALECT, 
    port: process.env.DB_PORT,
    pro_port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET,
    token_expiration:'48h',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST ,
    dialect: process.env.DB_DIALECT, 
    port: process.env.DB_PORT,
    pro_port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET,
    token_expiration:'48h',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST ,
    dialect: process.env.DB_DIALECT, 
    port: process.env.DB_PORT,
    pro_port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET,
    token_expiration:'48h',
  },
};

export default config;
