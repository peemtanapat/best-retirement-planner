import { IPortfolio } from "@/interfaces/data";
import { create } from "zustand";
import { INITIAL_STATE } from "./state";
import * as StateClient from "../components/client";

interface Actions {
  fetchPortfolios: () => Promise<void>;
  addOrUpdatePortfolio: (port: IPortfolio) => void;
  removePortfolio: (port: IPortfolio) => void;
  setPortfolio: (port: IPortfolio) => void;
  _setTempPortfolio: (port: IPortfolio) => void;
}

interface State {
  portfolios: IPortfolio[];
  _tempPortfolios: IPortfolio[];
  isLoading: boolean;
  error: any;
}

export const usePortfolioStore = create<State & Actions>((set, get) => ({
  portfolios: INITIAL_STATE.portfolios,
  _tempPortfolios: INITIAL_STATE.portfolios,
  isLoading: true,
  error: null,
  fetchPortfolios: async () => {
    try {
      set({ isLoading: true, error: null });
      const res = await fetch("/api/states/0000/portfolios");

      const resBody = await res.json();

      if (resBody.data && resBody.data.length >= 1) {
        set({
          portfolios: resBody.data,
          _tempPortfolios: resBody.data,
        });
        set({ isLoading: false, error: null });
      } else {
        set({ isLoading: false, error: "no portfolios data" });
      }
    } catch (error) {
      set({ isLoading: false, error });
      console.log({ error });
    }
  },
  addOrUpdatePortfolio: async (newPortfolio: IPortfolio) => {
    const currentPortfolios = get().portfolios;

    const updatedPortfolios = currentPortfolios.map((currPort) => {
      if (currPort.name === newPortfolio.name) {
        return newPortfolio;
      }
      return currPort;
    });

    await StateClient.createOrUpdatePortfolios(updatedPortfolios);

    set({
      portfolios: updatedPortfolios,
      _tempPortfolios: updatedPortfolios,
    });
  },
  removePortfolio: (port: IPortfolio) => {
    set({
      portfolios: get().portfolios.filter(
        (currPort) => currPort.name !== port.name
      ),
    });
  },
  _setTempPortfolio: (port: IPortfolio) => {
    const updatedPortfolios = get()._tempPortfolios.map((currPort) => {
      if (currPort.name === port.name) {
        return port;
      }
      return currPort;
    });

    set({
      _tempPortfolios: updatedPortfolios,
    });
  },
  setPortfolio: (port: IPortfolio) => {
    const updatedPortfolios = get().portfolios.map((currPort) => {
      if (currPort.name === port.name) {
        return port;
      }
      return currPort;
    });

    set({
      portfolios: updatedPortfolios,
    });
  },
}));
