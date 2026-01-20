import { NextResponse } from "next/server";
import ChatMessage from "../../modals/Chat";
import User from "../../modals/User";

export default async function POST(req, res) {
    try {
        const { chatId } = await req.json();

        const chat = await ChatMessage.findById(chatId);
        if (!chat) {
            return NextResponse.json({ message: "Chat not found", success: false })
        } else {
            return NextResponse.json({ message: "Chat found", success: true, chat })
        }

    } catch (error) {
        return NextResponse.json({ messsage: error.message, success: false })

    }
}