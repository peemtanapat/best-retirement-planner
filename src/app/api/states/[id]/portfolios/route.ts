import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../../../lib/schema";
import { State } from "@/interfaces/data";

export async function GET(req: NextRequest) {
  await dbConnect();

  const stateId = req.nextUrl.searchParams.get("id");

  try {
    const state: State | null = await States.findById(
      "671e046876393e6a0b735abb"
    );
    // start - for Dev
    if (!state) {
      const state2: State[] | null = await States.find({}).limit(1);
      if (state2 && state2.length >= 1) {
        return NextResponse.json(
          { success: true, data: state2[0].portfolios },
          { status: 200 }
        );
      } else {
        return NextResponse.json({ success: false, data: [] }, { status: 200 });
      }
    }
    // end - for Dev
    return NextResponse.json(
      { success: true, data: state?.portfolios },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
