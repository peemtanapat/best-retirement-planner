import { IPortfolio } from "@/interfaces/data";

export const getData = async () => {
  try {
    const res = await fetch("/api/states", {
      method: "GET",
    });
    console.log({ resBody: await res.json() });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }
  } catch (error) {
    console.log({ error_getData: error });
  }
};

export const createOrUpdatePortfolio = async (portfolio: IPortfolio) => {
  try {
    const res = await fetch("/api/states/portfolios", {
      method: "POST",
      body: JSON.stringify(portfolio),
    });
    console.log({ resBody: await res.json() });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }
  } catch (error) {
    console.log({ error_getData: error });
  }
};
