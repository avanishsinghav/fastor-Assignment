import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authentication from "./routes/authentication.js";
import enquiries from "./routes/enquiries.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB(); // connect to database

// Routes
app.use("/api/auth", authentication);
app.use("/api/enquiries", enquiries);

// testing
app.get("/", (req, res) => res.send("CRM backend up"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
