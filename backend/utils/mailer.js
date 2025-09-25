import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ to, subject, html }) => {
  const msg = {
    to,
    from: {
      email: process.env.SENDGRID_FROM, 
      name: "DSA Launchpad",
    },
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Email sent successfully to", to);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};