import mongoose from "mongoose";

const log = mongoose.Schema(
  {
    user_id: { type: String },
    error: { type: String },
    action: { type: String },
    action_decs: { type: String },
  },
  { timestamps: true }
);

const logSchema = new mongoose.model("logs", log);

export default logSchema;
