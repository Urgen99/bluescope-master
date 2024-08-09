import { connectDB, dataSource } from "@/datasource";
import { Users } from "@/entities/Users";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  await connectDB();
  try {
    // extract id from url
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    // check if user exists
    const user = await dataSource.getRepository(Users).findOneBy({ id });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found or been deleted.",
        },
        { status: 404 }
      );
    }
    await dataSource.getRepository(Users).delete(user.id);
    return NextResponse.json(
      { success: true, message: "User deleted successfully." },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
