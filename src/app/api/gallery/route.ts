import { BASEURL } from "@/constant/constants";
import { connectDB, dataSource } from "@/datasource";
import { Gallery } from "@/entities/Gallery";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import { pipeline } from "stream";
import { promisify } from "util";
import { v4 as uuid } from "uuid";

const pump = promisify(pipeline);
export async function POST(req: NextRequest) {
  await connectDB();
  const pathName = "./public/uploads/gallery";
  try {
    const formData = await req.formData();
    const images: File[] = formData.getAll("images") as File[];

    // check if there are any images
    if (!images || images.length === 0) {
      return NextResponse.json(
        { success: false, message: "Please select at least one image." },
        { status: 400 }
      );
    }

    // save all files in the database and in storage
    images.forEach(async (image: any) => {
      const id = uuid();
      const fileName = `${id}-${image.name}`;
      const filePath = `${pathName}/${fileName}`;
      await pump(image.stream(), fs.createWriteStream(filePath));
      await dataSource.getRepository(Gallery).save({ name: fileName });
    });

    return NextResponse.json({
      success: true,
      message: "Image uploaded successfully.",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    // check if there are any images
    const images = await dataSource
      .getRepository(Gallery)
      .find({ order: { created_at: "DESC" } });

    if (!images || images.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No images found",
        },
        { status: 404 }
      );
    }

    // adding base url in images url
    const data = images.map(({ id, name, created_at }) => ({
      id,
      url: `${BASEURL}/uploads/gallery/${name}`,
      created_at,
    }));

    return NextResponse.json(
      {
        success: true,
        images: data,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
