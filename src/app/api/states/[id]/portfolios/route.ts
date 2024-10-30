import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../../../lib/schema";
import { State } from "@/interfaces/data";
import { getFirstState } from "../../_dev";

export async function GET(req: NextRequest) {
  await dbConnect();

  const stateId = req.nextUrl.searchParams.get("id");

  try {
    let state: State | null

    if (process.env.IS_DEV_MODE) {
      state = await getFirstState();
    } else {
      state = await States.findById(
        stateId
      );
    }

    if (!state) {
      return NextResponse.json({ success: false, data: [] }, { status: 200 });
    }

    return NextResponse.json(
      { success: true, data: state.portfolios },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
