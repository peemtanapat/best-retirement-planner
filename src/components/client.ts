import { IPortfolio } from "@/interfaces/data";

export const getStates = async () => {
  try {
    const res = await fetch("/api/states", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }
  } catch (error) {
    console.log({ error });
  }
};

export const createOrUpdatePortfolios = async (portfolios: IPortfolio[]) => {
  try {
    const res = await fetch("/api/states/portfolios", {
      method: "PUT",
      body: JSON.stringify(portfolios),
    });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }
  } catch (error) {
    console.log({ error });
  }
};

export const createOrUpdatePortfolio = async (portfolio: IPortfolio) => {
  try {
    const res = await fetch("/api/states/portfolios", {
      method: "POST",
      body: JSON.stringify(portfolio),
    });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }
  } catch (error) {
    console.log({ error });
  }
};
