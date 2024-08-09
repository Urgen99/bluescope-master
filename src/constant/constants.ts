import * as dotenv from "dotenv";

dotenv.config();

// TOKENS & COOKIES
const JWT_SECRET = process.env.JWT_SECRET!;
const COOKIE_EXPIRE: number = parseInt(process.env.COOKIE_EXPIRE!);
const JWT_EXPIRE: string = process.env.JWT_EXPIRE!;
const OTP_EXPIRE: number = parseInt(process.env.OTP_EXPIRE!);

// DATABASE
const DATABASE = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!) || 3306,
  username: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME,
};

// BASE URLS
const BASEURL = process.env.BASEURL;

export { BASEURL, COOKIE_EXPIRE, DATABASE, JWT_EXPIRE, JWT_SECRET, OTP_EXPIRE };
