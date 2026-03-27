import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema({
  name: String,
  unit: String,
  rent: Number,
  status: String,
  dueDate: String,
  userId: String
});

export default mongoose.model("Tenant", tenantSchema);
