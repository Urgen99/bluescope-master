import { connectDB, dataSource } from "@/datasource";
import { Users } from "@/entities/Users";
import { sendToken } from "@/utils/sendToken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: "Please enter all required fields.",
      });
    }

    // check if user exists
    const user = await dataSource.getRepository(Users).findOne({
      where: { email },
      select: ["id", "name", "email", "password"],
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const isPasswordMatched = await user.comparePassword(password);
    // Match passwords
    if (!isPasswordMatched) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Credentials",
        },
        { status: 400 }
      );
    }

    return await sendToken(user, 200, `Welcome back ${user.name}`);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
