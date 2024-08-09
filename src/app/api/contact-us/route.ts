import { connectDB, dataSource } from "@/datasource";
import { ContactUs } from "@/entities/ContactUs";
import { NextRequest, NextResponse } from "next/server";

// Route to send a message
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const { first_name, last_name, email, message } = body;

    await dataSource.getRepository(ContactUs).save({
      first_name,
      last_name,
      email,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
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

// Route to get all messages - Admin Route
export async function GET() {
  await connectDB();
  try {
    // check if there exists any messages
    const messages = await dataSource.getRepository(ContactUs).find({
      order: { created_at: "DESC" },
    });

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No messages found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, messages }, { status: 200 });
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
