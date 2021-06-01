import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    name: { type: String },
    image: { type: String },
    technology: { type: String },
    link: { type: String },
    description: { type: String },
    d_description: { type: String },
  },
  { timestamps: true }
);
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
