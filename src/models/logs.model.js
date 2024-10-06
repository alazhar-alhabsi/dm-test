import mongoose from "mongoose";

const course = mongoose.Schema(
  {
    user_id: { type: String },
    error: { type: String },
    action: { type: String },
    action_decs: { type: String },
  },
  { timestamps: true }
);

const courseSchema = new mongoose.model("logs", course);

export default courseSchema;
