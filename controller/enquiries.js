import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUnclaimedEnquiries = async (req, res) => {
  const leads = await Enquiry.find({ claimed: false }).sort({ createdAt: -1 });
  res.json(leads);
};

export const claimEnquiry = async (req, res) => {
  const enquiry = await Enquiry.findById(req.params.id);
  if (!enquiry) return res.status(404).json({ message: "Not found" });
  if (enquiry.claimed)
    return res.status(400).json({ message: "Already claimed" });

  enquiry.claimed = true;
  enquiry.claimedBy = req.user._id;
  enquiry.claimedAt = new Date();
  await enquiry.save();
  await enquiry.populate("claimedBy", "name email");

  res.json(enquiry);
};

export const getMyEnquiries = async (req, res) => {
  const leads = await Enquiry.find({ claimedBy: req.user._id });
  res.json(leads);
};
