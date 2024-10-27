import { useStateStore } from "@/store/useStateStore";
import { calculate } from "@/utilities/calculators";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import getGraphLines from "./GraphLines";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Graph() {
  const isServerSide = useIsServerSide();

  const { state } = useStateStore();

  if (isServerSide) return null;

  const data = calculate(state);

  console.log({ data });

  return (
    <div className="graph-placeholder">
      <LineChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray="0 0" vertical={false} />
        <XAxis
          tick={{ fontSize: "0.7rem" }}
          dataKey="year"
          padding={{ left: 30, right: 40 }}
        />
        <YAxis
          domain={["auto", (dataMax: number) => dataMax * 1.12]}
          tick={{ fontSize: "0.7rem" }}
          tickFormatter={(value: number) =>
            new Intl.NumberFormat("en-US").format(value)
          }
        />
        <Tooltip
          formatter={(value: number) =>
            new Intl.NumberFormat("en-US").format(value)
          }
        />
        <Legend />
        {getGraphLines(state)}
      </LineChart>
    </div>
  );
}

export const useIsServerSide = () => {
  const [isServerSide, setIsServerSide] = useState(true);

  useEffect(() => {
    setIsServerSide(false);
  }, [setIsServerSide]);

  return isServerSide;
};
