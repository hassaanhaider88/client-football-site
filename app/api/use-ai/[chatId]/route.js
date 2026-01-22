import { NextResponse } from "next/server";
import Message from "../../../modals/Message";
import { dbConnect } from "../../../lib/dbConnect";

export async function GET(req, context) {
  await dbConnect();

  const { chatId } = await context.params;
  console.log(chatId);


  const messages = await Message.find({
    chatId,
  }).sort({ createdAt: 1 }).populate("chatId", "userId");

  return NextResponse.json(messages);
}
