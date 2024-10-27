import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../../lib/schema";

export async function GET(req: NextRequest) {
  await dbConnect();

  const stateId = req.nextUrl.searchParams.get("id");
  console.log({ stateId });

  try {
    const state = await States.findById("671c7d065af0da82e78b3e86");
    console.log({ stateById: state });

    return NextResponse.json({ success: true, state }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
