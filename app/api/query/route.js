import { NextResponse } from "next/server";
import Query from "../../modals/Queries";
import { dbConnect } from "../../lib/dbConnect";

export async function POST(req, res) {
  try {
    await dbConnect();
    const { name, email, message } = await req.json();
    const existingQuery = await Query.findOne({ email });
    if (existingQuery) {
      return NextResponse.json({
        success: false,
        message: "Query already submitted",
      });
    }
    const query = await Query.create({ name, email, message });
    if (!query) {
      return NextResponse.json({
        success: false,
        message: "Query not submitted",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Query submitted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
