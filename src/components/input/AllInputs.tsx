import { PreAssumptionInterface } from "@/interfaces/data";
import GlobalInputs from "./GlobalInputSection";
import PreRetirementInputs from "./PreRetirementInputs";

export interface InputSectionInterface {
  preAssumption: PreAssumptionInterface;
  onChange: (inputKey: string, newValue: string) => void;
}

export default function AllInputs(props: InputSectionInterface) {
  return (
    <section id="user-input">
      <div id="input-group">
        <GlobalInputs
          preAssumption={props.preAssumption}
          onChange={props.onChange}
        />
        <PreRetirementInputs
          preAssumption={props.preAssumption}
          onChange={props.onChange}
        />
      </div>
    </section>
  );
}
