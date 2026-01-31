import { NextResponse } from "next/server";
import Chat from "../../../modals/Chat";
import { dbConnect } from "../../../lib/dbConnect";

export async function POST(req) {
    try {
        await dbConnect();
        const { chatId } = await req.json();
        if (!chatId) {
            return NextResponse.json({
                success: false,
                message: "Chat ID is required."
            })
        }
        const DeleteChat = await Chat.findByIdAndDelete(chatId);
        if (!DeleteChat) {
            return NextResponse.json({
                success: false,
                message: "Chat not found."
            })
        } else {
            return NextResponse.json({
                success: true,
                message: "Chat deleted successfully."
            })
        }

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something wents wrong.",
            error: error.message
        })
    }
}