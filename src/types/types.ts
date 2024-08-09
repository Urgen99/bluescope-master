import { Users } from "@/entities/Users";
import { NextRequest } from "next/server";

export class ExtendedRequest extends NextRequest {
  user!: Users | null;
}
