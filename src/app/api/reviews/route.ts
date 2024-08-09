import { BASEURL } from "@/constant/constants";
import { connectDB, dataSource } from "@/datasource";
import { Reviews } from "@/entities/Reviews";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import { pipeline } from "stream";
import { promisify } from "util";
import { v4 as uuid } from "uuid";

const pump = promisify(pipeline);

// Add review admin route
export async function POST(req: NextRequest) {
  await connectDB();
  const pathName = "./public/uploads/avatar";
  const id = uuid();

  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const reviews = formData.get("reviews");
    const avatar: any = formData.get("avatar");
    const fileName = `${id}-${avatar.name}`;
    const filePath = `${pathName}/${fileName}`;

    await pump(avatar.stream(), fs.createWriteStream(filePath));
    await dataSource.getRepository(Reviews).save({
      name,
      reviews,
      avatar: fileName,
    } as Reviews);

    return NextResponse.json(
      {
        success: true,
        message: "Review submitted successfully",
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}

// Get all reviews public route
export async function GET() {
  await connectDB();
  try {
    // check if any review exists

    const reviews = await dataSource
      .getRepository(Reviews)
      .find({ order: { created_at: "DESC" } });

    if (!reviews || reviews.length === 0) {
      return NextResponse.json(
        { success: false, message: "No reviews found" },
        { status: 404 }
      );
    }
    // add backend url in images
    const filtered_data = reviews.map(
      ({ id, name, reviews, avatar, created_at }) => ({
        id,
        name,
        reviews,
        avatar: `${BASEURL}/uploads/avatar/${avatar}`,
        created_at,
      })
    );
    return NextResponse.json(
      { success: true, reviews: filtered_data },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
