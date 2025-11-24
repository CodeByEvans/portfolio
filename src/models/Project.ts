import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true },
    image: { type: String, required: true },
    logo: { type: String, required: true },
    tags: { type: [String], required: true },
    gradient: { type: String, required: true },
    status: { type: String, required: true },
    url: { type: String, required: false },
    github: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
