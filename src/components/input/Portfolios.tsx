import { useStateStore } from "@/store/useStateStore";
import Portfolio from "./Portfolio";

export default function Portfolios() {
  const { portfolios, setPortfolio } = useStateStore();

  return (
    <>
      {portfolios.map((port) => {
        return (
          <Portfolio
            key={port.name}
            portfolio={port}
            setPortfolio={setPortfolio}
          />
        );
      })}
    </>
  );
}
