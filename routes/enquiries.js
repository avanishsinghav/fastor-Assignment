import express from "express";
import auth from "../middleware/auth.js";
import {
  createEnquiry,
  getUnclaimedEnquiries,
  claimEnquiry,
  getMyEnquiries,
} from "../controllers/enquiryController.js";

const router = express.Router();

router.post("/public", createEnquiry);
router.get("/unclaimed", auth, getUnclaimedEnquiries);
router.post("/:id/claim", auth, claimEnquiry);
router.get("/my", auth, getMyEnquiries);

export default router;
