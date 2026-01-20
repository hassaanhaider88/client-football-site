import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "seo-wala-ai"],
      required: true,
    },

    service: {
      type: String,
      enum: ["MetaTags", "KeywordGens", "YtVideoSeo", "MediaPost"],
      required: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },


    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ChatMessage =
  mongoose.models.ChatMessage ||
  mongoose.model("ChatMessage", chatMessageSchema);

export default ChatMessage;

