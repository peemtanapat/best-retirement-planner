import NumberInput from "./NumberInput";
import { IPortfolio } from "@/interfaces/data";
import TextInput from "./TextInput";
import * as StateClient from "../client";

export interface PortfolioProps {
  portfolio: IPortfolio;
  setPortfolio: (port: IPortfolio) => void;
}

export default function Portfolio({
  portfolio,
  setPortfolio,
}: Readonly<PortfolioProps>) {
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await StateClient.createOrUpdatePortfolio(portfolio);
  };

  const handleOnChange = (inputKey: string, value: string | number) => {
    console.log({ message: inputKey, value });

    setPortfolio({ ...portfolio, [inputKey]: value });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextInput
        inputKey="name"
        label="Portfolio Name"
        value={portfolio?.name}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="startingAge"
        label="Starting Age"
        value={portfolio?.startingAge ?? 30}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="principalAmount"
        label="Principal Amount"
        value={portfolio?.principalAmount}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="monthlySave"
        label="Monthly Save"
        value={portfolio?.monthlySave}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="annualReturn"
        label="Annual Return"
        value={portfolio?.annualReturn}
        onChange={handleOnChange}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
