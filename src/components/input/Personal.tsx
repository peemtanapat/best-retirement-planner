import { Fragment } from "react";
import NumberInput from "./NumberInput";
import { useStateStore } from "@/store/useStateStore";

export default function Personal() {
  const { personalData, setPersonalData } = useStateStore();

  const handleOnChange = (inputKey: string, value: string | number) => {
    setPersonalData({ ...personalData, [inputKey]: value });
  };

  return (
    <Fragment>
      <NumberInput
        inputKey="startingAge"
        label="Starting Age"
        value={personalData?.startingAge}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="retirementAge"
        label="Retirement Age"
        value={personalData?.retirementAge}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="retirePeriod"
        label="Retirement Period(years)"
        value={personalData?.retirePeriod ?? 0}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="desiredMonthlyIncome"
        label="Desired Monthly Income"
        value={personalData?.desiredMonthlyIncome ?? 0}
        onChange={handleOnChange}
      />
      <NumberInput
        inputKey="inflationRate"
        label="Inflation Rate"
        value={personalData?.inflationRate}
        onChange={handleOnChange}
      />
    </Fragment>
  );
}
