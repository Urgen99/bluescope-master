import { connectDB, dataSource } from "@/datasource";
import { Users } from "@/entities/Users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    // check if any users exists
    const users = await dataSource
      .getRepository(Users)
      .find({ order: { created_at: "desc" } });

    if (!users || users.length === 0) {
      NextResponse.json(
        { success: false, message: "No users found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
