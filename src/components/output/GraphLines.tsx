import { IPortfolio, State } from "@/interfaces/data";
import { Dot, Line } from "recharts";

interface GraphLinesProps {
  state: State;
}

interface CustomLabelInterface {
  x?: number;
  y?: number;
  value?: number;
  color: string;
  index?: number;
  length: number;
}

const mainColor = "#008254";

// export default function GraphLines({ state }: GraphLinesProps) {
//   const { startingAge, retirementAge } = state.personalData;
//   const { portfolios } = state;
//   const yearsOfSaving = retirementAge - startingAge;

//   return (
//     <>
//       {portfolios.map((port) => {
//         const portYearsOfSaving = port.startingAge
//           ? retirementAge - port.startingAge
//           : yearsOfSaving;
//         const color = port.styles?.color ?? mainColor;
//         return (
//           <Line
//             key={port.name}
//             type="monotone"
//             dataKey={port.name}
//             stroke={color}
//             activeDot={{ r: 5 }}
//             label={<CustomLabel color={color} length={portYearsOfSaving} />}
//           />
//         );
//       })}
//     </>
//   );
// }

export default function getGraphLines(portfolios: IPortfolio[]) {
  return portfolios.map((port) => {
    const yearsOfSaving = port.endingAge - port.startingAge;
    const color = port.styles?.color ?? mainColor;

    return (
      <Line
        key={port.name}
        type="monotone"
        dataKey={port.name}
        stroke={color}
        activeDot={{ r: 5 }}
        label={<CustomLabel color={color} length={yearsOfSaving} />}
      />
    );
  });
}

const CustomLabel = ({
  x = 0,
  y = 0,
  value = 0,
  color,
  index,
  length,
}: CustomLabelInterface) => {
  if (index === length - 1) {
    const offset = 10;

    return (
      <g>
        <Dot cx={x} cy={y} r={5} fill={color} stroke="none" />
        <text
          x={x}
          y={y - offset}
          dy={-4}
          fill={color}
          fontSize="1rem"
          textAnchor="middle"
        >
          {new Intl.NumberFormat("en-US").format(value)}
        </text>
      </g>
    );
  }

  return null;
};
