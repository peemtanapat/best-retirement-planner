import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../../lib/schema";
import { IPortfolio, State } from "@/interfaces/data";
import { INITIAL_STATE } from "@/store/state";
import { getFirstState } from "../_dev";

export async function PUT(req: NextRequest) {
  await dbConnect();

  try {
    const newPortfolios: IPortfolio[] = await req.json();

    let prevState: State | null

    if (process.env.IS_DEV_MODE) {
      prevState = await getFirstState();
    } else {
      prevState = await States.findById(
        "671e046876393e6a0b735aba"
      );
    }

    if (prevState != null) {
      const newStates: State = {
        personalData: prevState.personalData,
        portfolios: newPortfolios,
      };

      await States.updateOne(newStates);

      return NextResponse.json(
        { success: true, data: newPortfolios },
        { status: 200 }
      );
    }

    // create new State
    const newState: State = {
      personalData: INITIAL_STATE.personalData,
      portfolios: newPortfolios,
    };

    States.create(newState);

    return NextResponse.json(
      { success: true, data: newPortfolios, message: "created new State" },
      { status: 201 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const newPortfolio: IPortfolio = await req.json();

    const prevState: State | null = await States.findById(
      "671e046876393e6a0b735aba"
    );

    if (prevState != null) {
      const updatedPortfolios = prevState.portfolios?.map((currPort) => {
        if (currPort.name === newPortfolio.name) {
          return newPortfolio;
        }
        return currPort;
      });

      const newStates: State = {
        personalData: prevState.personalData,
        portfolios: updatedPortfolios,
      };

      await States.updateOne(newStates);

      return NextResponse.json(
        { success: true, data: newPortfolio },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Not found state" },
      { status: 404 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
