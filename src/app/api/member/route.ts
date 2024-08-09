import { connectDB, dataSource } from "@/datasource";
import { Members, Sector } from "@/entities/Member";
import { NextRequest, NextResponse } from "next/server";

// Route to sign up a new member
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      country,
      state,
      city,
      street,
      postal_code,
      sector,
      message,
    } = body;

    // check if the user is already a members
    const emailExists = await dataSource
      .getRepository(Members)
      .findOneBy({ email });
    if (emailExists) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        {
          status: 400,
        }
      );
    }
    // check if user selects another sector other than given
    if (!Object.keys(Sector).includes(sector)) {
      return NextResponse.json(
        {
          success: false,
          message: `Please select sector from ${Object.keys(Sector)}`,
        },
        { status: 400 }
      );
    }

    await dataSource.getRepository(Members).save({
      name,
      email,
      phone,
      country,
      state,
      city,
      street,
      postal_code,
      sector,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Success" },
      { status: 201 }
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

// Route to get all members - Admin Route
export async function GET() {
  await connectDB();
  try {
    // check if there exists any members
    const members = await dataSource
      .getRepository(Members)
      .find({ order: { created_at: "DESC" } });

    if (!members || members.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No members found",
        },
        { status: 404 }
      );
    }

    // add filters and pagination later

    return NextResponse.json(
      {
        success: true,
        members,
      },
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
