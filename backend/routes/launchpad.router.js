import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { submitForm, checkEmail } from "../controllers/launchpad.controller.js";
dotenv.config();

// Cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});

// Multer Cloudinary storage
const storage = new CloudinaryStorage({
	cloudinary,
	params: async (req, file) => {
		const fullName = req.body.fullName.replace(/\s+/g, '_');

		const folder = file.fieldname === "document" ? "RSC2025/IPS/documents" : "RSC2025/IPS/transactions";
		const fileName = file.fieldname === "document" ? `${fullName}_document` : `${fullName}_transaction`;

		return {
			folder,
			allowed_formats: ["jpg", "png", "pdf"],
			public_id: fileName,
		};
	},
});

const upload = multer({ storage });

const router = express.Router();

// Route for form submission with file upload
router.post(
	"/",
	upload.fields([
		{ name: "document", maxCount: 1 },
		{ name: "paymentScreenshot", maxCount: 1 },
	]),
	submitForm
);

// Check duplicate record
router.post("/check-email", checkEmail);

export default router;
