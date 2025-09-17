import { ipsForm } from "../models/launchpad.model.js";

export const submitForm = async (req, res) => {
	try {
		const formData = req.body;

		if (req.files?.document) {
			formData.documentURL = req.files.document[0].path;
		}
		if (req.files?.paymentScreenshot) {
			formData.paymentScreenshotURL = req.files.paymentScreenshot[0].path;
		}

		const newFormEntry = new ipsForm(formData);
		await newFormEntry.save();

		res.status(201).json({
			message: "Form submitted successfully!",
			data: newFormEntry,
		});
	} catch (error) {
		console.error("Error saving form data:", error);
		res.status(500).json({
			message: "An error occurred while submitting the form.",
			error,
		});
	}
};

export const checkEmail = async (req, res) => {
	const { email } = req.body;
	const record = await ipsForm.findOne({ email });
	if (record) {
		return res.json({ message: "Record found", record });
	}
	return res.json({ message: "Record not found" });
};