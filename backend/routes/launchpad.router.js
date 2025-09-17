import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { submitForm, checkEmail } from "../controllers/launchpad.controller.js";

dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Multer Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const fullName = req.body.fullName.replace(/\s+/g, "_");
    const folder = "RSC2025/IPS/transactions";
    const fileName = `${fullName}_transaction`;

    return {
      folder,
      allowed_formats: ["jpg", "png"],
      public_id: fileName,
    };
  },
});

const upload = multer({ storage });

const router = express.Router();

// Submit form (only paymentScreenshot)
router.post(
  "/",
  upload.fields([{ name: "paymentScreenshot", maxCount: 1 }]),
  submitForm
);

// Check email
router.post("/check-email", checkEmail);

export default router;
