import { IPortfolio, IPersonalData, State } from "@/interfaces/data";
import { create } from "zustand";
import { INITIAL_STATE } from "./state";

interface Actions {
  fetchData: () => Promise<void>;
  addOrUpdatePortfolio: (port: IPortfolio) => void;
  removePortfolio: (port: IPortfolio) => void;
  setPersonalData: (data: IPersonalData) => void;
  setPortfolio: (port: IPortfolio) => void;
}

interface _Data {
  state: State;
}

export const useStateStore = create<_Data & State & Actions>((set, get) => ({
  state: {
    personalData: INITIAL_STATE.personalData,
    portfolios: INITIAL_STATE.portfolios,
  },
  personalData: INITIAL_STATE.personalData,
  portfolios: INITIAL_STATE.portfolios,
  fetchData: async () => {
    try {
      const res = await fetch("/api/states/671c7d065af0da82e78b3e86");

      const state = await res.json();
      console.log({ resFetchData: state.state });
      set({
        state: state.state,
        personalData: state.state.personalData,
        portfolios: state.state.portfolios,
      });
    } catch (error) {
      console.log({ error_fetchData: error });
    }
  },
  addOrUpdatePortfolio: (newPort: IPortfolio) => {
    const currentPortfolios = get().portfolios;

    const updatedPortfolios = currentPortfolios.map((currPort) => {
      if (currPort.name === newPort.name) {
        return newPort;
      }
      return currPort;
    });

    set((state) => ({
      state: {
        ...state,
        portfolios: updatedPortfolios,
      },
      portfolios: updatedPortfolios,
    }));
  },
  removePortfolio: (port: IPortfolio) => {
    set((state) => ({
      ...state,
      portfolios: state.portfolios.filter(
        (currPort) => currPort.name !== port.name
      ),
    }));
  },
  setPersonalData: (data: IPersonalData) => {
    set((state) => ({
      ...state,
      state: {
        ...state,
        personalData: data,
      },
      personalData: data,
    }));
  },
  setPortfolio: (port: IPortfolio) => {
    const updatedPortfolios = get().portfolios.map((currPort) => {
      if (currPort.name === port.name) {
        return port;
      }
      return currPort;
    });

    set((state) => ({
      state: {
        ...state,
        portfolios: updatedPortfolios,
      },
      portfolios: updatedPortfolios,
    }));
  },
}));
