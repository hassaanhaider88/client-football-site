import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../modals/User";
import { dbConnect } from "../../../lib/dbConnect";

export async function POST(req, res) {
  try {
    await dbConnect();
    const { token } = await req.json();
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const userData = await User.findById(decode.userId);
    if (!userData) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    } else {
      let {
        name: userName,
        email: userEmail,
        isPro: userPro,
        ChatCreatedWithAI: userChat,
      } = userData;
      return NextResponse.json({
        success: true,
        user: {
          name: userName,
          email: userEmail,
          isPro: userPro,
          ChatCreatedWithAI: userChat,
        },
        token,
        message: "User found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Somthing wents worng on server",
    });
  }
}
