"use client";

import Graph from "@/components/output/Graph";
import AllInputs from "@/components/input/AllInputs";
import { useStateStore } from "@/store/useStateStore";
import { useEffect } from "react";

export default function Page() {
  console.log({ env: process.env.MONGODB_URI });

  const { portfolios, fetchData } = useStateStore();
  const totalPortfolio = portfolios?.length;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <div className="input-container">
        <h1>Portfolios (total={totalPortfolio})</h1>
        <AllInputs />
      </div>
      <div className="output-container">
        <h1>Result</h1>
        <Graph />
      </div>
    </div>
  );
}
