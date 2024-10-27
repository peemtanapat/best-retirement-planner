import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../../lib/schema";

export async function GET(req: NextRequest) {
  await dbConnect();

  const stateId = req.nextUrl.searchParams.get("id");

  try {
    const state = await States.findById("671e046876393e6a0b735aba");

    return NextResponse.json({ success: true, data: state }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
