import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail", // or use smtp
  auth: {
    user: process.env.EMAIL_USER, // your Gmail/SMTP email
    pass: process.env.EMAIL_PASS, // app password (not your real Gmail password)
  }
});
