import Portfolio from "./Portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { IPortfolio } from "@/interfaces/data";

function sort(portfolios: IPortfolio[]) {
  return portfolios?.sort((a, b) => a.seq - b.seq);
}

export default function Portfolios() {
  const { _tempPortfolios, _setTempPortfolio, isLoading } = usePortfolioStore();
  const displayPortfolios = sort(_tempPortfolios);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {displayPortfolios?.map((port) => {
        return (
          <Portfolio
            key={port.name}
            portfolio={port}
            setPortfolio={_setTempPortfolio}
          />
        );
      })}
    </>
  );
}
