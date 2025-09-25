// controllers/launchpad.controller.js
import { ipsForm } from "../models/launchpad.model.js";
import { transporter } from "../utils/mailer.js";

// Submit form
export const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // Check if email already exists
    const existing = await ipsForm.findOne({ email: formData.email });
    if (existing) {
      return res.status(400).json({
        message: "This email is already registered. Only one entry is allowed per email.",
      });
    }

    // Attach screenshot if uploaded
    if (req.files?.paymentScreenshot) {
      formData.paymentScreenshotURL = req.files.paymentScreenshot[0].path;
    }

    // Save form entry in MongoDB
    const newFormEntry = new ipsForm(formData);
    await newFormEntry.save();

    // Respond to client immediately
    res.status(201).json({
      message: "Form submitted successfully! Confirmation email will be sent soon ✅",
      data: newFormEntry,
    });

    // Send confirmation email asynchronously
    transporter.sendMail({
      from: `"DSA Launchpad" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: "Registration Successful - DSA Launchpad 6.0 🚀",
      html: `
        <h2>Hello ${formData.fullName},</h2>
        <p>🎉 Thank you for registering for <b>DSA Launchpad 6.0</b>! We are excited to have you join us for an engaging and informative session on Data Structures and Algorithms.</p>

        <h3>Workshop Details:</h3>
        <ul>
          <li><b>Date:</b> 11th and 12th October</li>
          <li><b>Time:</b> 9:00 AM - 6:00 PM</li>
          <li><b>Venue:</b> Mini CCF, Walchand College of Engineering, Sangli</li>
        </ul>

        <p>Please arrive 15 minutes early for registration and seating arrangements. Refreshments will be provided.</p>

        <h3>Prerequisites:</h3>
        <p>A foundational understanding of any programming language (C, C++, or Python), including:</p>
        <ul>
          <li>Data types (e.g., integers, floats, strings)</li>
          <li>Operators (arithmetic and logical)</li>
          <li>Control structures (loops and conditional statements)</li>
          <li>Loops (for, while, do while)</li>
          <li>Functions (return types, arguments)</li>
          <li>Standard Input/Output</li>
        </ul>

        <p>Also, bring a laptop with your preferred coding environment (IDE, compiler, etc.). If not, PCs will be available.</p>

        <p>For any questions, join our WhatsApp group: <a href="https://chat.whatsapp.com/IU6yea054ODG6Gy3O6AXL7?mode=ems_copy_t">Join WhatsApp Group</a></p>

        <p>We look forward to your active participation! ✨</p>
        <p>Best regards,<br/>WCE ACM Student Chapter</p>
      `,
    }).catch((err) => {
      console.error("Error sending confirmation email:", err);
    });

  } catch (error) {
    console.error("Error saving form data:", error);

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

// Check email availability
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
