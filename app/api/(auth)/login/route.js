import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../../modals/User";
import { dbConnect } from "../../../lib/dbConnect";

export async function POST(req, res) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return NextResponse.json({
        sucess: false,
        message: "User not found",
      });
    }
    const checkPass = await bcrypt.compare(password, checkUser.password);
    if (!checkPass) {
      return NextResponse.json({
        sucess: false,
        message: "Incorrect password",
      });
    }
    const token = jwt.sign({ userId: checkUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    let { name: userName, email: userEmail, isPro,ChatCreatedWithAI:userChat } = checkUser;
    return NextResponse.json({
      sucess: true,
      message: "User Log in sucessfully",
      user: {
        name: userName,
        email: userEmail,
        isPro,
        ChatCreatedWithAI:userChat,
      },
      token,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Somthing wents worng on server",
    });
  }
}
