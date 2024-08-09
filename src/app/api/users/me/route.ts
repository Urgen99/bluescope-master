import { connectDB, dataSource } from "@/datasource";
import { Users } from "@/entities/Users";
import { getCookieToken } from "@/utils/getCookiesToken";
import { sendToken } from "@/utils/sendToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    // check if user is authenticated
    const id: string = await getCookieToken(req);
    const user: any = await dataSource
      .getRepository(Users)
      .findOne({ where: { id } });

    return await sendToken(user, 200, `Welcome ${user?.name}`);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
