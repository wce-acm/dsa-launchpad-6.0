import { mongoose, Schema } from "mongoose";

const launchpadSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    branch: { type: String, required: true },
    college: { type: String, required: true },
    year: { type: String, required: true },
    transactionId: { type: String },
    paymentScreenshotURL: { type: String },
  },
  { timestamps: true }
);

export const ipsForm = mongoose.model("launchpadForm", launchpadSchema);
