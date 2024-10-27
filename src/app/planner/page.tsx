"use client";

import Graph from "@/components/output/Graph";
import AllInputs from "@/components/input/AllInputs";
import { useEffect } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function Page() {
  const { portfolios, fetchPortfolios } = usePortfolioStore();
  const totalPortfolio = portfolios?.length;

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

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
