import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../modals/User";
import Chat from "../../../modals/Chat";
import { dbConnect } from "../../../lib/dbConnect";

export async function POST(req) {
  try {
    await dbConnect();
    const { token } = await req.json();
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const userData = await User.findById(decode.userId).populate("chats");
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
        chats,
      } = userData;
      return NextResponse.json({
        success: true,
        user: {
          name: userName,
          email: userEmail,
          isPro: userPro,
          chats,
        },
        token,
        message: "User found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Somthing wents worng on server",
    });
  }
}
