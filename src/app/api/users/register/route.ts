import { connectDB, dataSource } from "@/datasource";
import { Role, Users } from "@/entities/Users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const { email, password, role, name } = body;
    // check if email is already registered
    const emailExists = await dataSource
      .getRepository(Users)
      .findOneBy({ email });

    if (emailExists) {
      return NextResponse.json({
        success: false,
        message: "Email already exists",
      });
    }

    // check if role is valid
    if (!Object.keys(Role).includes(role)) {
      return NextResponse.json(
        { success: false, message: `Select role from ${Object.keys(Role)} ` },
        { status: 400 }
      );
    }
    const newUser = new Users();

    newUser.name = name;
    newUser.email = email;
    newUser.password = await newUser.hashPassword(password);
    newUser.role = role;

    await dataSource.getRepository(Users).save(newUser);

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
