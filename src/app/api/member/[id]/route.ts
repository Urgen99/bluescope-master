import { connectDB, dataSource } from "@/datasource";
import { Members } from "@/entities/Member";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  await connectDB();
  try {
    // extract id from url
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    // check if member exists
    const member = await dataSource.getRepository(Members).findOneBy({ id });

    if (!member) {
      return NextResponse.json(
        {
          success: false,
          message: "Member not found or been deleted.",
        },
        { status: 404 }
      );
    }
    await dataSource.getRepository(Members).delete(member.id);
    return NextResponse.json(
      { success: true, message: "Member deleted successfully." },
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
