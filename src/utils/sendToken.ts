import { COOKIE_EXPIRE, JWT_SECRET } from "@/constant/constants";
import { Users } from "@/entities/Users";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export const sendToken = async (
  user: Users,
  status_code: number,
  message: string
) => {
  const token = jwt.sign({ _id: user.id }, JWT_SECRET);

  const res = NextResponse.json(
    {
      success: true,
      message,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
    { status: status_code }
  );

  res.cookies.set("token", token, {
    expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return res;
};
