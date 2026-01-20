import { NextResponse } from "next/server";
import ChatMessage from "../../modals/Chat";
import User from "../../modals/User";

export default async function POST(req, res) {
    try {
        const { userId, message, service } = await req.json();

        const user = await User.findById(userId);


    } catch (error) {
        return NextResponse.json({ messsage: error.message, success: false })

    }
}