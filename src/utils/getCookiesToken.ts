import { JWT_SECRET } from "@/constant/constants";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
export const getCookieToken = async (req: NextRequest) => {
  try {
    const token: string = req.cookies.get("token")?.value || "";
    const decoded: any = jwt.verify(token, JWT_SECRET);
    return decoded._id;
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: "Please login to access this resource",
      error: err.message,
    });
  }
};
