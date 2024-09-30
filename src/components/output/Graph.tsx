import { PreAssumptionInterface } from '@/interfaces/data';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Dot } from 'recharts';

interface GraphProps {
    input: PreAssumptionInterface;
}

const mainColor = "#008254"
const secondColor = "#0063b9"

export default function Graph(props: GraphProps) {
    const isServerSide = useIsServerSide();
    if (isServerSide) return null;

    const data = getData(props.input)
    const dataLength = data.length

    return (
        <div className='graph-placeholder'>
            <LineChart width={700} height={500} data={data}>
                <CartesianGrid
                    strokeDasharray="0 0"
                    vertical={false}
                />
                <XAxis
                    tick={{ fontSize: "0.7rem" }}
                    dataKey="year"
                    padding={{ left: 30, right: 40 }}
                />
                <YAxis
                    domain={['auto', (dataMax: number) => dataMax * 1.12]}
                    tick={{ fontSize: "0.7rem" }}
                    tickFormatter={(value: number) => new Intl.NumberFormat('en-US').format(value)}
                />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('en-US').format(value)} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="stock"
                    stroke={mainColor}
                    activeDot={{ r: 5 }}
                    label={<CustomLabel color={mainColor} length={dataLength} />}
                />
                <Line
                    type="monotone"
                    dataKey="saving"
                    stroke={secondColor}
                    activeDot={{ r: 5 }}
                    label={<CustomLabel color={secondColor} length={dataLength} />}
                />
            </LineChart>
        </div>
    );
}

function getData({ startingAge, retirementAge, principalAmount, monthlySave, annualReturn }: PreAssumptionInterface) {
    const data = [];
    const years = retirementAge - startingAge;
    let netValueStock = principalAmount
    let netValueSaving = principalAmount

    for (let index = 0; index < years; index++) {
        const currAge = startingAge + index
        const year = currAge < 9 ? ("0" + currAge) : currAge
        const yearlySaving = monthlySave * 12

        const rawStock = netValueStock + yearlySaving
        const rawSaving = netValueSaving + yearlySaving;

        const currStock = rawStock * (1 + (annualReturn / 100));
        const currSaving = rawSaving * 1.02;

        netValueStock = currStock
        netValueSaving = currSaving

        data.push({ year, stock: Math.round(currStock), saving: Math.round(currSaving) })
    }

    return data;
}

export const useIsServerSide = () => {
    const [isServerSide, setIsServerSide] = useState(true)

    useEffect(() => {
        setIsServerSide(false)
    }, [setIsServerSide]);

    return isServerSide
}

interface CustomLabelInterface {
    x?: number;
    y?: number;
    value?: number;
    color: string
    index?: number
    length: number
}

const CustomLabel = ({ x = 0, y = 0, value = 0, color, index, length }: CustomLabelInterface) => {
    if (index === length - 1) {
        const offset = 10;
        return (
            <g>
                <Dot cx={x} cy={y} r={5} fill={color} stroke='none' />
                <text x={x} y={y - offset} dy={-4} fill={color} fontSize="1rem" textAnchor='middle'>{new Intl.NumberFormat('en-US').format(value)}</text>
            </g>
        )
    }

    return null;
}

