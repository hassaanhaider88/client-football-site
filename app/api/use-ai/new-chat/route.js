import { NextResponse } from "next/server";
import ChatModal from "../../../modals/Chat";
import Message from "../../../modals/Message"
import User from "../../../modals/User";
import { dbConnect } from "../../../lib/dbConnect";
import JWT from "jsonwebtoken";

export async function POST(req) {
    try {
        await dbConnect();

        const { userToken, chatId, userMessage, serviceUsed } = await req.json();

        let activeChat = chatId;


        const decodeUser = JWT.verify(userToken, process.env.JWT_SECRET);
        const userId = decodeUser.userId;
        if (!userId) {
            return NextResponse.json({
                success: false,
                message: "User Is not Authenticated"
            })
        }

        // 1️⃣ Create chat if not exists
        if (!chatId) {
            const newChat = await ChatModal.create({
                userId,
                chatHeading: userMessage.slice(0, 40),
            });
            activeChat = newChat._id;
            // saveUser history
            await User.findByIdAndUpdate(userId, {
                $addToSet: { chats: activeChat }, // use $addToSet to avoid duplicates
            });
        }

        // 2️⃣ Save user message
        await Message.create({
            chatId: activeChat,
            role: "user",
            content: userMessage,
            serviceUsed,
        });

        // 3️⃣ Call AI (dummy for now)
        const aiReply = `AI response for: ${userMessage}`;


        // 4️⃣ Save AI response
        await Message.create({
            chatId: activeChat,
            role: "ai",
            content: aiReply,
            serviceUsed,
        });



        // 5️⃣ Send response
        return NextResponse.json({
            success: true,
            chatId: activeChat,
            aiReply,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
