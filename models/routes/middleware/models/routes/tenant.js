import express from "express";
import Tenant from "../models/Tenant.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET
router.get("/", auth, async (req, res) => {
  const tenants = await Tenant.find({ userId: req.user.id });
  res.json(tenants);
});

// CREATE
router.post("/", auth, async (req, res) => {
  const tenant = await Tenant.create({
    ...req.body,
    userId: req.user.id
  });
  res.json(tenant);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Tenant.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

export default router;
