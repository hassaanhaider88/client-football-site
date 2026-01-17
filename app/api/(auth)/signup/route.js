import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbConnect } from "../../../lib/dbConnect";
import User from "../../../modals/User";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    let {
      name: userName,
      email: userEmail,
      isPro,
      ChatCreatedWithAI: userChat,
    } = user;

    const res = NextResponse.json({
      success: true,
      message: "Signup successful",
      user: {
        name: userName,
        email: userEmail,
        isPro,
        ChatCreatedWithAI: userChat,
      },
      token,
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
