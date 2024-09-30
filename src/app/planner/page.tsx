"use client";

import { useState } from "react";
import AllInputs from "@/components/input/AllInputs";
import { PreAssumptionInterface } from "@/interfaces/data";
import Graph from "@/components/output/Graph";

const initialPreAssumption: PreAssumptionInterface = {
  inflationRate: 3,
  startingAge: 30,
  retirementAge: 60,
  principalAmount: 200000,
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
    <div className="container">
      <div className="input-container">
        <h1>Your Investment</h1>
        <AllInputs preAssumption={preAssumption} onChange={handleChange} />
      </div>
      <div className="output-container">
        <h1>Result</h1>
        <Graph input={preAssumption} />
      </div>
    </div>
  );
}
