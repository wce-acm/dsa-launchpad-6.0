import { ipsForm } from "../models/launchpad.model.js";

export const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // ✅ Check if email already exists
    const existing = await ipsForm.findOne({ email: formData.email });
    if (existing) {
      return res.status(400).json({
        message: "This email is already registered. Only one entry is allowed per email.",
      });
    }

    // ✅ Attach screenshot if uploaded
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

    // Handle duplicate key error from Mongo (E11000 duplicate key)
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).json({
        message: "This email is already registered. Only one entry is allowed per email.",
      });
    }

    res.status(500).json({
      message: "An error occurred while submitting the form.",
      error,
    });
  }
};

export const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const record = await ipsForm.findOne({ email });

    if (record) {
      return res.json({ exists: true, message: "Email already registered" });
    }
    return res.json({ exists: false, message: "Email available" });
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ message: "Server error while checking email" });
  }
};
