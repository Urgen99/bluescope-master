import { connectDB, dataSource } from "@/datasource";
import { Gallery } from "@/entities/Gallery";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  await connectDB();
  try {
    // extract id from url
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    // check if the image exists
    const image: any = await dataSource
      .getRepository(Gallery)
      .findOneBy({ id });

    if (!image) {
      return NextResponse.json(
        { success: false, message: "Image not found" },
        { status: 404 }
      );
    }

    // delete image from storage
    fs.unlinkSync(`./public/uploads/gallery/${image.name}`);

    // delete image from database
    await dataSource.getRepository(Gallery).delete(image.id);

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
