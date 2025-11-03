import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  courseInterest: String,
  message: String,
  source: { type: String, default: "public_form" },
  claimed: { type: Boolean, default: false },
  claimedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
  },
  claimedAt: Date,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Enquiry", EnquirySchema);
