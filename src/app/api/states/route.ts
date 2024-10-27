import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../lib/schema";

export async function GET() {
  await dbConnect();

  try {
    const states = await States.find({});
    return NextResponse.json({ success: true, states }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const resBody = await req.json();

    const createdState = await States.create(resBody);

    return NextResponse.json(
      { success: true, state: createdState },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
