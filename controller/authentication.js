// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Employee from "../models/Employee.js";

// REGISTER EMPLOYEE
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email & Password required" });

    const existing = await Employee.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Employee already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const emp = await Employee.create({
      name,
      email,
      password: hashed,
    });

    const token = jwt.sign({ id: emp._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      token,
      user: {
        id: emp._id,
        name: emp.name,
        email: emp.email,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN EMPLOYEE
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emp = await Employee.findOne({ email });

    if (!emp) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, emp.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: emp._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: { id: emp._id, name: emp.name, email: emp.email },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
};
