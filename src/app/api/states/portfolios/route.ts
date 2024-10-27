import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import States from "../../../../lib/schema";
import { IPortfolio, State } from "@/interfaces/data";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const newPortfolio: IPortfolio = await req.json();
    console.log({ request: newPortfolio });

    const prevState: State | null = await States.findById(
      "671c7d065af0da82e78b3e86"
    );

    if (prevState != null) {
      const prevPortfolios = prevState.portfolios.filter(
        (port) => port.name !== newPortfolio.name
      );

      const newStates: State = {
        personalData: prevState.personalData,
        portfolios: [...prevPortfolios, newPortfolio],
      };

      const updatedState = await States.updateOne(newStates);

      return NextResponse.json(
        { success: true, state: updatedState },
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
