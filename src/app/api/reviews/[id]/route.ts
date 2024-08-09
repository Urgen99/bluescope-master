import { connectDB, dataSource } from "@/datasource";
import { Reviews } from "@/entities/Reviews";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
export async function DELETE(req: NextRequest) {
  await connectDB();
  try {
    // extract id from url
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    // check if review exists
    const review = await dataSource.getRepository(Reviews).findOneBy({ id });

    if (!review) {
      return NextResponse.json(
        {
          success: false,
          message: "Review not found or been deleted.",
        },
        { status: 404 }
      );
    }

    // delete image from storage
    fs.unlinkSync(`./public/uploads/avatar/${review.avatar}`);

    // delete review from database
    await dataSource.getRepository(Reviews).delete(review.id);
    return NextResponse.json(
      { success: true, message: "Review deleted successfully." },
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
