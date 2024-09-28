"use client";

import { useState } from "react";
import AllInputs from "@/components/input/AllInputs";
import { PreAssumptionInterface } from "@/interfaces/data";
import TotalValue from "@/components/output/TotalValue";

const initialPreAssumption: PreAssumptionInterface = {
  inflationRate: 3,
  startingAge: 30,
  retirementAge: 60,
  principalAmount: 20000,
  monthlySave: 10000,
  annualReturn: 7,
};

export default function Page() {
  const [preAssumption, setPreAssumption] =
    useState<PreAssumptionInterface>(initialPreAssumption);
  const { startingAge, retirementAge } = preAssumption;

  function handleChange(inputKey: string, newValue: string) {
    setPreAssumption((previous: PreAssumptionInterface) => {
      const newPreAssumption: PreAssumptionInterface = {
        ...previous,
        [inputKey]: +newValue,
      };
      return newPreAssumption;
    });
  }

  return (
    <div>
      <h1>Your Investment</h1>

      <AllInputs preAssumption={preAssumption} onChange={handleChange} />
      <p>Retirement Time(years)={retirementAge - startingAge}</p>
      <TotalValue input={preAssumption} />
    </div>
  );
}
