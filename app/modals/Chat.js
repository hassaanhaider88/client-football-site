import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chatHeading: {
      type: String,
      default: "New Chat",
    },
  },
  { timestamps: true }
);

// export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
export default mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
