// controllers/total_count.js
import { ipsForm } from "../models/launchpad.model.js";

export const getTotalCount = async (req, res) => {
  try {
    const students = await ipsForm.find({}, "fullName email college"); // only required fields
    const count = await ipsForm.countDocuments();

    res.status(200).json({
      totalStudents: count,
      students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
