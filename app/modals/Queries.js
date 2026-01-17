import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);


const Query = mongoose.models.Query || mongoose.model("Query", QuerySchema);

export default Query;